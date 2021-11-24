module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
