// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  components: false,

  imports: {
    autoImport: false
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', 'nuxt-svgo'],

  css: ['~/assets/css/style.css'],

  build: {
    transpile: ['gsap'],
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}

    }
  },

  svgo: {
    defaultImport: 'component'
  },


})