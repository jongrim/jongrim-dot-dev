// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "jongrim.dev",
      link: [{ rel: "icon", href: "/favicon.png" }],
      meta: [
        { name: "author", content: "Jonathan Grim" },
        {
          name: "description",
          content:
            "Professional site of Jonathan Grim - software engineer and leader",
        },
        { name: "keywords", content: "Jon Grim, Jonathan Grim" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@vueuse/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        prefetch: true,
        families: {
          Oswald: [400, 600],
          Lato: [400],
        },
      },
    ],
  ],
});
