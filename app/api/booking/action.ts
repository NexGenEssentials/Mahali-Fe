"use server";

import {
  BookingData,
  BookingDetails,
  BookingResponse,
  PaymentResponseType,
} from "@/app/types";
import { cookies } from "next/headers";
const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const CreateBooking = async (
  bookingData: BookingDetails
): Promise<BookingData> => {
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

    return data;
  } catch (error) {
    throw error;
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
      `${base_url}/bookings/${id}/${newStatus.toLowerCase()}/`,
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

export const DeleteMyBooking = async (objectId: number): Promise<boolean> => {
  try {
    const response = await fetch(`${base_url}/bookings/${objectId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};

export const CreatePaymentMethod = async (bookingData: {
  booking_id?: number;
  pmethod?: string;
  amount: number;
  redirect_url: string;
}): Promise<PaymentResponseType> => {
  try {
    const response = await fetch(`${base_url}/payment/initiate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
