/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightC: "#fafafa",
        darkC: "#0f0f0f",
        blueC: "#002868",
        redC: "#BF0A30",
      },
      fontFamily: {
        tsg: ["Brussels City"],
        tsgDancing: ["Minomu "],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: false,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
