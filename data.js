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

   Versión en inglés:
     - Los campos que acaban en _en (titulo_en, resumen_en, texto_en...)
       son la traducción. Si un tema no los tiene, en inglés sale en español.
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
  // Versión en inglés de los datos básicos
  nombreWeb_en: "Science Notebook",
  etiqueta_en: "Science communication",
  titular_en: "Science Notebook",
  intro_en:
    "Notes and videos on physiology, pain, neuroscience and the science found in fiction. " +
    "A place to organise my reading and share topics I find interesting.",
  sobreMi_en:
    "I'm a physiotherapist. In this notebook I gather topics I find interesting, " +
    "recent reading and audiovisual material. Comments and suggestions are always welcome.",
  // Nombre de cada categoría en inglés
  categorias_en: {
    "Dolor": "Pain",
    "Ciencia y ficción": "Science & fiction",
    "Cerebro": "Brain",
    "Movimiento": "Movement",
    "Tecnología": "Technology",
  },

  foto: "", // ejemplo: "img/yo.jpg"
  imagenProximamente: "img/Gato%20enciende%20la%20luz_%20Pr%C3%B3ximamente.gif", // imagen de los temas que aún no tienen contenido

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
      titulo_en: "",                       // opcional: versión en inglés (igual con resumen_en, subtitulo_en, texto_en)
      resumen_en: "",
      texto_en: ``,
      portada: "",                         // foto de portada: "img/mi-foto.jpg"
      portadaCredito: "",                  // opcional: autor y licencia de la foto (sale bajo la imagen)
      portadaCreditoUrl: "",               // opcional: enlace a la fuente de la foto
      youtubeId: "",                       // vídeo principal: lo que va tras "v=" en YouTube
      videoProximamente: false,            // true = aviso "vídeo en preparación" con enlace a tu canal
      proximamente: false,                 // true = tema aún sin contenido: muestra la imagen de "próximamente"
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
      // --- Versión en inglés ---
      titulo_en: "Why does pain hurt the way it does?",
      resumen_en: "A nail that never touches the flesh, and it hurts. A hand that no longer exists, and it hurts. Pain isn't where it hurts.",
      subtitulo_en: "Pain isn't where it hurts",
      texto_en: `
In 1995, a British medical journal published a case report. A 29-year-old builder jumped down from scaffolding and landed on a 15-centimetre nail, which went straight through his boot. He arrived at the emergency department screaming in pain, so severe that he had to be sedated with opioids before staff could take the boot off. When they finally did, the nail had passed cleanly between two toes. There wasn't a scratch on him.

Was he faking? No. It really hurt. And understanding why means understanding what pain is.

## What pain is
We tend to think of pain as a message travelling from the wound to the brain, like a wire signalling "damage here". That's not how it works. Our skin, muscles and organs contain nociceptors, sensors that detect danger: extreme heat, intense pressure, chemicals released during inflammation. They send signals along the nerves and the spinal cord to the brain. But those signals are not pain yet; they are information.

The brain takes that information and blends it with everything else: what you see, what you remember, what you fear and the context you are in. With all of that, it decides whether you are in danger. If it concludes that you are, it produces pain. That is why the International Association for the Study of Pain defines it as a sensory and emotional experience, not as a damage meter. The builder saw a nail sticking out of his boot, and his brain drew the most logical conclusion.

## Why it hurts
Because pain protects us. Some people are born with a mutation that stops them from feeling it. It sounds like a superpower, but it is a curse: they break bones without noticing, bite their tongues or burn themselves, and they tend to live shorter lives. Pain is the alarm that forces us to stop, pull our hand away and look after the injured area.

## Why not everything hurts the same
- **Because of the cable carrying the signal.** When you stub your little toe, you first feel a sharp jab and then a dull, throbbing wave. Those are two types of nerve fibre: fast ones, wrapped in myelin, which bring the precise "ouch!", and slow ones, without that insulation, which bring the diffuse pain that lingers.
- **Because of where it comes from.** Pain from the skin is precisely located. Pain from the internal organs is vague and sometimes shows up somewhere else: a heart attack can hurt in the left arm, because signals from the heart and the arm share neurons in the spinal cord and the brain mistakes the sender.
- **Because the wiring itself is damaged.** When the problem lies in the nerve itself, the pain burns, cramps or comes as electric shocks. This is neuropathic pain: the alarm goes off because the system is failing, not because there is a threat.
- **Because of context.** During the Second World War, the physician Henry Beecher noticed that many soldiers with serious wounds asked for less pain relief than civilians with similar injuries. For a soldier, the wound meant getting out of the front line alive. It is also why rubbing a bump helps: touch competes with the danger signal in the spinal cord and "closes the gate" on part of it.
- **Because of time.** In chronic pain, the alarm becomes oversensitive. The nervous system learns to hurt and keeps firing even after the tissues have healed.

## Final thought
Some people feel pain in a hand they no longer have. This is phantom limb pain: the arm has been amputated, but the brain's map of the body is still there, and sometimes it produces pain in it. Most astonishingly, in some cases it can be eased with a simple mirror. Seeing the reflection of the healthy hand moving where the other one used to be, the brain "believes" the missing hand is relaxing, and the pain eases.

> A nail that never touches the flesh, and it hurts. A hand that does not exist, and it hurts. Pain is not in the foot or the hand: it is in the conclusion the brain draws.
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
      // --- Versión en inglés ---
      titulo_en: "Is anyone in there?",
      resumen_en: "A man who cannot see walks down a corridor full of obstacles without touching a single one. His brain saw; he didn't. What if you could be very clever with no one inside?",
      texto_en: `
