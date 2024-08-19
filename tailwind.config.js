/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#202626',
        'color-plan': '#2E403C',
      },
      backgroundImage: {
        'fundo': "#000000",
        'textura-marmore' : "url('./src/assets/marmore.png')"
      },
    },
  },
  plugins: [],
}