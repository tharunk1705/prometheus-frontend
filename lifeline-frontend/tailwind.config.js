/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      IBM: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FFF",
        secondary: "#f5f5f5",
        accent: {
          50: "#f87171",
          100: "#ef4444",
          200: "#dc2626",
          300: "#b91c1c",
        },
      },
    },
  },
  plugins: [],
};
