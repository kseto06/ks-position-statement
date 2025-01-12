import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out", // fadeIn animation
        typewriter: "typewriter 3s steps(1000) forwards", //typing cursor animation
        cursor: 'typewriter 3s steps(1000) forwards, blink 3s steps(1000) infinite 2s',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },   // invisible at opacity = 0
          "100%": { opacity: "1" },  // visible at opacity = 1
        },
        typewriter: {
          to: {
            left: "100%"
          }
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
