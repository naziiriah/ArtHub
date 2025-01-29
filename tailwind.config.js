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
        'abstract-bg':"url('./src/assets/photo_2025-01-20_08-31-00.jpg')",
        'photography-bg':"url('./src/assets/photo_2025-01-20_08-31-23.jpg')",
        'digital-bg':"url('./src/assets/photo_2025-01-20_08-29-06.jpg')",
        'sculptural-bg':"url('./src/assets/photo_2025-01-20_08-28-52.jpg')",
        'modern-bg':"url('./src/assets/photo_2025-01-20_08-31-07.jpg')",
        'text-man':"url('./src/assets/SPMD7567.jpg')",
        'logo':"url('./src/assets/logo.jpg')",
        'mold':"url('./src/assets/photo_2025-01-20_08-29-00.jpg')",
        'mold-2':"url('./src/assets/photo_2025-01-20_08-28-49.jpg')",
        'mold-3':"url('./src/assets/photo_2025-01-20_08-31-21.jpg')",
        'mold-4':"url('./src/assets/photo_2025-01-20_08-29-04.jpg')",
        'mold-5':"url('./src/assets/IMG_2172.jpg')"
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