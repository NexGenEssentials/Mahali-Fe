"use server";

import { cookies } from "next/headers";
const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const accessToken = cookies().get("accessToken")?.value;

export const Subscribe = async (
  email: string
): Promise<{ status: string; message: string }> => {
  try {
    const response = await fetch(`${base_url}/subscribe/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const ContactUs = async (contactData: {
  full_name: string;
  email: string;
  message: string;
}): Promise<{ status: string; message: string }> => {
  try {
    const response = await fetch(`${base_url}/contact-us/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
console.log("ContactUs response", response);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
