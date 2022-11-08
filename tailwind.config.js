/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom fonts
      fontFamily: {
        menuHead: ['Dancing Script', 'cursive'],
        otherNunito: ['Nunito', 'sans-serif'],
        otherUbuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Custom Daisy UI theme
        mytheme: {
          "primary": "#ddb892", 
          "secondary": "#44403c",
          "accent": "#ef4444",
          "neutral": "#18161D",
          "base-100": "#E3E3F3",
          "info": "#6a994e",
          "success": "#b5e48c",
          "warning": "#fb923c",
          "error": "#be123c", 
        },
      },
      "cmyk",
      "cupcake",
      "dark",
    ],
    // Make base color transparent
    base: false,
  },
}
