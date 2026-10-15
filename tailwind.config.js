/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#030712',
          900: '#080d1a',
          850: '#0d1326',
          800: '#111a36',
          700: '#1e294b',
        },
        electric: {
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
