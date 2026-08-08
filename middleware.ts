import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "https";

  // 1. Canonical Redirect: www to non-www and http to https in production
  if (host.startsWith("www.") || (proto === "http" && process.env.NODE_ENV === "production")) {
    const cleanHost = host.replace(/^www\./, "");
    return NextResponse.redirect(`https://${cleanHost}${url.pathname}${url.search}`, 301);
  }

  // 2. Trailing Slash Canonicalization: redirect /path/ to /path (excluding root "/")
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, Next.js internals, API, icons, and sitemap.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|site.webmanifest|.*\\..*).*)",
  ],
};
