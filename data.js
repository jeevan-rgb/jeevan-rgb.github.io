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
  autor: "Rafael",
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

1. Una lista numerada
2. Segundo paso
`,                                         // el texto completo va entre comillas invertidas ` `
      portada: "",                         // foto de portada: "img/mi-foto.jpg"
      portadaCredito: "",                  // opcional: autor y licencia de la foto (sale bajo la imagen)
      portadaCreditoUrl: "",               // opcional: enlace a la fuente de la foto
      youtubeId: "",                       // vídeo principal: lo que va tras "v=" en YouTube
      videoProximamente: false,            // true = aviso "vídeo en preparación" con enlace a tu canal
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
      titulo: "¿Hay alguien ahí dentro?",
      fecha: "2026-11-05",
      categoria: "Ciencia y ficción",
      resumen: "Un hombre que no ve cruza un pasillo lleno de obstáculos sin tocar ninguno. Su cerebro vio; él no. ¿Y si se pudiera ser muy listo sin que haya nadie dentro?",
      subtitulo: "",
      texto: `
Imagina una criatura que aprende más rápido que tú, anticipa cada uno de tus movimientos y te gana en cualquier juego que se te ocurra. Ahora imagina que, dentro de ella, no hay nada. Ni dolor, ni color, ni miedo, ni un «yo» que se dé cuenta de que está ganando. Solo cálculo.

¿Sería inteligente? Sin duda. ¿Sería alguien?

Esa es la pregunta que el canadiense Peter Watts lanzó en 2006 con Visión ciega (Blindsight), una novela de ciencia ficción en la que la humanidad se encuentra con unos alienígenas brillantes… y quizá completamente vacíos por dentro.

Lo inquietante no es la idea. Es que Watts no se la sacó de la manga: la construyó a partir de grietas reales en lo que sabemos sobre la mente. Vamos a recorrerlas una a una. Y al final te dejo una herramienta para que ningún titular sobre «consciencia cuántica» te la vuelva a colar.

## Un ciego que esquiva obstáculos
El título de la novela no es una metáfora. La visión ciega existe y está en los manuales de neurología.

Aparece en algunas personas con lesiones en la corteza visual primaria, la zona del cerebro donde lo que captan los ojos se convierte en «ver». Estos pacientes aseguran, con total sinceridad, que no ven nada en parte de su campo visual. Pero si les obligas a adivinar —¿la luz está a la izquierda o a la derecha?, ¿la línea es vertical u horizontal?— aciertan mucho más de lo que acertarían por azar.

Ellos juran que están adivinando. Su cerebro, en cambio, sabe la respuesta.

En 2008, un equipo de investigadores grabó a un paciente con la corteza visual dañada en ambos hemisferios —ciego a efectos prácticos— recorriendo un pasillo sembrado de cajas y sillas. Lo cruzó esquivándolas todas. Cuando le preguntaron cómo lo había hecho, no supo explicarlo.

**Lo que esto demuestra:** parte de la información visual puede guiar lo que haces sin pasar por la experiencia consciente de ver. Procesar y experimentar no son exactamente lo mismo: pueden separarse, al menos en parte.

**Lo que no demuestra:** que se pueda tener una mente entera, inteligente y general, sin nadie dentro. Además, los científicos todavía discuten si algunos de estos pacientes no ven nada en absoluto o tienen una visión tan degradada que no la reconocen como tal.

Watts coge esa grieta pequeña y real… y la convierte en una especie entera.

## La provocación: ¿y si la consciencia sobra?
Damos por hecho que la consciencia es la cima de la inteligencia: cuanto más lista es una mente, más «despierta» está. Watts le da la vuelta.

En las notas que acompañan a la novela plantea que, en condiciones normales, la consciencia recibe el trabajo de procesos inconscientes mucho más ricos y se lo atribuye a sí misma. Algo así —y es solo una analogía— como un portavoz que se entera de las decisiones del Gobierno por la prensa y luego las anuncia como si fueran suyas.

Si eso fuera así, la pregunta se vuelve incómoda: ¿y si la consciencia fuera una estrategia evolutiva cara, un lujo prescindible? ¿Y si una mente sin ella fuera más rápida, más eficiente… y mejor?

**Ojo:** esto es un experimento mental de un novelista, no un descubrimiento. Pero es de los buenos, porque la ciencia todavía no sabe cómo descartarlo.

## La mitad olvidada del cerebro
La novela tiene otra pata, y es la misma que alimenta muchos titulares. Para entenderla hay que hablar de unas células de las que casi nadie habla.

