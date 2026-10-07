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

  const isWww = hostWithoutPort.startsWith("www.");
  const isHttp = proto === "http" && process.env.NODE_ENV === "production";
  const hasTrailingSlash = url.pathname.length > 1 && url.pathname.endsWith("/");

  // Combine all canonicalization checks (www, protocol, trailing slash) into a single redirect
  // to avoid chained multi-hop redirects that hurt page speed and crawl efficiency.
  if (isWww || isHttp || hasTrailingSlash) {
    const cleanHost = isWww ? hostWithoutPort.replace(/^www\./, "") : hostWithoutPort;
    const targetDomain = cleanHost || "infinixcalculator.com";
    const targetPath = hasTrailingSlash ? url.pathname.slice(0, -1) : url.pathname;
    return NextResponse.redirect(`https://${targetDomain}${targetPath}${url.search}`, 301);
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