Imagine a creature that learns faster than you, anticipates your every move and beats you at any game you can think of. Now imagine that, inside it, there is nothing. No pain, no colour, no fear, no "self" aware that it is winning. Just computation.

Would it be intelligent? Without a doubt. Would it be someone?

That is the question the Canadian writer Peter Watts posed in 2006 with Blindsight, a science fiction novel in which humanity encounters brilliant aliens… who may be completely empty inside.

What is unsettling is not the idea. It is that Watts did not pull it out of thin air: he built it from real cracks in what we know about the mind. Let's go through them one by one. And at the end I will give you a tool so that no headline about "quantum consciousness" ever fools you again.

## A blind man who dodges obstacles
The novel's title is not a metaphor. Blindsight is real, and it is in the neurology textbooks.

It appears in some people with damage to the primary visual cortex, the area of the brain where what the eyes pick up becomes "seeing". These patients say, with complete sincerity, that they cannot see anything in part of their visual field. But if you make them guess (is the light on the left or the right? is the line vertical or horizontal?) they get it right far more often than chance would allow.

They swear they are guessing. Their brain, on the other hand, knows the answer.

In 2008, a team of researchers filmed a patient whose visual cortex was damaged in both hemispheres, effectively blind, walking down a corridor scattered with boxes and chairs. He made it through, dodging every one. When asked how he had done it, he could not explain.

**What this shows:** some visual information can guide what you do without passing through the conscious experience of seeing. Processing and experiencing are not exactly the same thing: they can come apart, at least partly.

**What it does not show:** that you can have a whole mind, intelligent and general, with nobody inside. What is more, scientists still debate whether some of these patients see nothing at all or have vision so degraded that they do not recognise it as such.

Watts takes that small, real crack… and turns it into an entire species.

## The provocation: what if consciousness is surplus?
We take it for granted that consciousness is the peak of intelligence: the cleverer a mind is, the more "awake" it is. Watts turns that upside down.

In the notes accompanying the novel, he suggests that, under normal conditions, consciousness receives the work of much richer unconscious processes and takes the credit for it. Something like (and this is only an analogy) a spokesperson who learns about the government's decisions from the newspapers and then announces them as if they were their own.

If that were so, the question becomes uncomfortable: what if consciousness were an expensive evolutionary strategy, a dispensable luxury? What if a mind without it were faster, more efficient… and better?

**Note:** this is a novelist's thought experiment, not a discovery. But it is a good one, because science does not yet know how to rule it out.

## The forgotten half of the brain
The novel has another leg to stand on, and it is the same one that feeds many headlines. To understand it, we need to talk about some cells that hardly anyone talks about.

When you think of the brain, you think of neurons. But they share space with other cells, the glia, which for more than a century were considered little more than filler. In fact, "glia" comes from the Greek word for "glue".

By the way, here is a fact you were probably told wrong: there are not ten times more glial cells than neurons. Current estimates put the ratio close to one to one across the human brain.

