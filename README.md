# Kobu Studio

Sitio web estático para mostrar los productos y trabajos de Kobu Studio, y recibir cotizaciones por WhatsApp.

## Contenido

El sitio está dentro de [`kobu-studio/`](./kobu-studio/):

- `index.html`: estructura de la página.
- `css/styles.css`: estilos.
- `js/config.js`: textos, precios, contacto y galería.
- `js/app.js`: cotizador, simulador y galería.
- `imagenes/`: logotipo y fotos de trabajos.

## Ver el sitio localmente

Abre `kobu-studio/index.html` en un navegador. Para recarga automática mientras editas, abre la carpeta `kobu-studio` en VS Code y ejecútala con la extensión Live Server.

No requiere instalación de dependencias ni proceso de compilación.

## Antes de publicar

1. Revisa los datos de contacto, precios y enlaces en `kobu-studio/js/config.js`.
2. Confirma que tienes permiso para publicar todas las fotos y el logotipo incluidos.
3. Ten en cuenta que, si el repositorio es público, el código y los datos configurados en él serán visibles para cualquiera.

## Subir a GitHub

Desde la carpeta raíz del repositorio:

```bash
git add .
git commit -m "Preparar sitio web de Kobu Studio"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

Reemplaza `USUARIO/REPOSITORIO` por la dirección del repositorio creado en GitHub. Si ya existe un remoto llamado `origin`, no vuelvas a ejecutar `git remote add origin`; revisa su dirección con `git remote -v`.
