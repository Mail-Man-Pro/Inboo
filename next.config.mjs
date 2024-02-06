import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(new URL('.', import.meta.url).pathname, 'styles')],
  }
};

export default nextConfig;