The stars of the glia are astrocytes, named for their star shape. And today we know there is nothing passive about them. They wrap around the connections between neurons (hence the term tripartite synapse: two neurons and an astrocyte), "listen" to what is happening through calcium signals and can modulate neuronal activity. A single human astrocyte can be in contact with up to around two million synapses.

In 2024, a study in mice went a step further. Activating astrocytes in a specific area of the thalamus (the paraventricular thalamus), or modifying a potassium channel specific to these cells called Kir4.1, helped the animals recover from sevoflurane anaesthesia, through a connection with the prefrontal cortex.

**In plain words:** astrocytes help regulate the transition from "under anaesthesia" to "awake". That is no small thing.

But be careful with the leap. Waking up is not the same as feeling. The fact that some cells help flip the wakefulness switch does not tell us that experience (the redness of red, the painfulness of pain) lives in them.

Some have gone further. The researchers Pereira and Furlan proposed that the synchronised activity of neurons could pass information to calcium waves in astrocytes, and that these would help "stitch" scattered contents into a single conscious experience. It is a suggestive idea, but it is a theoretical model: no one has shown that calcium waves produce consciousness.

## The quantum leap (and why it is so slippery)
Here comes the word that sells every headline: quantum.

**First trap: "the brain is quantum".** Of course it is. So is your toaster. All matter obeys quantum mechanics at the microscopic scale. The interesting question is a different, much harder one: does the brain sustain special quantum states (coherence, superposition, entanglement) for long enough, and in a way that is necessary for feeling?

There are two big bets, and it is worth not mixing them up:

- **The quantum version of the glial hypothesis.** Some authors have suggested that calcium ions trapped in astrocytes could have quantum states that would give experience its unity. It is the most speculative option on the menu: it still has to be shown that such a state exists and that it does anything.
- **Orch OR**, from the physicist Roger Penrose (yes, 2020 Nobel Prize in Physics) and the anaesthesiologist Stuart Hameroff. It places quantum processes in microtubules, structures that are part of the neurons' internal skeleton, and links each conscious moment to a "collapse" of the quantum state that, according to the model, would be tied to the geometry of space-time. It has nothing to do with glia.

In the world of the novel, Watts mentions a "quantum-glial" problem. Outside fiction, there is no accepted theory by that name.

## The rat experiment
Here is a dizzying fact: we have been anaesthetising people since 1846, millions every day in operating theatres around the world, and we still do not know exactly how anaesthetics switch off consciousness.

That is why anaesthesia is a perfect battleground for these theories. If microtubules matter, protecting them should make anaesthesia take longer to work.

In 2024, someone tested it. Eight rats were given epothilone B, a drug that stabilises microtubules, and were then exposed to isoflurane, an anaesthetic. On average, they took 69 seconds longer to lose their righting reflex (the ability to roll back over when placed on their backs). The effect was statistically strong.

A 2025 review, written by proponents of Orch OR, interprets this as support for a quantum substrate of consciousness. Before buying it, read the small print:

- There were eight rats: a small sample.
- Rolling over is a behaviour, an indirect measure. We do not know what each rat was feeling.
- The experiment did not measure anything quantum.
- A classical mechanism, with no quantum physics involved, could also explain the result.

**Honest conclusion:** microtubules could be a real target of anaesthetics, and the result is consistent with what Orch OR predicts. But one result fitting a prediction does not confirm the whole theory.

## The acid test: decoherence
The great enemy of any quantum theory of the brain has a name: decoherence.

Delicate quantum states "fall apart" when they interact with their surroundings. And the brain is just about the worst possible environment: warm, wet and constantly agitated.

The physicist Max Tegmark ran the numbers for the processes he analysed. Those quantum states would last between 10⁻¹³ and 10⁻²⁰ seconds. Neurons, by contrast, work on timescales of between a thousandth and a tenth of a second. The difference, in the best case, is a factor of ten billion.

To give you an idea (again, it is an analogy): it is like asking a soap bubble that lasts one second to stay intact for more than three centuries.

Advocates of quantum theories have challenged the assumptions behind that calculation, and the debate remains open. So the fair conclusion is not "decoherence rules everything out", but this: any quantum theory has to show in the lab that its quantum state survives, and that it does something a classical explanation cannot. So far, none has managed it.

