"use server";
import { BookingData } from "@/app/types";
import { CartResponse } from "@/app/types/cart";
import { cookies } from "next/headers";
const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const ConfirmCart = async (cartData: {
  start_date: string;
  end_date: string;
  note: string;
}): Promise<{ success: boolean; message: string; data: BookingData }> => {
  try {
    const response = await fetch(`${base_url}/cart/confirm-booking/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(cartData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const AddToCart = async (cartData: {
  room_type: number;
  quantity: number;
}): Promise<{ success: boolean }> => {
  try {
    const response = await fetch(`${base_url}/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(cartData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getCart = async (): Promise<CartResponse> => {
  try {
    const response = await fetch(`${base_url}/cart/`, {
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

export const DeleteItemToCart = async (
  room_type: number
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${base_url}/cart/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ room_type }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
