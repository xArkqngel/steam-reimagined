/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.akamai.steamstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "store.akamai.steamstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.akamai.steamstatic.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
