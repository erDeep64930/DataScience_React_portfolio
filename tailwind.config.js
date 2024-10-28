/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        CardShadow: ["0 5px 10px rgba(0,0,0,0.3)"],
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bai: ["Bai Jamjuree", "sans-serif"],
        meri: ["Merienda", "cursive"],
        alkatra: ["Alkatra", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        vibes: ["Great Vibes", "cursive"],
        tilt: ["Tilt Prism", "cursive"],
      },
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
        "trans-right": {
          "0%, 100%": {
            transform: "scaleX(1)",
            filter: "grayscale(1)",
          },
          "50%": {
            transform: "scaleX(1.1)",
            filter: "grayscale(0)",
            boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
          },
        },
        rotating: {
          "0%": { transform: "scale(0.92) rotate(0deg)" },
          "100%": { transform: "scale(0.92) rotate(360deg)" },
        },
        roll: {
          "0%": { transform: "translate(-50% ,-50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%,-50%) rotate(360deg)" },
        },
      },
      animation: {
        wavey: "wavey 1s linear infinite",
        "trans-right": "trans-right 1.5s ease-in-out infinite",
        rotating: "rotating 10s linear infinite",
        roll: "roll 4s linear infinite",
      },
    },
  },
  plugins: [],
};
