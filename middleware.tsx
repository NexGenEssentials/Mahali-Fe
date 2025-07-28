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
    if( decoded.role === "agent") {
      if (
        pathname.startsWith("/agent") ||
        pathname.startsWith("/service/booking")
      ) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(loginUrl);
      }
    }

    if (decoded.role === "customer") {
      if (
        pathname.startsWith("/account") ||
        pathname.startsWith("/service/booking")
      ) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(loginUrl);
      }
    } else {
      return NextResponse.redirect(loginUrl);
    }
  } catch (error) {
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/account/:path*", "/service/booking/:path*", "/agent/:path*"],
};
