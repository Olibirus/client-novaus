import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Inspired by Novaus brand palette from pitch deck
        ink: {
          DEFAULT: "#0A0A0A",
          deep: "#050505",
          soft: "#141414",
        },
        cream: {
          DEFAULT: "#EFEAE0",
          warm: "#E8E1D3",
          pale: "#F5F1E8",
        },
        gold: {
          DEFAULT: "#C9A14B",
          light: "#D9B765",
          dark: "#8E6F2F",
        },
        bronze: {
          DEFAULT: "#A8714F",
          light: "#C28C68",
          dark: "#7D553B",
        },
        sand: "#B89B7A",
        ash: "#6B6B6B",
        line: "#1F1F1F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
        "extra-wide": "0.2em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
