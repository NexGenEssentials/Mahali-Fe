import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultGreen: "#3f5a2e",
        primaryGreen: "#667c3e",
        primaryBlue: "#1d2228",
        primaryWhite: "#f0f5f1",
      },
    },
  },
  plugins: [],
};
export default config;
