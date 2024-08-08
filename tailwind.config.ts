import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2E93FF",
          dark: "#2E93FF",
        },
        background: {
          light: "#ffffff",
          dark: "#01131F",
        },
        title: {
          light: "#002C53",
          dark: "#ffffff",
        },
        body: {
          light: "rgba(0, 44, 83, 0.7)",
          dark: "rgba(255, 255, 255, 0.7)",
        },
        "gradient-color": "rgba(46, 147, 255, 0.32)",
        "gradient-color-light": "rgba(46, 147, 255, 0.2)",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      maxWidth: {
        wrapper: "75rem",
      },
      backgroundImage: {
        "dark-mask":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 15%, #334155 100%);",
        "light-mask":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 15%, #EBF1FF 100%);",
        "white-light-mask":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 15%, white 100%);",
        "card-gradient":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 87, 255, 0.1) 100%);",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(216, 236, 251, 0.1) 50%, rgba(216, 236, 251, 0.7) 100%);",
        "custom-radial": "radial-gradient(at center, #2E93FF 32%, 01131F 32%)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
export default config;
