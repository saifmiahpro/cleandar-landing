import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable strict checks for Docker builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
