import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        appBg: "#FAFAFA",
        secBg: "#FFFFFF",
        mainColor: "#633BFE",
        activeBg: "#EFECFF",
        textColor: "#191919",
        softColor: "#858585",
      },
      fontFamily: {
        opensans: [`var(--font-opensans)`, "sans-serif"],
        secondary: [`var(--font-title)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [],
};
export default config;
