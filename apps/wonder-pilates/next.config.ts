import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/cms", "@repo/seo", "@repo/analytics"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
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
            value: "www.wonderpilates.kr",
          },
        ],
        destination: "https://wonderpilates.kr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
