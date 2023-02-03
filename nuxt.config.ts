// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'モバマスアーカイブ（二宮飛鳥編）',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'robots', content: 'none, noarchive' },
        { name: 'author', content: 'info@absolute-ze.ro' },
        { name: 'robots', content: 'none, noarchive' },
        { name: 'google', content: 'notranslate' },
        {
          name: 'format-detection',
          content: 'telephone=no, address=no, email=no',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '#二宮飛鳥' },
        {
          name: 'twitter:description',
          content: process.env.npm_package_description || '',
        },
        { name: 'twitter:image', content: 'https://imas.absolute-ze.ro/card.jpg' },
        { name: 'twitter:image:alt', content: 'Asuka NINOMIYA' },
        { property: 'og:image', content: 'https://imas.absolute-ze.ro/favicon.jpg' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  css: ['@/assets/tailwind.sass', '@/assets/styles.sass'],
  modules: [],
  devServer: {
    host: '0.0.0.0',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {
        preset: ['advanced', { zindex: false }],
      },
    },
  },
  build: {
    transpile: ['konsta'],
  },
  typescript: {
    typeCheck: true,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    preview: {
      host: '0.0.0.0',
    },
  },
  nitro: {
    // preset: 'vercel',
  },
  webpack: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[local]_[hash:base62:6]',
        },
      },
    },
    optimizeCSS: true,
  },
})
