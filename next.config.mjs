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
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/a/**",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
