import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {protocol: "https", hostname: "silkyrabbit-us.backendless.app"},
      {protocol: "https", hostname: "backendlessappcontent.com"}
    ]
  }
};

export default nextConfig;
