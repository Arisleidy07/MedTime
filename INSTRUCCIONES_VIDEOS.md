# 📹 INSTRUCCIONES PARA AGREGAR TUS VIDEOS

## 🎯 Cómo Agregar Videos a MedTime

### Paso 1: Preparar tus videos

1. **Formatos aceptados**: MP4, WebM, OGG
2. **Tamaño recomendado**: Máximo 50MB por video para web
3. **Resolución**: 1920x1080 (Full HD) o 1280x720 (HD)
4. **Duración**: 10-30 segundos ideal para carousel

### Paso 2: Crear carpeta para videos

```bash
# En la raíz del proyecto ejecuta:
mkdir -p public/assets/videos
```

### Paso 3: Colocar tus videos

1. Copia tus archivos de video a: `public/assets/videos/`
2. Renombra (opcional) a: `video1.mp4`, `video2.mp4`, `video3.mp4`, etc.

### Paso 4: Activar los videos en el código

Abre el archivo: `src/pages/Home.jsx`

Busca estas líneas (aproximadamente línea 25-29):

```javascript
const videos = [
  // '/assets/videos/video1.mp4',
  // '/assets/videos/video2.mp4',
  // '/assets/videos/video3.mp4',
];
```

Descomenta las líneas (quita las //) según los videos que agregaste:

```javascript
const videos = [
  "/assets/videos/video1.mp4",
  "/assets/videos/video2.mp4",
  "/assets/videos/video3.mp4",
];
```

### Paso 5: Personalizar

- Agrega o quita líneas según cuántos videos tengas
- Los videos rotarán automáticamente cada 5 segundos
- Puedes usar nombres de archivo personalizados

### Ejemplo con nombres personalizados:

```javascript
const videos = [
  "/assets/videos/intro.mp4",
  "/assets/videos/funciones.mp4",
  "/assets/videos/demo.mp4",
];
```

## ⚙️ Características del Carousel

- ✅ **Rotación automática** cada 5 segundos
- ✅ **Controles manuales** (flechas izquierda/derecha)
- ✅ **Indicadores** de posición (puntos)
- ✅ **Transiciones suaves** con animaciones
- ✅ **Responsive** - se adapta a móvil
- ✅ **Auto-play** en bucle infinito

## 🎨 Paleta de Colores Profesional (Nueva)

```css
Primary:    #0A4D68 (Azul médico)
Secondary:  #088395 (Turquesa médico)
Accent:     #05BFDB (Cyan elegante)
Success:    #059669 (Verde médico)
Warning:    #D97706 (Naranja profesional)
Danger:     #DC2626 (Rojo médico)
```

## 🚀 Optimización de Videos (Recomendada)

### Comprimir videos con Handbrake o FFmpeg:

```bash
ffmpeg -i video_original.mp4 -vcodec h264 -acodec aac -b:v 2M video_optimizado.mp4
```

### O usa herramientas online:

- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/

## 💡 Tips

1. **Peso total**: No excedas 100-150MB en total de todos los videos
2. **Sin audio**: Los videos se reproducen en mudo (muted)
3. **Orientación**: Horizontal (landscape) es mejor
4. **Contenido**: Muestra características de la app, testimonios, o demo

## 📁 Estructura Final

```
MEDTIME/
├── public/
│   └── assets/
│       └── videos/
│           ├── video1.mp4
│           ├── video2.mp4
│           └── video3.mp4
└── src/
    └── pages/
        └── Home.jsx  (donde activas los videos)
```

## ✅ Verificación

1. Guarda los cambios en `Home.jsx`
2. El servidor de desarrollo se recargará automáticamente
3. Verás tus videos en la página de inicio en el lado derecho
4. Los videos comenzarán a rotar automáticamente

## 🆘 Problemas Comunes

**Los videos no aparecen:**

- Verifica que la ruta sea correcta
- Asegúrate de que estén en `public/assets/videos/`
- Las rutas empiezan con `/assets/` (no `public/`)

**Videos muy grandes:**

- Comprime antes de subir
- Usa resolución 720p en lugar de 1080p

**No rotan:**

- Verifica que tengas más de 1 video en el array
- Revisa la consola del navegador por errores

---

**¿Listo?** ¡Agrega tus videos y dale vida a MedTime! 🎬💊
