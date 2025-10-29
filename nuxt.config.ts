import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  shadcn: {
    prefix: '',
    /**
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
build: {
    transpile: ['gsap']
},
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/image", "shadcn-nuxt", "nuxt-marquee", "@pinia/nuxt"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});