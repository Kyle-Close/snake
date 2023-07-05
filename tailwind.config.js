/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/src/img/background.jpeg')",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
