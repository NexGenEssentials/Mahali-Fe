'use server'
import { cookies } from "next/headers";

export  const IsLoggedIn = (): boolean => {
  const accessToken = cookies().get("accessToken")?.value;
  if (accessToken) {
    return true;
  }
  return false;
};
