/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A4D68", // Azul médico profesional
        secondary: "#088395", // Turquesa médico
        accent: "#05BFDB", // Cyan elegante
        dark: "#1E293B", // Gris oscuro profesional
        background: "#F8FAFC", // Blanco suave
        text: "#0F172A", // Negro azulado
        success: "#059669", // Verde médico
        warning: "#D97706", // Naranja profesional
        danger: "#DC2626", // Rojo médico
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
