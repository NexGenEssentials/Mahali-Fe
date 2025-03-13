"use server";

import { BookingDetails } from "@/app/types";
import { cookies } from "next/headers";
const base_url = process.env.BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const CreateBooking = async (
  carBook: BookingDetails
): Promise<{ status?: string; description?: string }> => {
  try {
    const response = await fetch(`${base_url}/bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(carBook),
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
