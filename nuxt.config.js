module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['bulma/css/bulma.css', '~/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/vue-cookie-law.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    '@nuxtjs/component-cache',
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/moment'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
    },
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
    },
    {
      src:
        'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Object.entries'
    }
  ],
  /*
   ** Build configuration
   */
  build: {
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Exécuter ESLint lors de la sauvegarde
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
