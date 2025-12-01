# 💊 MedTime - Gestor de Medicamentos

**MedTime** es una aplicación web moderna e intuitiva para gestionar y recordar la toma de medicamentos. Construida con HTML, CSS y JavaScript vanilla (sin frameworks).

---

## ✨ Características Principales

### 🏠 **Página de Inicio**

- Video de fondo rotativo automático
- Estadísticas visuales atractivas
- Diseño hero moderno con call-to-action
- Navegación fluida entre secciones

### 📊 **Dashboard de Medicamentos**

- Añadir nuevos medicamentos con formulario completo
- Visualización en tarjetas de diseño moderno
- Información detallada: nombre, dosis, horario, frecuencia, notas
- Botón "Tomado" para marcar medicamentos
- Botón "Eliminar" para gestionar medicamentos

### 📜 **Historial**

- Lista cronológica de todos los medicamentos tomados
- Muestra fecha y hora exacta de cada toma
- Diseño limpio y fácil de leer
- Persistencia de datos en localStorage

### 📱 **Diseño Responsivo**

- Totalmente adaptable a móviles, tablets y escritorio
- Menú hamburguesa en dispositivos móviles
- Media queries optimizadas
- Experiencia fluida en todos los tamaños de pantalla

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS, flexbox y grid
- **JavaScript ES6+** - Lógica de aplicación vanilla
- **LocalStorage API** - Persistencia de datos local
- **SVG Icons** - Iconos escalables integrados

---

## 📁 Estructura del Proyecto

```
MEDTIME/
├── index.html          # Redirección a home
├── styles.css          # Estilos globales
├── pages/              # Páginas HTML separadas
│   ├── home.html      # Página de inicio
│   ├── medications.html # Gestión de medicamentos
│   └── history.html   # Historial de medicamentos
├── js/                 # JavaScript modular
│   ├── app.js         # Inicialización principal
│   ├── storage.js     # Gestión de localStorage
│   ├── navigation.js  # Sistema de navegación
│   ├── video.js       # Rotación de videos
│   ├── medications.js # Gestión de medicamentos
│   ├── history.js     # Gestión de historial
│   ├── form.js        # Formulario y modal
│   ├── ui.js          # Utilidades de interfaz
│   └── README.md      # Documentación de módulos
├── README.md           # Documentación del proyecto
└── CONTENIDO/          # Recursos multimedia
    ├── 1.mp4          # Videos de fondo rotativos
    ├── 4.mp4
    ├── 5.mp4
    ├── 6.mp4
    └── HEART.png      # Logo de la aplicación
```

---

## 🚀 Cómo Usar

### Instalación

1. **Clonar o descargar el proyecto**

   ```bash
   git clone [tu-repositorio]
   cd MEDTIME
   ```

2. **Abrir con un servidor local**

   Opción 1 - Python:

   ```bash
   python3 -m http.server 8000
   ```

   Opción 2 - Node.js:

   ```bash
   npx http-server -p 8000
   ```

   Opción 3 - Live Server (VS Code):

   - Instalar extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

3. **Abrir en el navegador**

   ```
   http://localhost:8000
   ```

   El `index.html` te redirigirá automáticamente a `pages/home.html`

### Navegación

La aplicación tiene 3 páginas HTML separadas:

- **home.html** - Página de inicio con video de fondo y estadísticas
- **medications.html** - Dashboard para gestionar medicamentos
- **history.html** - Historial de medicamentos tomados

---

## 📝 Flujo de Usuario

### 1️⃣ **Añadir un Medicamento**

1. Ve al **Dashboard** (segunda pestaña)
2. Haz clic en "Añadir Medicamento"
3. Completa el formulario:
   - **Nombre**: Ej. Ibuprofeno
   - **Dosis**: Selecciona o personaliza
   - **Horario**: Selecciona o personaliza
   - **Frecuencia**: Diaria, cada X horas, etc.
   - **Notas** (opcional): Instrucciones adicionales
4. Haz clic en "Guardar"

### 2️⃣ **Marcar como Tomado**

1. En el Dashboard, encuentra tu medicamento
2. Haz clic en el botón "Tomado" (verde)
3. El medicamento se moverá automáticamente al **Historial**
4. Verás un mensaje de confirmación

### 3️⃣ **Ver Historial**

1. Ve a la sección **Historial** (tercera pestaña)
2. Verás todos los medicamentos tomados con:
   - Nombre del medicamento
   - Dosis
   - Horario
   - Fecha y hora exacta de la toma

