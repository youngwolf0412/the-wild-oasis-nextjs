/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- Move this to the root level
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pdjuffxcmekxtypwxyfd.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/*",
      },
    ],
  },
};

export default nextConfig;