Cuando piensas en el cerebro, piensas en neuronas. Pero comparten espacio con otras células, la glía, que durante más de un siglo se consideraron poco más que relleno. De hecho, «glía» viene del griego y significa «pegamento».

Por cierto, un dato que probablemente te contaron mal: no hay diez veces más glía que neuronas. Las estimaciones actuales hablan de una proporción cercana a una por una en el conjunto del cerebro humano.

Las protagonistas de la glía son los astrocitos, llamados así por su forma de estrella. Y hoy sabemos que de pasivos no tienen nada. Se enroscan alrededor de las conexiones entre neuronas —por eso se habla de sinapsis tripartita: dos neuronas y un astrocito—, «escuchan» lo que ocurre mediante señales de calcio y pueden modular la actividad neuronal. Un solo astrocito humano puede estar en contacto con hasta unos dos millones de sinapsis.

En 2024, un estudio en ratones fue un paso más allá. Activar astrocitos de una zona concreta del tálamo (el tálamo paraventricular), o modificar un canal de potasio propio de estas células llamado Kir4.1, ayudaba a los animales a recuperarse de la anestesia con sevoflurano, a través de una conexión con la corteza prefrontal.

**Traducción:** los astrocitos ayudan a regular el paso de «dormido por la anestesia» a «despierto». No es poco.

Pero cuidado con el salto. Despertar no es lo mismo que sentir. Que unas células ayuden a accionar el interruptor de la vigilia no nos dice que la experiencia —el rojo del rojo, el dolor del dolor— viva en ellas.

Hay quien ha ido más lejos. Los investigadores Pereira y Furlan propusieron que la actividad sincronizada de las neuronas podría traspasar información a ondas de calcio en los astrocitos, y que estas ayudarían a «coser» contenidos dispersos en una única experiencia consciente. Es una idea sugerente, pero es un modelo teórico: nadie ha demostrado que las ondas de calcio produzcan consciencia.

## El salto cuántico (y por qué es tan resbaladizo)
Aquí entra la palabra que vende todos los titulares: cuántico.

**Primera trampa: «el cerebro es cuántico».** Claro que sí. Y tu tostadora también. Toda la materia obedece a la mecánica cuántica a escala microscópica. La pregunta interesante es otra, mucho más difícil: ¿mantiene el cerebro estados cuánticos especiales —coherencia, superposición, entrelazamiento— durante el tiempo suficiente y de una forma que sea necesaria para sentir?

Hay dos grandes apuestas, y conviene no mezclarlas:

- **La versión cuántica de la hipótesis de la glía.** Algunos autores han sugerido que iones de calcio atrapados en los astrocitos podrían tener estados cuánticos que darían unidad a la experiencia. Es la opción más especulativa del menú: falta demostrar que ese estado exista y que haga algo.
- **Orch OR**, del físico Roger Penrose (sí, premio Nobel de Física en 2020) y el anestesiólogo Stuart Hameroff. Sitúa los procesos cuánticos en los microtúbulos, unas estructuras que forman parte del esqueleto interno de las neuronas, y vincula cada momento consciente a un «colapso» del estado cuántico que, según el modelo, estaría ligado a la geometría del espacio-tiempo. No tiene nada que ver con la glía.

En el mundo de la novela, Watts menciona un problema «cuántico-glial». Fuera de la ficción, no existe ninguna teoría aceptada con ese nombre.

## El experimento de las ratas
Un dato que da vértigo: llevamos desde 1846 anestesiando a personas, millones cada día en quirófanos de todo el mundo, y todavía no sabemos con exactitud cómo apagan la consciencia los anestésicos.

Por eso la anestesia es un campo de batalla perfecto para estas teorías. Si los microtúbulos importan, protegerlos debería hacer que la anestesia tardase más en hacer efecto.

En 2024 alguien lo probó. A ocho ratas se les administró epotilona B, un fármaco que estabiliza los microtúbulos, y después se las expuso a isoflurano, un anestésico. De media, tardaron 69 segundos más en perder el reflejo de enderezamiento (la capacidad de darse la vuelta cuando se las pone boca arriba). El efecto fue estadísticamente fuerte.

Una revisión de 2025, escrita por defensores de Orch OR, lo interpreta como apoyo a un sustrato cuántico de la consciencia. Antes de comprarlo, mira la letra pequeña:

- Eran ocho ratas: una muestra pequeña.
- Darse la vuelta es una conducta, una medida indirecta. No sabemos qué sentía cada rata.
- El experimento no midió nada cuántico.
- Un mecanismo clásico, sin física cuántica de por medio, también podría explicar el resultado.

