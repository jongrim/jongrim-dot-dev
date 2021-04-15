module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme,
        'dark-cyan': '#0F7282',
        'mb-pink': '#FF3EB5',
        'mb-yellow': '#FFE900',
      }),
      textColor: (theme) => ({
        ...theme,
        'mb-pink': '#FF3EB5',
      }),
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      banner: ['Oswald', 'sans-serif'],
      display: ['Kickback', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
