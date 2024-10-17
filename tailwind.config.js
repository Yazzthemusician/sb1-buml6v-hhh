/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71',
        'primary-dark': '#27ae60',
        secondary: '#3498db',
        'secondary-dark': '#2980b9',
        accent: '#e74c3c',
        'accent-dark': '#c0392b',
        background: '#ecf0f1',
        text: '#2c3e50',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};