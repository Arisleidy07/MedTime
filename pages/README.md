# 📄 Páginas HTML

Cada página HTML es independiente y contiene su propia estructura completa.

## 📑 Archivos

### `home.html`

**Página de Inicio**

- Video de fondo rotativo automático
- Hero section con botón CTA
- Estadísticas de la aplicación
- Scripts: `video.js` para rotación de videos

### `medications.html`

**Dashboard de Medicamentos**

- Formulario para añadir medicamentos
- Grid de tarjetas de medicamentos activos
- Modal para añadir/editar
- Botones: Tomado y Eliminar
- Scripts: `storage.js`, `medications.js`, `form.js`, `ui.js`

### `history.html`

**Historial**

- Lista cronológica de medicamentos tomados
- Muestra fecha y hora de cada toma
- Scripts: `storage.js`, `history.js`, `ui.js`

## 🔗 Navegación

Cada página tiene:

- Header con navegación completa
- Enlaces entre páginas (home.html, medications.html, history.html)
- Menú hamburguesa para móviles
- Logo que redirige a home

## 📦 Dependencias Compartidas

Todas las páginas cargan:

- Bootstrap 5.3.2 (CSS y JS)
- `styles.css` - Estilos globales
- Google Fonts (Inter)

## ⚙️ JavaScript por Página

| Página           | Scripts Necesarios                                 |
| ---------------- | -------------------------------------------------- |
| home.html        | `video.js`                                         |
| medications.html | `storage.js`, `medications.js`, `form.js`, `ui.js` |
| history.html     | `storage.js`, `history.js`, `ui.js`                |

## 🔄 Flujo de Navegación

```
index.html → home.html
                ↓
         medications.html ⟷ history.html
```

El usuario puede navegar libremente entre las tres páginas usando el header.
