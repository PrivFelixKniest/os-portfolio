import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "q85crflxoa.ufs.sh",
        port: "",
        pathname: "/f/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
