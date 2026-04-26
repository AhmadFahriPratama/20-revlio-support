import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0891b2",
        secondary: "#06b6d4",
        accent: "#ecfeff",
        background: "#ffffff",
        foreground: "#164e63",
      },
    },
  },
  plugins: [],
};

export default config;
