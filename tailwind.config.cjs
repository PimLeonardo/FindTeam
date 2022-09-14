/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Play", "sans - serif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background.jpg')",
        "card-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
