import type { NextConfig } from "next";

 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'via.placeholder.com',
      'cdn4.vectorstock.com'
    ],
  },
};

export default nextConfig;   // for ESM import style
module.exports = nextConfig; // for CommonJS require style