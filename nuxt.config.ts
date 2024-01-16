// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  modules: [
    '@element-plus/nuxt',
    '@unocss/nuxt'
  ],
  elementPlus: {
    importStyle: 'scss'
  },
  css: ['@/assets/sass/master.scss']
})
