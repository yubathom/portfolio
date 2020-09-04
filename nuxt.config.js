
export default {
  mode: 'spa',
  target: 'static',
  head: {
    title: 'Thomas Yuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap'
      }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/theme.scss'
    ]
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],
  plugins: [
    '~/plugins/visibility-change.js'
  ]
}
