/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "gega-red": "#bc1a45",
        "gega-melon": "#ffd369",
        "gega-grey": "#dddddd",
        "gega-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
