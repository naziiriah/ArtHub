/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "80": "40rem",
        "50":"50%",
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/IMG_1681.JPG')",
        'footer-texture': "url('/img/footer-texture.png')",
        'white-bg': "url('./src/assets/white-bg.png')",
        'other-pattern':"url('./src/assets/photo_2025-01-20_08-28-34.jpg')",
        'green-background':"url('./src/assets/Screenshot 2025-01-24 173548.png')",
      },
      colors:{
        "deep-gre": "#028869",
        "dep-gre": "#114829",
      },
      height: {
        '99': "28rem"
      }

    },
  },
  plugins: [],
}