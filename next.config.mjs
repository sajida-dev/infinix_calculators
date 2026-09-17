const cspHeader = `
  default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https: https://images.unsplash.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.googletagmanager.com https://www.google-analytics.com;
  font-src 'self' data: https://fonts.gstatic.com;
  connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com;
  frame-src 'self' https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
`
    .replace(/\s{2,}/g, " ")
    .trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
    },
    experimental: {
        optimizePackageImports: ["@heroicons/react", "lucide-react"],
    },
    onDemandEntries: {
        maxInactiveAge: 15 * 1000,
        pagesBufferLength: 2,
    },
    images: {
        unoptimized: false,
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.infinixcalculator.com",
                    },
                ],
                destination: "https://infinixcalculator.com/:path*",
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2|ttf|eot|webmanifest|txt)",
                locale: false,
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: cspHeader,
                    },
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "Cross-Origin-Opener-Policy",
                        value: "same-origin-allow-popups",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
