# 📂 Estructura de JavaScript Modular

La aplicación MedTime está dividida en módulos independientes para mejor organización y mantenimiento.

## 📁 Archivos

### `storage.js`

**Gestión de LocalStorage**

- Cargar/guardar datos
- CRUD de medicamentos
- CRUD de historial
- Variables globales de estado

### `navigation.js`

**Sistema de navegación SPA**

- Navegación entre páginas
- Actualización de enlaces activos
- Menú hamburguesa

### `video.js`

**Rotación de videos de fondo**

- Array de videos
- Rotación automática cada 15s
- Transiciones suaves

### `medications.js`

**Gestión de medicamentos**

- Renderizar tarjetas
- Marcar como tomado
- Eliminar medicamentos
- Crear elementos HTML

### `history.js`

**Gestión de historial**

- Renderizar historial
- Crear items de historial
- Formateo de fechas

### `form.js`

**Formulario y modal**

- Abrir/cerrar modal
- Validación de formulario
- Campos personalizados
- Guardar medicamento

### `ui.js`

**Utilidades de interfaz**

- Estados vacíos
- Mensajes de éxito
- Helpers de UI

### `app.js`

**Inicialización principal**

- Punto de entrada
- Orquestación de módulos
- DOMContentLoaded

## 🔄 Orden de Carga

Los archivos se cargan en este orden en `index.html`:

1. `storage.js` - Estado global
2. `navigation.js` - Navegación
3. `video.js` - Video de fondo
4. `medications.js` - Medicamentos
5. `history.js` - Historial
6. `form.js` - Formulario
7. `ui.js` - UI helpers
8. `app.js` - Inicialización

⚠️ **Importante**: El orden es crítico porque algunos módulos dependen de funciones de otros.
