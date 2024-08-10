/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
