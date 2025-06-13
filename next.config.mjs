/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "http",
        hostname: "107.23.87.13",
      },
      {
        protocol: "https",
        hostname: "api.mahaliafrica.com",
      },
      {
        protocol: "http",
        hostname: "207.180.253.55",
        port: "8090",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
