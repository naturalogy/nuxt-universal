const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'assets/styles/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-scrollto'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/axios'
  ],

  axios: {
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['IE 11', 'last 2 versions' ]
      })
    ]
  }
}