## Takeaway: the ladder of evidence
This is the tool I promised you. Every claim about the brain sits on some rung of this ladder, which runs from the measured to the imagined:

1. **"We know that…"** Astrocytes modulate the activity of neurons.
2. **"A study found…"** Manipulating certain astrocytes changes how mice wake up from anaesthesia.
3. **"This suggests…"** Microtubules could be a real target of anaesthetics.
4. **"A hypothesis proposes…"** Glia would help integrate conscious experience.
5. **"It has been speculated…"** Quantum states in astrocytes would give consciousness its unity.
6. **"A novelist imagines…"** A superintelligent species with no consciousness at all.

Next time you read a headline, ask yourself two things: which rung it is really on, and which one it claims to be on. Almost every myth about the brain is simply a rung 5 dressed up as a rung 1.

## Back to the creature
So what does science tell us about that creature from the beginning, brilliant and empty?

It tells us that the brain can process information without all of it reaching consciousness. It tells us that glia, that forgotten half, play an active part in how we move from one state to another. But it does not show that an intelligent species with nobody inside could exist, nor that consciousness arises from quantum states in glia.

And yet Watts's question does not go away. Its power does not depend on his mechanism being right. It depends on something more uncomfortable: if intelligence and consciousness can be separated, a good enough intelligence could imitate us perfectly without feeling anything at all.

And today, when we talk every day with machines that write like us, that question no longer sounds so far-fetched. The unsettling part is that we still do not know what test would let us tell a mind apart from an empty machine.

> Watts's fiction lives exactly there: in the gap between what science has shown and what it cannot yet rule out.

If your curiosity has been piqued: Peter Watts released Blindsight under a Creative Commons licence, so you can read the original novel in English for free, and legally, on his website.
`,
      portada: "img/portada%20video%201.png",
      youtubeId: "",                        // cuando publiques el vídeo, pon aquí su ID
      videoProximamente: true,              // muestra el aviso "vídeo en preparación" hasta que haya youtubeId
      fotos: [],
      videos: [],
      enlaces: [
        { texto: "Visión ciega (Blindsight), de Peter Watts: novela gratuita en inglés en la web del autor", texto_en: "Blindsight, by Peter Watts: the full novel, free on the author's website", url: "https://www.rifters.com/real/Blindsight.htm" },
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
      // --- Versión en inglés ---
      titulo_en: "Glia: the brain's forgotten cells",
      resumen_en: "The brain doesn't work thanks to neurons alone. Glial cells maintain their environment, take part in nerve communication and help protect the nervous system. Some are also involved in the mechanisms that can sustain chronic pain: a promising line of research, though with questions still open.",
      texto_en: `
## Much more than support
When we think of the brain, we usually picture neurons connected to each other. Yet they do not work alone. Around them lives a community of cells, the glia, which takes an active part in how the nervous system works. For a long time the emphasis was on their supporting role; today we know they also regulate the environment in which neurons live and communicate.

Glia are not a single type of cell:

- **Astrocytes.** They help maintain the chemical balance neurons need, give them metabolic support and modulate communication at synapses, the contact points between nerve cells.
- **Oligodendrocytes.** They form the myelin of the central nervous system, a sheath that makes it easier for nerve impulses to travel.
- **Microglia.** They carry out surveillance and immune defence, and help clear away cell debris.

These tasks are coordinated: they are not isolated departments.

## When the protection system amplifies the signals
Interest in glia has grown especially in research on persistent pain. After a nerve injury, microglia and astrocytes can change their activity and release molecules that alter their communication with neurons. Under certain circumstances, these interactions promote an inflammatory environment and increase the excitability of the circuits that process damage-related signals.

One possible consequence is **central sensitisation**: neurons in the central nervous system respond more strongly to certain sensory inputs. To picture it, imagine an alarm system whose volume has been turned up. A signal that used to trigger a moderate response can now trigger a stronger one. Glia can contribute to that volume adjustment, but they are not its only regulator, nor do they explain every case of chronic pain on their own.

What is more, these interactions do not happen only in the brain. The spinal cord is another important site of communication between neurons and glial cells. That is why studying pain means looking at networks and mechanisms spread across the nervous system, not searching for a single culprit cell.

