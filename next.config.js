/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rdjfperzxspxcczwupah.supabase.co"]
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
        'supports-color': 'commonjs supports-color',
    })
    return config
  }
}

module.exports = nextConfig
