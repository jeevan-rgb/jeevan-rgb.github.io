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
    { tipo: "youtube", url: "https://youtube.com/@latrincheraacademica?si=9Zzzkf5Oq42PKWPV" },
    { tipo: "Research Ghate", url: "https://www.researchgate.net/profile/Rafael-Jimenez-Lopez-2?ev=hdr_xprf" },
  ],

  // ---------- 2. TEMAS ----------
  /* PLANTILLA para un tema nuevo (cópiala y pégala arriba del todo de la lista):
    {
      titulo: "Título del tema",
      fecha: "2026-11-05",                 // año-mes-día (se ordenan solos)
      categoria: "Cerebro",                // crea las que quieras, el color se pone solo
      resumen: "Una o dos frases que salen en la tarjeta.",
      texto: "Párrafo 1.\n\nPárrafo 2.",   // \n\n separa párrafos
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
      resumen: "El dolor no es un cable que va del dedo al cerebro. Es algo mucho más interesante.",
      texto:
        "Durante mucho tiempo se pensó que el dolor era una señal directa: te golpeas y el mensaje viaja hasta el cerebro. " +
        "Hoy sabemos que el cerebro no se limita a recibir esa señal, sino que la interpreta según el contexto, la memoria, la atención o el miedo.\n\n" +
        "Por eso dos personas con la misma lesión pueden sentir cosas muy distintas, y por eso el dolor puede seguir ahí cuando el tejido ya se ha curado.",
      portada: "",
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