## What we know and what remains to be shown
Much of what we know about these mechanisms comes from animal experiments. In people, neuroimaging studies have found changes in markers linked to glial activity in some painful conditions, such as fibromyalgia. These results offer clues, but detecting a marker does not by itself show that glia are the cause of a person's pain.

This distinction is essential: identifying an experimental mechanism is not the same as having an effective and safe treatment. Differences between species and the diversity of glial functions make it hard to translate the findings into clinical practice. The challenge is not simply to "switch off" these cells, because they also carry out necessary protective and maintenance functions.

> Neurons do not work alone. Understanding their dialogue with glia lets us study pain from a fuller perspective and explore possible therapeutic targets, without turning a promising line of research into a single explanation or a promise of a cure.
`,
      portada: "img/glia-astrocitos.jpg",
      portadaCredito: "Imagen: astrocitos y oligodendrocitos en cultivo. Yirui Sun, Wellcome Collection (CC BY 4.0)",
      portadaCredito_en: "Image: astrocytes and oligodendrocytes in culture. Yirui Sun, Wellcome Collection (CC BY 4.0)",
      portadaCreditoUrl: "https://wellcomecollection.org/works/z8ku7j98",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [
        { texto: "Revisión científica sobre astrocitos y dolor crónico (PubMed Central)", texto_en: "Scientific review on astrocytes and chronic pain (PubMed Central)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10043112/" },
        { texto: "Francis Crick Institute (2025): la red glía-sistema inmunitario", texto_en: "Francis Crick Institute (2025): the glia–immune system network", url: "https://www.crick.ac.uk/research/publications/the-glia-immune-network-astrocytes-and-oligodendrocytes-as-microglial-co-ordinators-in-health-and-disease" },
        { texto: "Comisión Europea (CORDIS): proyecto TOBeATPAIN sobre células no neuronales y dolor", texto_en: "European Commission (CORDIS): the TOBeATPAIN project on non-neuronal cells and pain", url: "https://cordis.europa.eu/article/id/442620-non-neuronal-cells-like-micro-glia-and-macrophages-regulate-pain" },
      ],
    },
    {
      titulo: "El ejercicio como medicina",
      proximamente: true,
      fecha: "2026-10-12",
      categoria: "Movimiento",
      resumen: "Qué pasa en el cuerpo cuando nos movemos, y por qué se receta igual que un fármaco.",
      texto:
        "El ejercicio tiene efectos sobre el corazón, los músculos, los huesos, el metabolismo y el cerebro. " +
        "Por eso cada vez se habla más de prescribirlo con dosis, igual que un medicamento: tipo, intensidad, frecuencia y duración.",
      // --- Versión en inglés ---
      titulo_en: "Exercise as medicine",
      resumen_en: "What happens in the body when we move, and why it is prescribed just like a drug.",
      texto_en: `
Exercise has effects on the heart, muscles, bones, metabolism and brain. That is why there is more and more talk of prescribing it with a dose, just like a medicine: type, intensity, frequency and duration.
`,
      portada: "",
      youtubeId: "",
      fotos: [],
      videos: [],
      enlaces: [],
    },
    {
      titulo: "Medir el cuerpo con el móvil",
      proximamente: true,
      fecha: "2026-10-05",
      categoria: "Tecnología",
      resumen: "¿Puede un smartphone medir cuánto dobla tu rodilla tan bien como un aparato clínico?",
      texto:
        "Los móviles llevan acelerómetros, giroscopios y cámaras. Con ellos se puede medir el movimiento de las articulaciones o analizar cómo caminamos.\n\n" +
        "La pregunta científica es si esas medidas son fiables y válidas comparadas con los métodos de referencia.",
      // --- Versión en inglés ---
      titulo_en: "Measuring the body with your phone",
      resumen_en: "Can a smartphone measure how far your knee bends as well as a clinical instrument?",
      texto_en: `
Phones carry accelerometers, gyroscopes and cameras. With them you can measure how joints move or analyse how we walk.

