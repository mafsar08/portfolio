import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-studies/ai-chatbot",
        destination: "/work/ai-chatbot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
