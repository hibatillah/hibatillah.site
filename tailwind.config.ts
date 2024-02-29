import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        dim: "dim 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { scale: ".8", opacity: "0" },
          "20%, 85%": { scale: "1", opacity: "1" },
        },
        dim: {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("group-enabled", ":merge(.group):not(:disabled) &");
      addVariant("hover-within", ":is(&:hover,&:focus-within)");
      addVariant(
        "group-hover-within",
        ":merge(.group):is(:hover,:focus-within) &"
      );
    }),
  ],
};
export default config;
