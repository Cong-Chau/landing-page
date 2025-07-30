import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: false,
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
