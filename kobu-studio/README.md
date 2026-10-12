# Kobu Studio: página web

## Cómo abrirla
1. Abre esta carpeta en VS Code (Archivo > Abrir carpeta).
2. Abre `index.html` en tu navegador, o usa la extensión "Live Server" para ver los cambios al guardar.

## Dónde editar cada cosa
- `js/config.js`: TODO el contenido. Textos, precios, WhatsApp, Instagram, servicios y trabajos.
- `css/styles.css`: colores y diseño. Los colores están al inicio, en `:root`.
- `js/app.js`: el funcionamiento (cotizador, galería, simulador). Normalmente no lo necesitas tocar.
- `imagenes/`: el logo y las fotos de trabajos.

## Agregar un trabajo nuevo
1. Guarda la foto en `imagenes/trabajos/`.
2. En `js/config.js`, dentro de `trabajos`, copia un bloque `{ ... }` y cambia título, descripción e `imagenes`.

## Pendiente
- Confirmar el Instagram correcto (`instagram` en `js/config.js`).
- Poner los precios de mayoreo (los `null` en `prendas`).
- Correo, horario y ubicación: se muestran cuando los escribes en `config.js`.
