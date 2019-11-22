
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
    ],
  },
  loading: { color: '#3B8070' },
  css: [
    // Nothing yet
  ],
  plugins: [
    // '~/plugins/axios',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/moment',
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': { target: 'http://127.0.0.1:8084/', pathRewrite: { '^/api/': '' } },
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post', propertyName: 'token' },
          user: { url: '/api/users/profile', method: 'get', propertyName: false },
        },
      },
    },
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
}
