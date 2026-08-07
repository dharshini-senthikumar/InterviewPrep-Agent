/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#7F5AF0",
        accent: "#00D9FF",
        success: "#00C853",
        danger: "#FF5252",
        bgDark: "#0B1020",
        cardDark: "#171C33",
        cardBorder: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'glow-gradient': 'linear-gradient(135deg, #6C63FF 0%, #7F5AF0 50%, #00D9FF 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(23, 28, 51, 0.8) 0%, rgba(11, 16, 32, 0.9) 100%)',
      },
      animation: {
        'blob-spin': 'blobSpin 12s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blobSpin: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(60px, -40px) scale(1.15)' },
          '100%': { transform: 'translate(-40px, 30px) scale(0.95)' },
        }
      }
    },
  },
  plugins: [],
}
