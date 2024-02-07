import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        primary:
          "linear-gradient(90deg, #42D4FC 0%, #3528FE 60%, #8029F7 100%)",
        secondary:
          "linear-gradient(45deg, #fbc153 10%, #f74844 30%, #b528a6 45%, #5442d5 80%)",
      },
      animation: {
        "fade-in-out": "fade-in-out ease-in-out forwards",
      },
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { scale: ".8", opacity: "0" },
          "20%, 85%": { scale: "1", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
