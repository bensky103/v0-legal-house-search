/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // Project-type pages moved from /projects/[type] to /services/[type].
    const projectTypeSlugs = ["shechunot-hadashot", "mehir-lamishtaken", "pinui-binui", "tama-38"]
    return projectTypeSlugs.map((slug) => ({
      source: `/projects/${slug}`,
      destination: `/services/${slug}`,
      permanent: true,
    }))
  },
}

export default nextConfig
