import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          dark: "#1E1E1E",
        },
        title: {
          light: "#002C53",
          dark: "#ffffff",
        },
        body: {
          light: "rgba(0, 44, 83, 0.7)",
          dark: "rgba(255, 255, 255, 0.7)",
        },
      },
      fontSize: {
        xxs: '0.625rem',
      },
      maxWidth: {
        wrapper: '75rem',
      }
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
