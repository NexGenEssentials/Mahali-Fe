"use server";

import { BookingDetails, BookingResponse } from "@/app/types";
import { cookies } from "next/headers";
const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const CreateBooking = async (
  bookingData: BookingDetails
): Promise<{ status?: string; description?: string }> => {
  try {
    const response = await fetch(`${base_url}/bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        status: response.statusText,
        description: data.detail || "Something went wrong",
      };
    }

    return data;
  } catch (error) {
    return {
      status: "Internal Server Error",
      description: "Something went wrong",
    };
  }
};

export const getAllMyBookings = async (): Promise<BookingResponse> => {
  try {
    const response = await fetch(`${base_url}/bookings/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return data;
    }

    return data;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};

export const updateBookingStatus = async (
  id: number,
  newStatus: string
): Promise<{ status: string; message: string }> => {
  try {
    const response = await fetch(
      `${base_url}/bookings/${id}/${newStatus.toLocaleLowerCase()}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      return data;
    }

    return data;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};

export const DeleteMyBooking = async (objectId:number): Promise<boolean> => {
  try {
    const response = await fetch(`${base_url}/bookings/${objectId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  console.log(response)
    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};
