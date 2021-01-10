export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Prescripted',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyDuCstZyPTP9lAQzaQr4v3nLc_qomtSvV4",
      authDomain: "testscript-269da.firebaseapp.com",
      projectId: "testscript-269da",
      storageBucket: "testscript-269da.appspot.com",
      messagingSenderId: "1015042244434",
      appId: "1:1015042244434:web:aa61be35c624218b70448b"
    },
    services: {
      auth: true,
      firestore: true,
      // functions: true,
      storage: true,
      database: true,
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
