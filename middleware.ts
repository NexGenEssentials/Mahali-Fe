import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  const token = request.cookies.get("accessToken");

  // Redirect to login if token is missing
  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Apply middleware to specified routes
export const config = {
  matcher: ["/admin/:path*", "/account/:path*", "/service/:path*"],
};
