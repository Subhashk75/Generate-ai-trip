/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        base: "#F8F9FA",
        surface: "#FFFFFF",
        accent: {
          light: "#CED4DA",
          DEFAULT: "#2D3436",
          dark: "#1A1A1A",
        },
        ai: {
          glow: "#6366f1",
          gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        }
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}


