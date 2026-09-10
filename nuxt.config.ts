// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: 'app/',

  // Nuxt compatibility date
  compatibilityDate: "2025-07-15",

  // Nuxt modules
  modules: [
    "@nuxtjs/tailwindcss", // TailwindCSS
    "@pinia/nuxt",         // Pinia store
    "@nuxt/fonts",
    "@nuxt/image"
  ],

  // Global CSS
  css: [
    "primeicons/primeicons.css",
    "~/assets/css/main.css"
  ],

  fonts: {
    families: [
      { name: 'Playfair Display', weights: [400, 500, 600, 700] },
      { name: 'Inter', weights: [400, 500, 600, 700] },
    ],
  },

  // Runtime config
  runtimeConfig: {
    public: {
        firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    }
  },

  // DevTools
  devtools: {
    enabled: true
  },

  // Vite-specific settings (optional but can help with .convex imports)
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  },

  // TypeScript settings
  typescript: {
    includeWorkspace: true
  }
});
