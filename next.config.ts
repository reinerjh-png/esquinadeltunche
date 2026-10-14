import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 390, 430, 768, 1024],
    imageSizes: [112, 192, 256, 400],
  },
};

export default nextConfig;
