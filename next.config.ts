import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/tehnologii-biznesa",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;