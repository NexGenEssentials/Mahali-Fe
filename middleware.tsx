import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const decoded = jwt.decode(token) as { exp?: number; role?: string } | null;

    if (!decoded || !decoded.exp || !decoded.role) {
      return NextResponse.redirect(loginUrl);
    }

    const isExpired = decoded.exp * 1000 < Date.now();
    


    if (isExpired) {
      request.cookies.delete("accessToken");
      return NextResponse.redirect(loginUrl);
    }

    const pathname = request.nextUrl.pathname;

    if (decoded.role === "admin") {
      // Allow admin only on admin routes
      if (pathname.startsWith("/admin")) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(loginUrl);
      }
    } else if (decoded.role === "customer") {
      // Allow customers only on customer routes
      if (
        pathname.startsWith("/account") ||
        pathname.startsWith("/service/booking")
      ) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(loginUrl);
      }
    }

    // If role doesn't match expected values, deny access
    return NextResponse.redirect(loginUrl);
  } catch (error) {
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/account/:path*", "/service/booking/:path*"],
};
