import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/lunch-menu", destination: "/menus/lunch", permanent: true },
      { source: "/evening-menu", destination: "/menus/evening", permanent: true },
      { source: "/drinks-menu", destination: "/menus/drinks", permanent: true },
      { source: "/menus", destination: "/menus/lunch", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      // PLACEHOLDER: temporary stock imagery — replace with real Refuge
      // photography (ideally served from AWS S3/CloudFront) before launch.
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
