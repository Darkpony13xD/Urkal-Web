# URKAL INK TATTOO

Sitio de React + TypeScript + Vite. Estética de estudio de tatuajes: negro, marfil, un emblema grabado, tipografía editorial y pequeños acentos morados.

## Desarrollo

- `npm install`: instalar dependencias.
- `npm run dev`: previsualización local.
- `npm run build`: comprobar TypeScript y generar la web en `dist/`.
- `npm run lint`: revisar el código.
- `npm run preview`: revisar la compilación.

No necesita Tailwind por CDN, import maps ni un backend. Los estilos se compilan con Vite. Las tipografías se cargan desde Google Fonts, con fuentes de respaldo si no hay conexión.

## Cambiar fotografías

1. Guarda las nuevas fotografías en `public/tattoos/` (por ejemplo `pieza-01.webp`).
2. Abre `src/data/site.ts` y cambia `url: null` por `url: '/tattoos/pieza-01.webp'`.
3. Cambia `title`, `category` y `description` para describir la obra real. El título también se usa como texto alternativo de la imagen.
4. Si necesitas más categorías, actualiza `TattooCategory` en `src/types.ts`. Los filtros se crean automáticamente a partir de las categorías de las entradas.

La galería tiene seis espacios visibles y filtros por estilo. Las entradas sin foto muestran un marcador neutro de fotografía pendiente. Cuando añadas una foto, reemplazará el marcador y se podrá abrir en una vista ampliada. No hay dibujos ni tatuajes de ejemplo.

## Identidad visual

El emblema de `src/assets/urkal-emblem-v2.png` fue creado con ImageGen a partir del logo original. Se utiliza en la portada, el menú y la sección del estudio. El original `src/assets/logo.jpg` se conserva.

## Archivos principales

- `src/data/site.ts`: galería y número de WhatsApp.
- `src/components/Hero.tsx`: portada y presentación del estudio.
- `src/components/Gallery.tsx`: filtros, expansión y detalle accesible.
- `src/components/InkArtwork.tsx`: dibujos de una versión anterior; ya no se utilizan.
- `src/components/About.tsx`: estudio y proceso.
- `src/components/Contact.tsx`: formulario y preparación de consultas.
- `src/components/Navbar.tsx` y `Footer.tsx`: navegación y pie.
- `src/index.css`: colores, tipografías y componentes base.
- `src/App.css`: diseño de secciones y adaptación a pantallas.

## Contacto y publicación

El formulario valida los datos y prepara un enlace a WhatsApp; no envía mensajes, no confirma citas ni proporciona una cotización automática. El usuario revisa y envía el mensaje en WhatsApp. No se guarda información en almacenamiento local ni se conecta a una base de datos.

Se conservó `5215630127650`, el número configurado en el proyecto original. Confirma que sea el contacto correcto antes de publicar. La fecha de inicio 2021 también procede del contenido original. Se quitaron la dirección de ejemplo, los horarios sin confirmar y los enlaces sociales vacíos. Añade datos reales cuando estén disponibles.

Para publicar, ejecuta `npm run build` y sirve `dist/`. Los cambios locales no se publican automáticamente.

## Accesibilidad

Navegación por teclado, enlace para saltar al contenido, etiquetas asociadas a los campos, filtros con estado, diálogo nativo con Escape y restauración de foco, y transiciones desactivadas cuando el sistema solicita movimiento reducido. No hay animaciones decorativas continuas.

## Instagram

El perfil se configura en `src/data/site.ts`. El bloque `src/components/Instagram.tsx` ofrece dos enlaces a publicaciones seleccionadas del perfil público. Es una selección manual, no un feed automático. No carga scripts ni iframes de Instagram. También hay accesos al perfil en contacto y en el pie.
