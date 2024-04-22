/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'frame': '4px 4px 0 0 #000',
        'frame-gray': '4px 4px 0 0 #555',
      }
    },
  },
  plugins: [],
}

