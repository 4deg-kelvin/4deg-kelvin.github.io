/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
   output: "export",
   basePath: "/personal-site",
   assetPrefix: "/personal-site",
   // assetPrefix: isProd ? "/personal-site" : '', 
   images: { unoptimized: true },
};

export default nextConfig;
