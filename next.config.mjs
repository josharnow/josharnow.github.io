/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: {},
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
};

export default nextConfig;
