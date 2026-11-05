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

## Opiniones de clientes (con aprobación)
Funcionan igual que los comentarios de La Mordida de Bebe: el cliente envía su opinión desde la página, queda **pendiente** y solo se publica cuando tú la apruebas en `admin.html`.

Configuración (una sola vez):
1. En Supabase abre **SQL Editor**, pega el contenido de `supabase-kobu.sql` (con Buscar y reemplazar, cambia `TU_CORREO_ADMIN@ejemplo.com` por tu correo de administrador) y presiona **Run**. Crea la tabla `kobu_opiniones`.
2. La URL y la llave pública ya están en `js/config.js` (`opiniones`), apuntando al mismo proyecto de Supabase.
3. Sube la carpeta a un hosting (por ejemplo arrastrándola a Netlify). Las opiniones no funcionan abriendo el archivo directo del disco ni en la vista previa de Claude, solo ya publicada en internet.
4. En Supabase > Authentication > URL Configuration agrega la dirección de tu página en "Redirect URLs" (para recuperar contraseña desde el panel).
5. Entra a `tudominio.com/admin.html` con tu correo y contraseña para aprobar, responder, ocultar o eliminar opiniones.

## Pendiente
- Confirmar el Instagram correcto (`instagram` en `js/config.js`).
- Poner los precios de mayoreo (los `null` en `prendas`).
- Correo, horario y ubicación: se muestran cuando los escribes en `config.js`.
