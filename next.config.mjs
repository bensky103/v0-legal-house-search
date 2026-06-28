/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Image optimization ON: Next/Vercel generates a responsive srcset + modern formats,
    // so mobile devices no longer download desktop-size images (improves LCP / Core Web Vitals).
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
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
