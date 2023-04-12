export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@sidebase/nuxt-auth'
  ],

  auth: { 
    origin: undefined
  },

  telemetry: false,
})
