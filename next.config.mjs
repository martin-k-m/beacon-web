/**
 * Static export for GitHub Pages, served from a custom domain.
 *
 * The site is published at https://beacon.blinkdev.me, which serves from the
 * DOMAIN ROOT — so there is NO base path. Assets resolve from "/".
 *
 * `NEXT_PUBLIC_BASE_PATH` stays as an escape hatch: set it (e.g. "/beacon-web")
 * only if you ever need to preview the build under a GitHub *project* sub-path
 * instead of the custom domain. It is intentionally left empty in CI.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
