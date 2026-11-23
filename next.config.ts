import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
