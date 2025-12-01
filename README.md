# 💊 MedTime - Recordatorios de Medicamentos

Una aplicación web moderna y funcional para gestionar recordatorios de medicamentos, desarrollada con React, TailwindCSS y Framer Motion.

## 🌟 Características

- ✅ **Agregar medicamentos** con nombre, dosis, horarios y frecuencia
- 📋 **Dashboard intuitivo** que muestra todos tus medicamentos
- ✔️ **Marcar como tomado** con un solo clic
- 📊 **Historial completo** de medicamentos tomados
- 💾 **Persistencia local** usando localStorage
- 🎨 **Diseño moderno** con animaciones suaves
- 📱 **Responsive** - funciona perfectamente en móviles y desktop
- ♿ **Accesible** - diseño pensado en la experiencia del usuario

## 🚀 Tecnologías Utilizadas

- **React** 18.2 - Framework frontend
- **Vite** - Build tool ultra-rápido
- **React Router** - Navegación entre páginas
- **TailwindCSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos
- **LocalStorage** - Persistencia de datos

## 📦 Instalación

1. **Instalar dependencias:**

```bash
npm install
```

2. **Iniciar servidor de desarrollo:**

```bash
npm run dev
```

3. **Abrir en el navegador:**

```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx
│   ├── MedicationCard.jsx
│   ├── MedicationForm.jsx
│   └── HistoryItem.jsx
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── AddMedication.jsx
│   └── History.jsx
├── hooks/              # Custom hooks
│   └── useLocalStorage.js
├── utils/              # Funciones auxiliares
│   └── medicationHelpers.js
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎯 Flujo de Usuario

1. **Landing Page** - Página de bienvenida con información de la app
2. **Dashboard** - Vista principal con lista de medicamentos
3. **Agregar Medicamento** - Formulario para añadir nuevos medicamentos
4. **Historial** - Registro completo de medicamentos tomados

## 🎨 Paleta de Colores

- **Primary:** `#4F46E5` (Indigo)
- **Background:** `#F7F9FB` (Gris muy claro)
- **Text:** `#111827` (Negro grisáceo)
- **Success:** Verde
- **Warning:** Naranja

## 📱 Funcionalidades Principales

### Agregar Medicamento

```javascript
{
  name: "Nombre del medicamento",
  dose: "Dosis",
  schedule: "Horarios",
  frequency: "Frecuencia",
  notes: "Notas opcionales"
}
```

### Marcar como Tomado

- Cambia el estado del medicamento a "tomado"
- Registra la hora exacta
- Agrega entrada al historial

### Ver Historial

- Muestra todos los medicamentos tomados
- Ordenados cronológicamente (más reciente primero)
- Incluye fecha y hora

## 🚀 Deploy a Vercel

1. **Crear build de producción:**

```bash
npm run build
```

2. **Deploy en Vercel:**
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente Vite
   - Configura las variables si es necesario
   - Deploy automático

O usa el CLI de Vercel:

```bash
npm install -g vercel
vercel
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm run preview` - Preview del build de producción

## 📝 Notas de Desarrollo

- Los datos se guardan en localStorage del navegador
- No hay backend - todo funciona en el cliente
- Para producción real, considera integrar Firebase o una base de datos
- Las animaciones usan Framer Motion para una UX fluida

## 🎓 Proyecto Académico

Este proyecto fue desarrollado como parte de un curso académico, demostrando:

- Arquitectura de componentes en React
- Manejo de estado con hooks
- Diseño UI/UX moderno
- Persistencia de datos local
- Buenas prácticas de desarrollo

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**MedTime** - Cuida tu salud, un medicamento a la vez 💊
