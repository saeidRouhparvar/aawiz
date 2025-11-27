import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        cyanV: {
          50: "var(--cyan-50)",
          100: "var(--cyan-100)",
          200: "var(--cyan-200)",
          300: "var(--cyan-300)",
          400: "var(--cyan-400)",
          500: "var(--cyan-500)",
          600: "var(--cyan-600)",
          700: "var(--cyan-700)",
          800: "var(--cyan-800)",
          900: "var(--cyan-900)",
          950: "var(--cyan-950)",
        },
        neutV: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        redV: {
          50: "var(--red-50)",
          100: "var(--red-100)",
          200: "var(--red-200)",
          300: "var(--red-300)",
          400: "var(--red-400)",
          500: "var(--red-500)",
          600: "var(--red-600)",
          700: "var(--red-700)",
          800: "var(--red-800)",
          900: "var(--red-900)",
          950: "var(--red-950)",
        },
        limeV: {
          50: "var(--lime-50)",
          100: "var(--lime-100)",
          200: "var(--lime-200)",
          300: "var(--lime-300)",
          400: "var(--lime-400)",
          500: "var(--lime-500)",
          600: "var(--lime-600)",
          700: "var(--lime-700)",
          800: "var(--lime-800)",
          900: "var(--lime-900)",
          950: "var(--lime-950)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
