/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./**.*",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: "Oswald, sans-serif",
        OpenSans: "'Open Sans', sans-serif",
        Lato: "Lato, sans-serif",
      },
    },
  },
  plugins: [],
};
