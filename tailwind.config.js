/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        hudson: {
          50: '#f1fbff',
          100: '#e2f6ff',
          200: '#bfe9ff',
          300: '#89d5ff',
          400: '#56c3ff',
          500: '#28a8ef',
          600: '#1884c5',
          700: '#116797',
          800: '#0f5276',
          900: '#0f445f',
        },
      },
      boxShadow: {
        'glow-sky': '0 0 0 1px rgba(125,211,252,0.3), 0 0 40px -10px rgba(56,189,248,0.4)'
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        'xl2': '1.25rem'
      }
    },
  },
  plugins: [],
};