/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'gen-art': "url('../public/alg-art.jpg')",
      }
    },
  },
  plugins: [],
}

