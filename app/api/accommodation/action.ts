"use server";

import { AccommodationResponse } from "@/app/types/accommodation";
import { cookies } from "next/headers";

const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const getAllAccomodations = async (): Promise<AccommodationResponse> => {
  try {
    const response = await fetch(`${base_url}/accommodations/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong", { error });
    throw error;
  }
};