**Conclusión honesta:** los microtúbulos podrían ser una diana real de los anestésicos, y el resultado es compatible con lo que predice Orch OR. Pero que un dato encaje con una predicción no confirma toda la teoría.

## La prueba de fuego: la decoherencia
El gran enemigo de cualquier teoría cuántica del cerebro tiene nombre: decoherencia.

Los estados cuánticos delicados se «desmoronan» cuando interactúan con su entorno. Y el cerebro es justo el peor entorno posible: cálido, húmedo y en constante agitación.

El físico Max Tegmark hizo los números para los procesos que analizó. Esos estados cuánticos durarían entre 10⁻¹³ y 10⁻²⁰ segundos. Las neuronas, en cambio, trabajan en escalas de entre una milésima y una décima de segundo. La diferencia, en el mejor de los casos, es de diez mil millones de veces.

Para hacerte una idea (de nuevo, es una analogía): es como pedirle a una pompa de jabón que dura un segundo que aguante intacta más de tres siglos.

Los defensores de las teorías cuánticas han discutido los supuestos de ese cálculo, y la discusión sigue abierta. Así que la conclusión justa no es «la decoherencia lo descarta todo», sino esta: cualquier teoría cuántica tiene que demostrar en el laboratorio que su estado cuántico sobrevive, y que hace algo que una explicación clásica no puede explicar. Por ahora, ninguna lo ha conseguido.

## Para llevarte: la escalera de la evidencia
Esta es la herramienta que te prometía. Cada afirmación sobre el cerebro está en algún peldaño de esta escalera, que va de lo medido a lo imaginado:

1. **«Sabemos que…»** Los astrocitos modulan la actividad de las neuronas.
2. **«Un estudio encontró…»** Manipular ciertos astrocitos cambia cómo despiertan los ratones de la anestesia.
3. **«Esto sugiere…»** Los microtúbulos podrían ser una diana real de los anestésicos.
4. **«Una hipótesis propone…»** La glía ayudaría a integrar la experiencia consciente.
5. **«Se ha especulado…»** Estados cuánticos en los astrocitos darían unidad a la consciencia.
6. **«Un novelista imagina…»** Una especie superinteligente sin ninguna consciencia.

La próxima vez que leas un titular, pregúntate dos cosas: en qué peldaño está de verdad y en cuál dice estar. Casi todos los bulos sobre el cerebro son, simplemente, un peldaño 5 disfrazado de peldaño 1.

## Volvamos a la criatura
¿Qué nos dice entonces la ciencia sobre aquella criatura del principio, brillante y vacía?

Nos dice que el cerebro puede procesar información sin que todo llegue a la consciencia. Nos dice que la glía, esa mitad olvidada, participa activamente en cómo pasamos de un estado a otro. Pero no demuestra que pueda existir una especie inteligente sin nadie dentro, ni que la consciencia nazca de estados cuánticos en la glía.

Y aun así, la pregunta de Watts no se desactiva. Porque su fuerza no depende de que su mecanismo sea correcto. Depende de algo más incómodo: si inteligencia y consciencia pueden separarse, una inteligencia lo bastante buena podría imitarnos a la perfección sin sentir absolutamente nada.

Y hoy, que hablamos a diario con máquinas que escriben como nosotros, esa pregunta ya no suena tan lejana. Lo inquietante es que todavía no sabemos qué prueba nos permitiría distinguir una mente de una máquina vacía.

> La ficción de Watts vive exactamente ahí: en el hueco entre lo que la ciencia ha demostrado y lo que todavía no sabe descartar.

Si te ha picado la curiosidad: Peter Watts publicó Visión ciega con una licencia Creative Commons, así que puedes leer la novela original en inglés de forma gratuita y legal en su web.
`,
      portada: "img/portada%20video%201.png",
      youtubeId: "",                        // cuando publiques el vídeo, pon aquí su ID
      videoProximamente: true,              // muestra el aviso "vídeo en preparación" hasta que haya youtubeId
      fotos: [],
      videos: [],
      enlaces: [
        { texto: "Visión ciega (Blindsight), de Peter Watts: novela gratuita en inglés en la web del autor", url: "https://www.rifters.com/real/Blindsight.htm" },
      ],
    },
    {
      titulo: "La glía: las células olvidadas del cerebro",
      fecha: "2026-11-05",
      categoria: "Cerebro",
      resumen: "El cerebro no funciona solo gracias a las neuronas. Las células gliales mantienen su entorno, participan en la comunicación nerviosa y ayudan a proteger el sistema nervioso. Algunas también intervienen en los mecanismos que pueden mantener el dolor crónico: una línea de investigación prometedora, aunque todavía con preguntas abiertas.",
      subtitulo: "",
      texto: `
