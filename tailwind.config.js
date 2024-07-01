/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#fff",
        dark: {
          900: "#000",
        },
        charcoal: "#131313",
        darkCharcoal: "#252627",
        red: {
          600: "#F0141E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
