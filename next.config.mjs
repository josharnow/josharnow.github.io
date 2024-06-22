import MillionLint from '@million/lint';
import million from 'million/compiler';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "standalone",
  output: "export",
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {

    // NOTE - This is needed to load .glb and .gltf files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource'
      // use:
      //   [
      //     {
      //       loader: 'file-loader',
      //       options:
      //       {
      //         outputPath: 'assets/models/'
      //       }
      //     }
      //   ]
    })

    return config
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com'
    }, {
      protocol: 'https',
      hostname: 'cdn-icons-png.flaticon.com'
    }],
    unoptimized: true,
  },
  experimental: {
    // NOTE - Next.js 15 is incompatible with react-three-fiber (as of 2024-06-02)
    // reactCompiler: true,
    forceSwcTransforms: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'src/styles')],
  // }
};

// NOTE - Fixes compile error (https://github.com/aidenybai/million/issues/963#issuecomment-1952815924)
const millionConfig = {
  mute: true,
  auto: { rsc: true },
  rsc: true,
};

// NOTE - Enabling million appears to mess up the which active link is selected in the sidebar (as of 2024-06-02)
// export default million.next(MillionLint.next({
//   rsc: true, 
//   filter: {
//     include: [
//       "**/components/*.{mtsx,mjsx,tsx,jsx}",
//       "**/app/*.{mtsx,mjsx,tsx,jsx}",
//     ],
//   }, 
// })(nextConfig), millionConfig);

export default nextConfig;
