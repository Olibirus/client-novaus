import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Novaus palette — updated by client
        ink: {
          DEFAULT: "#000000",
          deep: "#000000",
          soft: "#111111",
        },
        cream: {
          DEFAULT: "#E4E2DD",
          warm: "#D0CCC5",
          pale: "#EDEBE8",
        },
        gold: {
          DEFAULT: "#B7937B",
          light: "#C9A891",
          dark: "#9A7863",
        },
        bronze: {
          DEFAULT: "#B7937B",
          light: "#C9A891",
          dark: "#9A7863",
        },
        sand: "#BCB3A3",
        ash: "#807B6D",
        line: "#1E1E1E",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
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
