const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'de-ch',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' },
      {
        src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        id: 'snipcart',
        'data-api-key': 'MzliY2EyZjYtODM4YS00MjY5LWJmMWItZTZhYjRkMGYzZTc0NjM3MTkyODA4ODA4MzE1NTg0'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', { accessToken: 'dflFZrrUlyFZbm8bVsnLfgtt', cacheProvider: 'memory' }]
  ],

  /*
  ** Router middleware
  */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
