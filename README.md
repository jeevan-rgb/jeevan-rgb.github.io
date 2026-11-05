# Cuaderno de ciencia

Web sencilla de temas de ciencia, con fotos, vídeos de YouTube y una pregunta científica cada día.
No necesita instalar nada: es HTML, CSS y JavaScript, y funciona en GitHub Pages.

## Lo único que tienes que editar: `data.js`

Dentro hay tres partes, con instrucciones:

1. **Datos básicos**: nombre de la web, intro, "Sobre mí" y enlaces.
2. **Temas**: cada tema es una tarjeta. Al pulsarla se abre con el texto completo, el vídeo, las fotos y los enlaces.
   Hay una **PLANTILLA** comentada: cópiala, pégala al principio de la lista y rellénala.
3. **Preguntas**: la web enseña una distinta cada día, en orden, y cuando se acaban vuelve a empezar.

### Fotos
1. Sube la foto a la carpeta `img/` (en GitHub: entra en `img` → **Add file → Upload files**).
2. En el tema, escribe su ruta: `portada: "img/mi-foto.jpg"` o añádela a `fotos: ["img/mi-foto.jpg"]`.
Mejor nombres sin espacios ni tildes, y fotos de menos de 1 MB.

### Vídeos de YouTube
Copia el ID del enlace: `https://www.youtube.com/watch?v=ABC123xyz` → `"ABC123xyz"`.
Ponlo en `youtubeId` (vídeo principal) o en `videos: ["ABC123xyz"]` (vídeos extra).

### Si no hay foto ni vídeo
La tarjeta muestra un fondo neutro con el nombre de la categoría. El tema más reciente aparece destacado arriba.

## Publicarla en GitHub Pages (solo la primera vez)

1. En <https://github.com> crea un repositorio **público** llamado `TU-USUARIO.github.io`.
2. **Add file → Upload files**: arrastra todo el contenido de esta carpeta y pulsa **Commit changes**.
3. **Settings → Pages** → *Deploy from a branch* → rama `main`, carpeta `/ (root)` → **Save**.
4. En 1 o 2 minutos estará en `https://TU-USUARIO.github.io`.

## Editar desde el móvil o el navegador
Abre `data.js` en GitHub, pulsa el lápiz ✏️, cambia lo que quieras y pulsa **Commit changes**.
La web se actualiza sola en un minuto. Si algo deja de verse, lo más probable es que falte una coma o unas comillas.
