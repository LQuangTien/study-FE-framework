// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Muli',
        },
      ],
    },
  },
  css: ['./assets/global.css', './assets/variables.css'],
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  typescript: {
    typeCheck: true,
  },
});
