(function () {
  const S = window.SITE || {};
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (t) => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  // Tonos sobrios para las portadas sin imagen (uno por categoría)
  const TONOS = ["#e4e0d6", "#dde3e8", "#e2e5dc", "#e8e0dc", "#e0dde6", "#e6e3d3", "#dae3e1"];
  const REDES = { email: "Correo", youtube: "YouTube", instagram: "Instagram", x: "X", tiktok: "TikTok", github: "GitHub", web: "Web", linkedin: "LinkedIn", orcid: "ORCID", researchgate: "ResearchGate" };

  // ---------- Básicos ----------
  document.title = S.nombreWeb || document.title;
  $("marca").textContent = S.nombreWeb || "";
  $("etiqueta").textContent = S.etiqueta || "";
  $("titulo").textContent = S.titular || S.nombreWeb || "";
  $("intro").textContent = S.intro || "";
  $("sobreMi").textContent = S.sobreMi || "";
  if (S.foto) { $("foto").src = S.foto; $("foto").alt = S.autor || ""; $("foto").hidden = false; }
  $("enlaces").innerHTML = (S.enlaces || []).filter((e) => e.url)
    .map((e) => `<li><a href="${esc(e.url)}" ${e.tipo === "email" ? "" : 'target="_blank" rel="noopener"'}>${esc(REDES[e.tipo] || e.tipo)}</a></li>`).join("");
  $("pie").textContent = `© ${new Date().getFullYear()} ${S.autor || ""} · ${S.nombreWeb || ""}`;

  const fmtFecha = (f) => {
    if (!f) return "";
    const d = new Date(f + "T12:00:00");
    return isNaN(d) ? f : d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  };
  // Texto largo: línea en blanco = párrafo, "## " = subtítulo, "- " o "* " = lista, "> " = cita, **negrita**
  const enLinea = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const formatear = (texto) => {
    const lineas = String(texto || "").replace(/\r/g, "").split("\n");
    let html = "", parrafo = [], lista = [], tipo = "ul";
    const cerrarP = () => { if (parrafo.length) { html += `<p>${enLinea(parrafo.join(" "))}</p>`; parrafo = []; } };
    const cerrarL = () => { if (lista.length) { html += `<${tipo}>${lista.map((l) => `<li>${enLinea(l)}</li>`).join("")}</${tipo}>`; lista = []; } };
    const enLista = (t, texto) => { cerrarP(); if (lista.length && tipo !== t) cerrarL(); tipo = t; lista.push(texto); };
    for (const bruta of lineas) {
      const l = bruta.trim();
      if (!l) { cerrarP(); cerrarL(); continue; }
      if (l.startsWith("## ")) { cerrarP(); cerrarL(); html += `<h4>${enLinea(l.slice(3))}</h4>`; continue; }
      if (/^[-*•] /.test(l)) { enLista("ul", l.slice(2)); continue; }
      if (/^\d+[.)] /.test(l)) { enLista("ol", l.replace(/^\d+[.)] /, "")); continue; }
      if (l.startsWith("> ")) { cerrarP(); cerrarL(); html += `<blockquote>${enLinea(l.slice(2))}</blockquote>`; continue; }
      cerrarL(); parrafo.push(l);
    }
    cerrarP(); cerrarL();
    return html;
  };
  const minutos = (t) => Math.max(1, Math.round(String(t || "").split(/\s+/).filter(Boolean).length / 200));

  const ytThumb = (id) => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
  const ytBoton = (id, titulo) =>
    `<button class="yt" data-yt="${esc(id)}" aria-label="Reproducir vídeo: ${esc(titulo)}"><img src="${ytThumb(id)}" alt="" loading="lazy"><span class="play">Reproducir</span></button>`;

  // ---------- Pregunta del día ----------
  const preguntas = S.preguntas || [];
  if (!preguntas.length) { $("pregunta").remove(); document.querySelector('a[href="#pregunta"]')?.remove(); }
  else {
    const hoy = new Date();
    const indiceHoy = Math.floor(Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()) / 864e5) % preguntas.length;
    let actual = indiceHoy;
    const fechaHoy = hoy.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

    const mostrar = (i) => {
      const q = preguntas[i];
      $("hoy").textContent = i === indiceHoy ? fechaHoy : "Pregunta adicional";
      $("pTexto").textContent = q.pregunta;
      $("pRespuesta").hidden = true;
      const ops = q.opciones || [];
      $("pOpciones").innerHTML = ops.length
        ? ops.map((o, k) => `<li><button type="button" data-k="${k}"><span>${esc(o)}</span><span class="marca-res"></span></button></li>`).join("")
        : `<li><button type="button" class="ver" data-k="ver">Mostrar respuesta</button></li>`;
      $("pOpciones").onclick = (e) => {
        const b = e.target.closest("button");
        if (!b || b.disabled) return;
        let titulo = "Respuesta";
        if (b.dataset.k !== "ver") {
          const elegida = +b.dataset.k, ok = elegida === q.correcta;
          titulo = ok ? "Correcto." : "No es correcto.";
          $("pOpciones").querySelectorAll("button").forEach((x, k) => {
            x.disabled = true;
            const m = x.querySelector(".marca-res");
            if (k === q.correcta) { x.classList.add("bien"); m.textContent = "Correcta"; }
            else if (k === elegida) { x.classList.add("mal"); m.textContent = "Tu respuesta"; }
            else x.classList.add("atenuada");
          });
        } else b.closest("li").remove();
        $("pRespuesta").innerHTML = `<strong>${titulo}</strong><p>${esc(q.explicacion)}</p>` +
          (q.fuente ? `<p><a href="${esc(q.fuente)}" target="_blank" rel="noopener">Ver fuente</a></p>` : "");
        $("pRespuesta").hidden = false;
      };
    };
    mostrar(actual);
    if (preguntas.length < 2) $("pOtra").remove();
    else $("pOtra").onclick = () => { actual = (actual + 1) % preguntas.length; mostrar(actual); };
  }

  // ---------- Temas ----------
  const temas = (S.temas || []).slice().sort((a, b) => String(b.fecha || "").localeCompare(String(a.fecha || "")));
  temas.forEach((t) => (t.id = slug(t.titulo)));
  const cats = [...new Set(temas.map((t) => t.categoria).filter(Boolean))];
  const tono = (c) => TONOS[Math.max(0, cats.indexOf(c)) % TONOS.length];
  let filtro = "Todos";

  const portada = (t) => {
    if (t.portada) return `<div class="portada"><img src="${esc(t.portada)}" alt="" loading="lazy">${t.youtubeId ? '<span class="play">Vídeo</span>' : ""}</div>`;
    if (t.youtubeId) return `<div class="portada"><img src="${ytThumb(t.youtubeId)}" alt="" loading="lazy"><span class="play">Vídeo</span></div>`;
    return `<div class="portada vacia" style="--tono:${tono(t.categoria)}"><span>${esc(t.categoria || "")}</span></div>`;
  };
  const meta = (t) => `<div class="meta">${t.categoria ? `<span class="cat">${esc(t.categoria)}</span>` : ""}<span>${esc(fmtFecha(t.fecha))}</span></div>`;

  const pintarFiltros = () => {
    if (cats.length < 2) { $("filtros").innerHTML = ""; return; }
    $("filtros").innerHTML = ["Todos", ...cats]
      .map((c) => `<button type="button" role="tab" data-c="${esc(c)}" aria-selected="${c === filtro}">${esc(c)}</button>`).join("");
  };
  // En "Todos" se ve el tema más reciente de cada categoría; el resto se despliega con un botón
  const deCategoria = (c) => temas.filter((x) => (x.categoria || "") === (c || ""));
  const pintarTemas = () => {
    const lista = filtro === "Todos"
      ? temas.filter((t) => deCategoria(t.categoria)[0] === t)
      : temas.filter((t) => t.categoria === filtro);
    $("rejilla").innerHTML = lista.length ? lista.map((t, i) => {
      const nF = (t.fotos || []).length, nV = (t.videos || []).length + (t.youtubeId ? 1 : 0);
      const extras = [nV && `${nV} vídeo${nV > 1 ? "s" : ""}`, !t.youtubeId && t.videoProximamente && "Vídeo próximamente", nF && `${nF} ${nF > 1 ? "imágenes" : "imagen"}`].filter(Boolean).join(" · ");
      const dest = i === 0 && filtro === "Todos" && lista.length > 2 ? " destacada" : "";
      const total = deCategoria(t.categoria).length;
      const serie = filtro === "Todos" && t.categoria && total > 1
        ? `<button type="button" class="mas-serie" data-c="${esc(t.categoria)}">Ver los ${total} temas de ${esc(t.categoria)} <span aria-hidden="true">↓</span></button>` : "";
      return `
       <div class="item${dest}">
        <button class="tarjeta${dest}" data-id="${t.id}">
          ${portada(t)}
          <div class="info">
            ${meta(t)}
            <h3>${esc(t.titulo)}</h3>
            <p>${esc(t.resumen)}</p>
            ${extras ? `<span class="extras">${extras}</span>` : ""}
            ${t.texto ? `<span class="leer-mas">Leer más <span aria-hidden="true">→</span></span>` : ""}
          </div>
        </button>
        ${serie}
       </div>`;
    }).join("") : `<p class="vacio">No hay temas en esta categoría.</p>`;
  };
  $("filtros").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-c]");
    if (!b) return;
    filtro = b.dataset.c; pintarFiltros(); pintarTemas();
  });
  $("rejilla").addEventListener("click", (e) => {
    const m = e.target.closest(".mas-serie");
    if (m) { filtro = m.dataset.c; pintarFiltros(); pintarTemas(); $("temas").scrollIntoView({ behavior: "smooth" }); return; }
    const b = e.target.closest(".tarjeta");
    if (b) location.hash = "tema-" + b.dataset.id;
  });
  pintarFiltros(); pintarTemas();

  // ---------- Vista de un tema (enlace propio: #tema-titulo) ----------
  const modal = $("modal");
  const abrir = (t) => {
    let media = "";
    if (t.youtubeId) media = `<div class="m-media">${ytBoton(t.youtubeId, t.titulo)}</div>`;
    else if (t.portada) media = `<div class="m-media"><img src="${esc(t.portada)}" alt=""></div>`;
    if (media && !t.youtubeId && t.portadaCredito) media += `<p class="credito">${t.portadaCreditoUrl ? `<a href="${esc(t.portadaCreditoUrl)}" target="_blank" rel="noopener">${esc(t.portadaCredito)}</a>` : esc(t.portadaCredito)}</p>`;

    const parrafos = formatear(t.texto);
    const canal = ((S.enlaces || []).find((e) => e.tipo === "youtube") || {}).url;
    const aviso = !t.youtubeId && t.videoProximamente
      ? `<div class="aviso-video"><span class="aviso-etq">Vídeo</span><p>${esc(typeof t.videoProximamente === "string" ? t.videoProximamente : "Estoy preparando un vídeo sobre este tema. Aparecerá aquí en cuanto se publique.")}</p>${canal ? `<a href="${esc(canal)}" target="_blank" rel="noopener">Ir al canal de YouTube</a>` : ""}</div>` : "";
    const fotos = (t.fotos || []).length
      ? `<h3>Imágenes</h3><div class="galeria">${t.fotos.map((f) => `<a href="${esc(f)}" target="_blank" rel="noopener"><img src="${esc(f)}" alt="" loading="lazy"></a>`).join("")}</div>` : "";
    const vids = (t.videos || []).length
      ? `<h3>Vídeos relacionados</h3><div class="mini-videos">${t.videos.map((id) => `<div class="m-media">${ytBoton(id, t.titulo)}</div>`).join("")}</div>` : "";
    const links = (t.enlaces || []).length
      ? `<h3>Referencias y enlaces</h3><ul class="m-enlaces">${t.enlaces.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.texto || l.url)}</a></li>`).join("")}</ul>` : "";

    $("modalCont").innerHTML = `
      <article class="articulo" tabindex="-1">
        <div class="meta">${t.categoria ? `<span class="cat">${esc(t.categoria)}</span>` : ""}<span>${esc(fmtFecha(t.fecha))}</span>${t.texto ? `<span>${minutos(t.texto)} min de lectura</span>` : ""}</div>
        <h2>${esc(t.titulo)}</h2>
        ${t.subtitulo || t.resumen ? `<p class="entradilla">${esc(t.subtitulo || t.resumen)}</p>` : ""}
        ${media}${aviso}
        <div class="cuerpo-texto">${parrafos}</div>
        ${fotos}${vids}${links}
      </article>`;
    document.title = `${t.titulo} · ${S.nombreWeb || ""}`;
    if (!modal.open) modal.showModal();
    modal.querySelector(".articulo").focus({ preventScroll: true });
    modal.scrollTop = 0;
  };
  const cerrar = () => { if (modal.open) modal.close(); };
  modal.addEventListener("close", () => {
    document.title = S.nombreWeb || "";
    $("modalCont").innerHTML = "";
    if (location.hash.startsWith("#tema-")) history.replaceState(null, "", location.pathname + location.search + "#temas");
  });
  $("cerrar").onclick = cerrar;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrar();
    const yt = e.target.closest(".yt");
    if (yt) yt.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(yt.dataset.yt)}?autoplay=1&rel=0" title="Vídeo de YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  });
  const deHash = () => {
    const m = location.hash.match(/^#tema-(.+)$/);
    const t = m && temas.find((x) => x.id === decodeURIComponent(m[1]));
    if (t) abrir(t); else cerrar();
  };
  window.addEventListener("hashchange", deHash);
  deHash();
})();
