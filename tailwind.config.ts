import type { Config } from "tailwindcss";

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
      // TODO - add custom colors as we go along to avoid having to change color in multiple places in the future
      backgroundColor: {
        primary: "#252839",
        hover: "#ffb700",
        technology: "#ffb700",
        // "bg-dark": "linear-gradient(-45deg, #00c1df, #0028ff, #000428, #000428, #004e92)",
      },
      // background: {
      //   dark: "linear-gradient(-45deg, #00c1df, #0028ff, #000428, #000428, #004e92)",
      // },
      textColor: {
        primary: "#333",
        hover: "#333",
        dark: "#ffb700",
      },
      borderColor: {
        primary: "#ffb700",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
