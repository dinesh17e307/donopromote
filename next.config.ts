import { ChildProcess } from "child_process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com','asset.gecdesigns.com','architectureprize.com','www.w3.org','media.gettyimages.com','media.tenor.com'],
  },
  fallback:{
    child_process:false
  }
};

export default nextConfig;
