/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D2F30',
        secondary: '#094B72',
        tertiary: '#4F4F4F',
        background: '#F2F7FF',
        surface: '#FCFCFC',
        accent: '#363940',
        muted: '#F4F5F7',
        dark: '#1D2130',
        'text-light': '#525560',
        'text-dark': '#000000',
        border: '#D9DBE1',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
