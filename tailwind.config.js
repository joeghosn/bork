/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bork: {
          pink: '#FF99B4',
          yellow: '#FFE083',
          green: '#9DFFB0',
          blue: '#9DDCFF',
          ink: '#0b0b0f',
          sand: '#efe9e2'
        }
      },
      fontFamily: {
        display: ['ui-rounded','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif']
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      boxShadow: {
        floof: '0 10px 40px -5px rgba(0,0,0,0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(10%)' },
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        drift: 'drift 18s linear infinite alternate',
      }
    },
  },
  plugins: [],
}