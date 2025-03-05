/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        carousel: "carousel 100s linear infinite", // Slow down the carousel to 40s
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-500%)" }, // Adjust to show more items
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
         montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'teal': '#4ECDC4',
        'key': '#41A8A0',
        'light-green': '#E9FFE9',
        'accent-magenta': '#9A348E',
        'accent-purple': '#4C349A',
        'accent-yellow': '#FFEE99'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1800px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
