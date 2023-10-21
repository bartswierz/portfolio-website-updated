import type { Config } from "tailwindcss";

// ANIMATION PLUGIN CONFIGURATOR https://www.tailwindcss-animated.com/configurator.html
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],

  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#252839",
        brand: "#ffb700",
        hover: "#ffb700",
        technology: "#ffb700",
        // "bg-dark": "linear-gradient(-45deg, #00c1df, #0028ff, #000428, #000428, #004e92)",
      },
      // background: {
      //   dark: "linear-gradient(-45deg, #00c1df, #0028ff, #000428, #000428, #004e92)",
      // },
      textColor: {
        primary: "#333",
        highlight: "#ffb700",
        hover: "#333",
        dark: "#ffb700",
      },
      borderColor: {
        primary: "#ffb700",
        secondary: "#0072fe",
        brand: "#ffb700",
      },
      boxShadow: {
        navbar: "0 0 20px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
export default config;
