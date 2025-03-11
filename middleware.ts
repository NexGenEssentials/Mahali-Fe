import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken"; // Install with: npm install jsonwebtoken

export function middleware(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  const token = request.cookies.get("accessToken")?.value; // Get token value

  // Redirect to login if token is missing
  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const decoded = jwt.decode(token) as { exp?: number } | null;

    // If decoding fails or there's no expiration time, treat it as invalid
    if (!decoded || !decoded.exp) {
      return NextResponse.redirect(loginUrl);
    }

    // Check if token is expired
    const isExpired = decoded.exp * 1000 < Date.now(); // Convert exp to milliseconds
    console.log({isExpired})
    if (isExpired) {
      return NextResponse.redirect(loginUrl);
    }
  } catch (error) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Apply middleware to specified routes
export const config = {
  matcher: ["/admin/:path*", "/account/:path*", "/service/booking/:path*"],
};
