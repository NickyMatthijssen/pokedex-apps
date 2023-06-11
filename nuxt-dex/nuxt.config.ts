// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["@/../library/styles/main.scss"],

  modules: ["@pinia/nuxt"],

  nitro: {
    prerender: {
      routes: ["/api/species/absol", "/absol"],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
