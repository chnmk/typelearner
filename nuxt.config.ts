// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  // @ts-expect-error
  modules: [
    // @ts-expect-error
    (_options, nuxt) => {
      // @ts-expect-error
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "@nuxtjs/eslint-module",
    "nuxt-auth-utils",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
