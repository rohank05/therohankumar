/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', 'system-ui'],
        tech: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        primary: '#ff00ff',
        secondary: '#00ffff',
        accent: '#ffff00',
        success: '#00ff00',
        dark: '#050505',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
