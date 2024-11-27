/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '600px' },   // Small devices (phones)
        'md': { 'min': '810px' },   // Medium devices (tablets)
        'lg': { 'min': '850px' },  // Large devices (desktops)
        'xl': { 'min': '1279px' },  // Extra large devices (large desktops)
        '2xl': { 'max': '1535px' }, // 2X extra large devices
      },
      colors: {
        'primary': '#0D4A31',
        'secondary': '#F7C85A',
        'primaryDark': '#7367F0'
      },
      clipPath: {
        'custom-polygon': 'polygon(0 0, 68% 26%, 100% 0, 99% 100%, 1% 100%, 0% 50%)',
      },
      boxShadow: {
        'darkShadow': '0 8px 15px rgba(0, 0, 0, 0.15)'
      },
      backgroundClip: {
        text: 'text', // This makes sure bg-clip-text works
      },
            fontFamily:{
        mainFont: 'Playfair Display',
        secondaryFont: 'Roboto'
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}

