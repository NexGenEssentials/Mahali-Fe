import { cookies } from "next/headers";
const accessToken = cookies().get("accessToken")?.value as string;

export const decodeJWT = (): { user_id: string } | null => {
  try {
    const payload = accessToken.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  } catch (error) {
    console.error("Invalid JWT Token", error);
    return null;
  }
};
