/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'bg3': "url('PAWA-website/src/assets/woooow-bg3.png')"
        // 'bg3': "url('src/assets/woooow-bg3.png')"

      },
      colors : {
        'prpl': "#c241f4"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      aspectRatio: {
        'bg': '1162 / 753',
      },
    }
  },
  plugins: [],
}

