/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // If this site is later nested under the main UPTIB site as /textile, set:
  // basePath: "/textile",
};

export default nextConfig;
