module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Times New Roman'", "Times", "serif"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        auraAccent: "#dbdbdb",
        auraBlue: "#269cff",
      },
    },
  },
  plugins: [],
};
