/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.jpg')",
        'game-pattern-one': "url('/src/assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg')",
        'game-info-background': "url('/src/assets/Rectangle19.svg')", 
        'game-info-background2': "url('/src/assets/WeirdShape.svg')",
        'game-info-foreground': "url('/src/assets/pine-tree.png')"
      }
    },
  },
  plugins: [],
}

