/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos en `src`
    "./public/index.html",       // Escanea el `index.html` en `public`
  ],
  theme: {
    extend: {
      colors: {
        primary: "#93A267", // Color primario
        secondary: "#CCADBB", // Color secundario
        accent: "#485935", // Color acento
        background: "#FBFBFB", // Fondo
      },
      fontFamily: {
        heading: ["Carme", "sans-serif"], // Fuente para headings
        body: ["Inter Tight", "sans-serif"], // Fuente para texto
      },
    },
  },
  plugins: [],
};
