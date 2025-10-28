import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/image", "shadcn-nuxt", "nuxt-marquee", "@pinia/nuxt"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});