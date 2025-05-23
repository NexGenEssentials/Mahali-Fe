"use server";
import { cookies } from "next/headers";

import jwt from "jsonwebtoken";

export const IsLoggedIn = async (): Promise<boolean> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) return false;

  const decoded = jwt.decode(accessToken) as { exp?: number } | null;


  if (!decoded?.exp || decoded.exp * 1000 < Date.now()) {
    cookieStore.delete("accessToken");
    return false;
  }

  return true; 
};

export const Logout = (): boolean => {
  const accessToken = cookies().delete("accessToken");
  if (accessToken) {
    return true;
  }
  return false;
};
