/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Andika", "sans-serif"],
    },
    colors: {
      blue: "rgb(17 24 39)",
      red: "#AD1E22",
      yellow: "#ddac26",
      white: "#ffffff",
      none: "transparent"
    },
  },
  plugins: [],
};
