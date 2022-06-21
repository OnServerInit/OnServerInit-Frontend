import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config'),
    },
  },
  head: {
    css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  }
})