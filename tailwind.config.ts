import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [],
  theme: {
    extend: {
      keyframes: {
        carousel: {
          "0%,25% ,100%": { transform: "translateX(0)" },
          "30%,55%": { transform: "translateX(-100%)" },
          "60%,85%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        carousel: "carousel 15s ease-in-out infinite ",
      },
      colors: {
        aedl: "#ff710d",
        "aedl-dark": "#334454",
      },
    },
  },
  plugins: [],
};
export default config;
