import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  /* config options here */
  images: {
    domains: ["cdn.prod.website-files.com", "placehold.co", "trilegal.com"],
  },
};

export default withNextIntl(nextConfig);