## Mucho más que un soporte
Cuando pensamos en el cerebro, solemos imaginar neuronas conectadas entre sí. Sin embargo, estas no trabajan solas. A su alrededor existe una comunidad de células, la glía, que participa activamente en el funcionamiento del sistema nervioso. Durante mucho tiempo se destacó sobre todo su papel de sostén; hoy sabemos que también regula el ambiente en el que las neuronas viven y se comunican.

La glía no es un único tipo de célula:

- **Astrocitos.** Ayudan a mantener el equilibrio químico que necesitan las neuronas, les proporcionan apoyo metabólico y modulan la comunicación en las sinapsis, los puntos de contacto entre células nerviosas.
- **Oligodendrocitos.** Forman la mielina del sistema nervioso central, una envoltura que facilita la transmisión de los impulsos nerviosos.
- **Microglía.** Desempeña funciones de vigilancia y defensa inmunitaria, y participa en la retirada de restos celulares.

Estas tareas se coordinan: no son departamentos aislados.

## Cuando el sistema de protección amplifica las señales
El interés por la glía ha crecido especialmente en la investigación del dolor persistente. Tras una lesión nerviosa, la microglía y los astrocitos pueden cambiar su actividad y liberar moléculas que modifican la comunicación con las neuronas. En determinadas circunstancias, estas interacciones favorecen un entorno inflamatorio y aumentan la excitabilidad de los circuitos que procesan las señales relacionadas con el daño.

Una consecuencia posible es la **sensibilización central**: las neuronas del sistema nervioso central responden con mayor intensidad a determinadas entradas sensoriales. Para entenderlo, podemos imaginar un sistema de alarma cuyo volumen ha aumentado. Una señal que antes provocaba una respuesta moderada puede generar una respuesta más intensa. La glía puede contribuir a ese ajuste del volumen, pero no es su único regulador ni explica por sí sola todos los casos de dolor crónico.

Además, estas interacciones no ocurren únicamente en el cerebro. La médula espinal constituye otro lugar importante de comunicación entre neuronas y células gliales. Por eso, estudiar el dolor implica observar redes y mecanismos distribuidos por el sistema nervioso, no buscar una sola célula responsable.

## Qué sabemos y qué falta por demostrar
Una parte importante de los mecanismos descritos procede de experimentos con animales. En personas, los estudios de neuroimagen han encontrado cambios en marcadores relacionados con la actividad glial en algunas condiciones dolorosas, como la fibromialgia. Estos resultados aportan pistas, pero detectar un marcador no demuestra por sí solo que la glía sea la causa del dolor de una persona.

Esta distinción es esencial: identificar un mecanismo experimental no equivale a disponer de un tratamiento eficaz y seguro. Las diferencias entre especies y la diversidad de las funciones gliales dificultan trasladar los hallazgos a la práctica clínica. El reto no consiste simplemente en «apagar» estas células, porque también cumplen funciones necesarias de protección y mantenimiento.

> Las neuronas no trabajan solas. Comprender su diálogo con la glía permite estudiar el dolor desde una perspectiva más completa y explorar posibles dianas terapéuticas, sin convertir una línea de investigación prometedora en una explicación única ni en una promesa de curación.
`,
      portada: "img/glia-astrocitos.jpg",
      portadaCredito: "Imagen: astrocitos y oligodendrocitos en cultivo. Yirui Sun, Wellcome Collection (CC BY 4.0)",
      portadaCreditoUrl: "https://wellcomecollection.org/works/z8ku7j98",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [
        { texto: "Revisión científica sobre astrocitos y dolor crónico (PubMed Central)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10043112/" },
        { texto: "Francis Crick Institute (2025): la red glía-sistema inmunitario", url: "https://www.crick.ac.uk/research/publications/the-glia-immune-network-astrocytes-and-oligodendrocytes-as-microglial-co-ordinators-in-health-and-disease" },
        { texto: "Comisión Europea (CORDIS): proyecto TOBeATPAIN sobre células no neuronales y dolor", url: "https://cordis.europa.eu/article/id/442620-non-neuronal-cells-like-micro-glia-and-macrophages-regulate-pain" },
      ],
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
