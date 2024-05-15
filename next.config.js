/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/next_ghpages",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;