### 4️⃣ **Eliminar un Medicamento**

1. En el Dashboard, encuentra el medicamento
2. Haz clic en el botón de basura (rojo)
3. Confirma la eliminación

---

## 🎨 Personalización

### Cambiar Videos de Fondo

Edita el array en `script.js`:

```javascript
const backgroundVideos = [
  "/CONTENIDO/1.mp4",
  "/CONTENIDO/4.mp4",
  "/CONTENIDO/5.mp4",
  "/CONTENIDO/6.mp4",
];
```

### Cambiar Tiempo de Rotación de Videos

En `script.js`, modifica el intervalo (en milisegundos):

```javascript
setInterval(() => {
  // ...código
}, 15000); // Cambia 15000 (15 segundos) al valor deseado
```

### Modificar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
  --primary: #3b82f6; /* Color principal */
  --primary-dark: #2563eb; /* Color principal oscuro */
  --bg-black: #000000; /* Fondo negro */
  --bg-gray: #111827; /* Fondo gris */
  --bg-gray-light: #1f2937; /* Fondo gris claro */
  --text-white: #ffffff; /* Texto blanco */
  --text-gray: #9ca3af; /* Texto gris */
  --border-gray: #374151; /* Borde gris */
}
```

---

## 💾 Almacenamiento de Datos

### LocalStorage

La aplicación utiliza **localStorage** para guardar:

- **Medicamentos activos**: `medtime_medications`
- **Historial**: `medtime_history`

### Persistencia

- Los datos **NO** se borran al recargar la página
- Los datos permanecen hasta que:
  - El usuario borre el caché del navegador
  - Se eliminen manualmente desde DevTools

### Borrar Datos

Para reiniciar la aplicación:

1. Abre DevTools (F12)
2. Ve a **Application** → **Local Storage**
3. Elimina las claves `medtime_medications` y `medtime_history`
4. Recarga la página

---

## 📱 Responsive Design

### Breakpoints

- **Móviles**: < 768px

  - Menú hamburguesa
  - Una columna en grids
  - Ajustes de tipografía

- **Tablets**: 768px - 1024px

  - Diseño adaptado

- **Escritorio**: > 1024px
  - Diseño completo
  - Navegación horizontal

---

## 🔧 Características Técnicas

### JavaScript Features

- ✅ ES6+ Syntax
- ✅ Arrow Functions
- ✅ Template Literals
- ✅ Destructuring
- ✅ Array Methods (map, filter, find, etc.)
- ✅ LocalStorage API
- ✅ Date API
- ✅ DOM Manipulation

### CSS Features

- ✅ CSS Variables (Custom Properties)
- ✅ Flexbox
- ✅ CSS Grid
- ✅ Media Queries
- ✅ Transitions & Animations
- ✅ Backdrop Filter
- ✅ Modern Selectors

### Accesibilidad

- Contraste adecuado de colores
- Hover states en todos los elementos interactivos
- Estructura semántica HTML5
- SVG icons con atributos descriptivos

---

## 🐛 Solución de Problemas

### Los videos no se reproducen

- Verifica que los archivos `.mp4` existan en `/CONTENIDO/`
- Asegúrate de usar un servidor local (no abrir directamente el HTML)
- Verifica permisos de los archivos

### Los datos no se guardan

- Verifica que localStorage esté habilitado en tu navegador
- Comprueba que no estés en modo incógnito/privado
- Revisa la consola de DevTools por errores

### El diseño se ve mal

- Limpia la caché del navegador
- Verifica que `styles.css` esté cargando correctamente
- Comprueba la consola por errores 404

---

## 🎯 Próximas Mejoras (Roadmap)

- [ ] Notificaciones push para recordatorios
- [ ] Exportar/importar datos en JSON
- [ ] Modo oscuro/claro
- [ ] Gráficos de adherencia al tratamiento
- [ ] Integración con calendario
- [ ] PWA (Progressive Web App)
- [ ] Múltiples perfiles de usuario
- [ ] Recordatorios sonoros

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👨‍💻 Autor

Desarrollado con ❤️ para facilitar el control de medicamentos.

---

## 🙏 Agradecimientos

- Iconos: SVG integrados personalizados
- Fuente: [Inter](https://fonts.google.com/specimen/Inter) de Google Fonts
- Inspiración: Diseño moderno de UI/UX

---

## 📞 Contacto

¿Preguntas o sugerencias? ¡No dudes en contactar!

---

**¡Gracias por usar MedTime! 💊✨**
