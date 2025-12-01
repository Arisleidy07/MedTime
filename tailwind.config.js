/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0284C7", // AZUL brillante
        secondary: "#10B981", // VERDE esmeralda
        accent: "#F59E0B", // AMARILLO/NARANJA
        dark: "#1E293B", // Gris oscuro
        background: "#F8FAFC", // Blanco suave
        text: "#0F172A", // Negro
        success: "#10B981", // VERDE
        warning: "#F59E0B", // AMARILLO
        danger: "#EF4444", // Rojo
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