The scientific question is whether those measurements are reliable and valid compared with the reference methods.
`,
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
      pregunta_en: "Can the brain itself hurt?",
      opciones_en: ["Yes, it is full of pain receptors", "No, brain tissue has no pain receptors"],
      explicacion_en: "Brain tissue has no nociceptors. That is why some operations are performed with the patient awake. Headaches come from other structures, such as the meninges and blood vessels.",
      fuente: "",
    },
    {
      pregunta: "¿Cuántas neuronas tiene, aproximadamente, el cerebro humano?",
      opciones: ["Unos 10.000 millones", "Unos 86.000 millones", "Alrededor de un billón"],
      correcta: 1,
      explicacion: "Los recuentos modernos rondan los 86.000 millones de neuronas, menos de los 100.000 millones que se repetían tradicionalmente.",
      pregunta_en: "Roughly how many neurons does the human brain have?",
      opciones_en: ["About 10 billion", "About 86 billion", "Around a trillion"],
      explicacion_en: "Modern counts put it at around 86 billion neurons, fewer than the 100 billion traditionally quoted.",
      fuente: "",
    },
    {
      pregunta: "¿Qué llega antes al cerebro tras darte un golpe en el pie: el tacto o el dolor sordo?",
      opciones: ["El tacto", "El dolor sordo", "Llegan a la vez"],
      correcta: 0,
      explicacion:
        "El tacto viaja por fibras gruesas y mielinizadas, mucho más rápidas. El dolor sordo va por fibras C, finas y sin mielina. " +
        "Por eso primero notas el golpe y un instante después llega el dolor.",
      pregunta_en: "After you stub your foot, what reaches the brain first: touch or the dull ache?",
      opciones_en: ["Touch", "The dull ache", "They arrive at the same time"],
      explicacion_en: "Touch travels along thick, myelinated fibres, which are much faster. The dull ache travels along thin, unmyelinated C fibres. That is why you feel the knock first and the pain arrives a moment later.",
      fuente: "",
    },
    {
      pregunta: "El cerebro pesa alrededor del 2 % del cuerpo. ¿Qué parte de la energía en reposo consume?",
      opciones: ["Un 2 %", "Un 20 %", "Un 50 %"],
      correcta: 1,
      explicacion: "Consume en torno al 20 % de la energía del cuerpo en reposo. Es un órgano carísimo de mantener.",
      pregunta_en: "The brain accounts for about 2% of body weight. What share of the body's energy does it use at rest?",
      opciones_en: ["About 2%", "About 20%", "About 50%"],
      explicacion_en: "It uses around 20% of the body's energy at rest. It is a very expensive organ to run.",
      fuente: "",
    },
    {
      pregunta: "¿Se puede sentir dolor en una mano que ya no existe?",
      opciones: ["Sí", "No"],
      correcta: 0,
      explicacion:
        "Es el dolor del miembro fantasma y lo sufre una mayoría de las personas amputadas. " +
        "Demuestra que el dolor se construye en el sistema nervioso, no solo en el tejido.",
      pregunta_en: "Can you feel pain in a hand that no longer exists?",
      opciones_en: ["Yes", "No"],
      explicacion_en: "This is phantom limb pain, and most people who have had an amputation experience it. It shows that pain is built in the nervous system, not just in the tissue.",
      fuente: "",
    },
    {
      pregunta: "¿Cuántos huesos tiene un adulto?",
      opciones: ["186", "206", "270"],
      correcta: 1,
      explicacion: "Un adulto tiene 206. Un recién nacido tiene bastantes más, porque muchos se fusionan durante el crecimiento.",
      pregunta_en: "How many bones does an adult have?",
      opciones_en: ["186", "206", "270"],
      explicacion_en: "An adult has 206. A newborn has quite a few more, because many of them fuse together during growth.",
      fuente: "",
    },
    {
      pregunta: "¿Las células gliales solo sirven de soporte para las neuronas?",
      opciones: ["Sí, son el pegamento del cerebro", "No, participan activamente en su funcionamiento"],
      correcta: 1,
      explicacion:
        "Regulan la comunicación entre neuronas, fabrican la mielina y defienden el sistema nervioso. " +
        "La microglía, además, está implicada en el dolor crónico.",
      pregunta_en: "Are glial cells just support for neurons?",
      opciones_en: ["Yes, they are the brain's glue", "No, they play an active part in how it works"],
      explicacion_en: "They regulate communication between neurons, produce myelin and defend the nervous system. Microglia are also involved in chronic pain.",
      fuente: "",
    },
  ],
};
