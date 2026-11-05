/* =====================================================================
   AQUÍ SE EDITA TODA LA WEB
   ---------------------------------------------------------------------
   Solo tienes que tocar este archivo. Tres partes:
     1. Datos básicos (nombre de la web, intro, enlaces)
     2. TEMAS      -> las tarjetas de la web
     3. PREGUNTAS  -> la pregunta científica del día (cambia sola cada día)

   Reglas de oro:
     - Cada bloque va entre { } y separado del siguiente por una coma.
     - Los textos van entre comillas "así".
     - Si algo no lo usas, déjalo vacío: ""  o  []
   ===================================================================== */

window.SITE = {
  // ---------- 1. DATOS BÁSICOS ----------
  nombreWeb: "Cuaderno de ciencia",
  autor: "Rafa",
  etiqueta: "Divulgación científica",           // línea pequeña sobre el título
  titular: "Cuaderno de ciencia",
  intro:
    "Notas y vídeos sobre fisiología, dolor, neurociencia y la ciencia que aparece en la ficción. " +
    "Un espacio para ordenar lecturas y compartir temas de interés.",
  sobreMi:
    "Soy fisioterapeuta. En este cuaderno reúno temas que me resultan interesantes, " +
    "lecturas recientes y material audiovisual. Cualquier comentario o sugerencia es bienvenido.",
  foto: "", // ejemplo: "img/yo.jpg"

  // tipos: email, youtube, instagram, x, tiktok, github, web
  enlaces: [
    { tipo: "youtube", url: "https://www.youtube.com/@latrincheraacademica" },
    { tipo: "researchgate", url: "https://www.researchgate.net/profile/Rafael-Jimenez-Lopez-2" },
    { tipo: "orcid", url: "https://orcid.org/0009-0008-3986-2763" },
  ],

  // ---------- 2. TEMAS ----------
  /* PLANTILLA para un tema nuevo (cópiala y pégala arriba del todo de la lista):
    {
      titulo: "Título del tema",
      fecha: "2026-11-05",                 // año-mes-día (se ordenan solos)
      categoria: "Cerebro",                // crea las que quieras, el color se pone solo
      resumen: "Una o dos frases que salen en la tarjeta.",
      subtitulo: "",                       // opcional: frase que sale bajo el título al abrir el tema
      texto: `
Primer párrafo. Deja una línea en blanco entre párrafos.

## Un subtítulo
Texto del apartado. Con **dos asteriscos** pones negrita.

- Un punto de una lista
- Otro punto
`,                                         // el texto completo va entre comillas invertidas ` `
      portada: "",                         // foto de portada: "img/mi-foto.jpg"
      youtubeId: "",                       // vídeo principal: lo que va tras "v=" en YouTube
      fotos: [],                           // más fotos: ["img/a.jpg", "img/b.jpg"]
      videos: [],                          // más vídeos: ["ID1", "ID2"]
      enlaces: [],                         // [{ texto: "Artículo original", url: "https://..." }]
    },
  */
  temas: [
    {
      titulo: "¿Por qué duele lo que duele?",
      fecha: "2026-11-02",
      categoria: "Dolor",
      resumen: "Un clavo que no toca la carne y duele. Una mano que no existe y duele. El dolor no está donde te duele.",
      subtitulo: "El dolor no está donde te duele",
      texto: `
En 1995, una revista médica británica publicó un caso. Un albañil de 29 años saltó desde un andamio y cayó sobre un clavo de 15 centímetros, que le atravesó la bota de lado a lado. Llegó a urgencias gritando de dolor, tan intenso que tuvieron que sedarlo con opioides antes de poder quitarle la bota. Cuando por fin lo hicieron, el clavo había pasado limpiamente entre dos dedos. No tenía ni un rasguño.

¿Fingía? No. Le dolía de verdad. Y entender por qué es entender qué es el dolor.

## Qué es el dolor
Solemos pensar que el dolor es un mensaje que viaja desde la herida hasta el cerebro, como un cable que avisa “aquí hay daño”. No funciona así. En la piel, los músculos y los órganos tenemos nociceptores, sensores que detectan peligro: calor extremo, presión intensa, sustancias químicas de la inflamación. Envían señales por los nervios y la médula espinal hasta el cerebro. Pero esas señales todavía no son dolor; son información.

El cerebro recibe esa información y la mezcla con todo lo demás: lo que ves, lo que recuerdas, lo que temes y el contexto en el que estás. Con todo eso decide si estás en peligro. Si concluye que sí, produce dolor. Por eso la Asociación Internacional para el Estudio del Dolor lo define como una experiencia sensorial y emocional, no como un medidor de daño. El albañil vio un clavo saliendo de su bota, y su cerebro sacó la conclusión más lógica.

## Por qué duele
Porque el dolor nos protege. Hay personas que nacen con una mutación que les impide sentirlo. Parece un superpoder, pero es una condena: se rompen huesos sin enterarse, se muerden la lengua o se queman, y suelen vivir menos. El dolor es la alarma que nos obliga a parar, apartar la mano y cuidar la zona herida.

## Por qué no todo duele igual
- **Por el cable que transporta la señal.** Cuando te golpeas el dedo pequeño del pie, notas primero un pinchazo agudo y luego una ola sorda y palpitante. Son dos tipos de fibras nerviosas: unas rápidas, recubiertas de mielina, que traen el “¡ay!” preciso, y otras lentas, sin ese aislante, que traen el dolor difuso que se queda.
- **Por el lugar de origen.** El dolor de la piel se localiza con precisión. El de las vísceras es vago y a veces aparece en otro sitio: un infarto puede doler en el brazo izquierdo, porque las señales del corazón y del brazo comparten neuronas en la médula y el cerebro se confunde de remitente.
- **Por si el cableado está dañado.** Cuando el problema está en el propio nervio, el dolor quema, da calambres o descargas eléctricas. Es el dolor neuropático: la alarma suena porque el sistema falla, no porque haya amenaza.
- **Por el contexto.** En la Segunda Guerra Mundial, el médico Henry Beecher observó que muchos soldados con heridas graves pedían menos analgesia que civiles con lesiones parecidas. Para el soldado, la herida significaba salir vivo del frente. También por eso frotarte el golpe alivia: el tacto compite con la señal de peligro en la médula y “cierra la puerta” a parte de ella.
- **Por el tiempo.** En el dolor crónico, la alarma se vuelve hipersensible. El sistema nervioso aprende a doler y sigue disparándose aunque los tejidos ya hayan curado.

## Píldora final
Hay personas a las que les duele una mano que ya no tienen. Es el dolor del miembro fantasma: el brazo fue amputado, pero el mapa del cuerpo en el cerebro sigue ahí, y a veces produce dolor en él. Lo más asombroso es que en algunos casos se alivia con un simple espejo. Al ver el reflejo de la mano sana moviéndose donde estaba la otra, el cerebro “cree” que la mano perdida se relaja, y el dolor disminuye.

> Un clavo que no toca la carne y duele. Una mano que no existe y duele. El dolor no está en el pie ni en la mano: está en la conclusión que saca el cerebro.
`,
      portada: "img/neuronas-dolor.jpg",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [],
    },
    {
      titulo: "¿Podría existir un virus zombi?",
      fecha: "2026-10-28",
      categoria: "Ciencia y ficción",
      resumen: "Repasamos qué tiene de real (y qué no) la biología de los zombis del cine y los videojuegos.",
      texto:
        "Hay parásitos reales que alteran el comportamiento de su huésped: el hongo Ophiocordyceps convierte a las hormigas en marionetas, " +
        "y Toxoplasma hace que los ratones pierdan el miedo a los gatos.\n\n" +
        "Pero entre eso y un virus que reanime un cuerpo humano hay un abismo. En este tema vamos separando ciencia de ficción.",
      portada: "",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [],
    },
    {
      titulo: "La glía: las células olvidadas del cerebro",
      fecha: "2026-10-20",
      categoria: "Cerebro",
      resumen: "No solo hay neuronas. Las células gliales tienen mucho que decir, también en el dolor crónico.",
      texto:
        "Durante décadas se pensó que las células gliales eran solo el pegamento del sistema nervioso. " +
        "Hoy sabemos que participan en la comunicación entre neuronas, fabrican la mielina y actúan como sistema inmunitario del cerebro.\n\n" +
        "La microglía, en particular, se estudia mucho por su papel en el mantenimiento del dolor crónico.",
      portada: "",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [],
    },
    {
      titulo: "El ejercicio como medicina",
      fecha: "2026-10-12",
      categoria: "Movimiento",
      resumen: "Qué pasa en el cuerpo cuando nos movemos, y por qué se receta igual que un fármaco.",
      texto:
        "El ejercicio tiene efectos sobre el corazón, los músculos, los huesos, el metabolismo y el cerebro. " +
        "Por eso cada vez se habla más de prescribirlo con dosis, igual que un medicamento: tipo, intensidad, frecuencia y duración.",
      portada: "",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [],
    },
    {
      titulo: "Medir el cuerpo con el móvil",
      fecha: "2026-10-05",
      categoria: "Tecnología",
      resumen: "¿Puede un smartphone medir cuánto dobla tu rodilla tan bien como un aparato clínico?",
      texto:
        "Los móviles llevan acelerómetros, giroscopios y cámaras. Con ellos se puede medir el movimiento de las articulaciones o analizar cómo caminamos.\n\n" +
        "La pregunta científica es si esas medidas son fiables y válidas comparadas con los métodos de referencia.",
      portada: "",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [],
    },
  ],

  // ---------- 3. PREGUNTA CIENTÍFICA DEL DÍA ----------
  /* Cada día se muestra una distinta, en orden, y al acabar vuelve a empezar.
     Cuantas más pongas, más tarda en repetirse.
     - opciones: las respuestas posibles (si la dejas vacía [], sale un botón "Ver respuesta")
     - correcta: número de la opción buena, empezando a contar en 0
     - explicacion: lo que aparece al responder
     - fuente: enlace opcional */
  preguntas: [
    {
      pregunta: "¿Puede doler el propio cerebro?",
      opciones: ["Sí, está lleno de receptores del dolor", "No, el tejido cerebral no tiene receptores del dolor"],
      correcta: 1,
      explicacion:
        "El tejido cerebral no tiene nociceptores. Por eso algunas cirugías se hacen con el paciente despierto. " +
        "El dolor de cabeza viene de otras estructuras, como las meninges y los vasos sanguíneos.",
      fuente: "",
    },
    {
      pregunta: "¿Cuántas neuronas tiene, aproximadamente, el cerebro humano?",
      opciones: ["Unos 10.000 millones", "Unos 86.000 millones", "Alrededor de un billón"],
      correcta: 1,
      explicacion: "Los recuentos modernos rondan los 86.000 millones de neuronas, menos de los 100.000 millones que se repetían tradicionalmente.",
      fuente: "",
    },
    {
      pregunta: "¿Qué llega antes al cerebro tras darte un golpe en el pie: el tacto o el dolor sordo?",
      opciones: ["El tacto", "El dolor sordo", "Llegan a la vez"],
      correcta: 0,
      explicacion:
        "El tacto viaja por fibras gruesas y mielinizadas, mucho más rápidas. El dolor sordo va por fibras C, finas y sin mielina. " +
        "Por eso primero notas el golpe y un instante después llega el dolor.",
      fuente: "",
    },
    {
      pregunta: "El cerebro pesa alrededor del 2 % del cuerpo. ¿Qué parte de la energía en reposo consume?",
      opciones: ["Un 2 %", "Un 20 %", "Un 50 %"],
      correcta: 1,
      explicacion: "Consume en torno al 20 % de la energía del cuerpo en reposo. Es un órgano carísimo de mantener.",
      fuente: "",
    },
    {
      pregunta: "¿Se puede sentir dolor en una mano que ya no existe?",
      opciones: ["Sí", "No"],
      correcta: 0,
      explicacion:
        "Es el dolor del miembro fantasma y lo sufre una mayoría de las personas amputadas. " +
        "Demuestra que el dolor se construye en el sistema nervioso, no solo en el tejido.",
      fuente: "",
    },
    {
      pregunta: "¿Cuántos huesos tiene un adulto?",
      opciones: ["186", "206", "270"],
      correcta: 1,
      explicacion: "Un adulto tiene 206. Un recién nacido tiene bastantes más, porque muchos se fusionan durante el crecimiento.",
      fuente: "",
    },
    {
      pregunta: "¿Las células gliales solo sirven de soporte para las neuronas?",
      opciones: ["Sí, son el pegamento del cerebro", "No, participan activamente en su funcionamiento"],
      correcta: 1,
      explicacion:
        "Regulan la comunicación entre neuronas, fabrican la mielina y defienden el sistema nervioso. " +
        "La microglía, además, está implicada en el dolor crónico.",
      fuente: "",
    },
  ],
};
