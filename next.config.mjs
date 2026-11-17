import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.PORTFOLIO_BASE_PATH || "",
  images: { unoptimized: true },
  output: "export",
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  trailingSlash: true,
};

export default nextConfig;
