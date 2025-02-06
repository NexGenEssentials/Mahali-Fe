'use server'
import { cookies } from "next/headers";

export const IsLoggedIn = async (): Promise<boolean> => {
  const accessToken = cookies().get("accessToken")?.value;
  return !!accessToken;
};


export  const Logout = (): boolean => {
  const accessToken = cookies().delete("accessToken");
  if (accessToken) {
    return true;
  }
  return false;
};
