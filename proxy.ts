import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const rawHost =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    request.nextUrl.hostname ||
    "";
  const proto = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol.replace(":", "");

  // Strip optional port from host string (e.g. "www.infinixcalculator.com:443" -> "www.infinixcalculator.com")
  const hostWithoutPort = rawHost.split(":")[0].toLowerCase();

  // 1. Canonical Redirect: www to non-www and http to https
  const isWww = hostWithoutPort.startsWith("www.");
  const isHttp = proto === "http" && process.env.NODE_ENV === "production";

  if (isWww || isHttp) {
    const cleanHost = isWww ? hostWithoutPort.replace(/^www\./, "") : hostWithoutPort;
    const targetDomain = cleanHost || "infinixcalculator.com";
    return NextResponse.redirect(`https://${targetDomain}${url.pathname}${url.search}`, 301);
  }

  // 2. Trailing Slash Canonicalization: redirect /path/ to /path (excluding root "/")
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, Next.js internals, API, icons, and sitemap.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|site.webmanifest|.*\\..*).*)",
  ],
};
