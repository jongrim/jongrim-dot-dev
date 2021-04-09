module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme,
        'sea-foam': '#58D7C9',
      }),
      textColor: (theme) => ({
        ...theme,
        'mb-pink': '#FF3EB5',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
