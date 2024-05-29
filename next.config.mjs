import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // webpack: {},
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com'
    }, {
      protocol: 'https',
      hostname: 'cdn-icons-png.flaticon.com'
    }]
    // unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'src/styles')],
  // }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);