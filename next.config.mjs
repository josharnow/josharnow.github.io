import MillionLint from '@million/lint';
import million from 'million/compiler';  
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    
    return config
  },
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
    forceSwcTransforms: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'src/styles')],
  // }
};
// export default MillionLint.next({
//   rsc: true
// })(nextConfig);

export default nextConfig;

// const millionConfig = {
//   auto: true,
// };

// NOTE - This isn't working right now.... gives "Collecting page data  .TypeError: (0 , i.AI) is not a function" when linting on build
// export default million.next(MillionLint.next({
//   rsc: true, 
//   filter: {
//     // include: "",
//     include: [
//       // "**/components/*.{mtsx,mjsx,tsx,jsx}",
//       "**/app/*.{mtsx,mjsx,tsx,jsx}",
//     ],
//   }, 
// })(nextConfig), millionConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // output: "export",
//   // webpack: {},
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'cdn-icons-png.flaticon.com',
//       },
//     ],
//     // unoptimized: true,
//   },
//   // sassOptions: {
//   //   includePaths: [path.join(__dirname, 'src/styles')],
//   // }

// };

// export default nextConfig;