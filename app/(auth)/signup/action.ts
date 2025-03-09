"use server"
import { SignupFormValues } from "./form";

export async function SignupUser(formData: SignupFormValues) {
  const response = await fetch(``, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
}
