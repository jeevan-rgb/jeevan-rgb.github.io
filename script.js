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
  const pintarTemas = () => {
    const lista = temas.filter((t) => filtro === "Todos" || t.categoria === filtro);
    $("rejilla").innerHTML = lista.length ? lista.map((t, i) => {
      const nF = (t.fotos || []).length, nV = (t.videos || []).length + (t.youtubeId ? 1 : 0);
      const extras = [nV && `${nV} vídeo${nV > 1 ? "s" : ""}`, nF && `${nF} ${nF > 1 ? "imágenes" : "imagen"}`].filter(Boolean).join(" · ");
      return `
        <button class="tarjeta${i === 0 && filtro === "Todos" && lista.length > 2 ? " destacada" : ""}" data-id="${t.id}">
          ${portada(t)}
          <div class="info">
            ${meta(t)}
            <h3>${esc(t.titulo)}</h3>
            <p>${esc(t.resumen)}</p>
            ${extras ? `<span class="extras">${extras}</span>` : ""}
          </div>
        </button>`;
    }).join("") : `<p class="vacio">No hay temas en esta categoría.</p>`;
  };
  $("filtros").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-c]");
    if (!b) return;
    filtro = b.dataset.c; pintarFiltros(); pintarTemas();
  });
  $("rejilla").addEventListener("click", (e) => {
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

    const parrafos = String(t.texto || "").split(/\n\s*\n/).filter((p) => p.trim()).map((p) => `<p>${esc(p.trim())}</p>`).join("");
    const fotos = (t.fotos || []).length
      ? `<h3>Imágenes</h3><div class="galeria">${t.fotos.map((f) => `<a href="${esc(f)}" target="_blank" rel="noopener"><img src="${esc(f)}" alt="" loading="lazy"></a>`).join("")}</div>` : "";
    const vids = (t.videos || []).length
      ? `<h3>Vídeos relacionados</h3><div class="mini-videos">${t.videos.map((id) => `<div class="m-media">${ytBoton(id, t.titulo)}</div>`).join("")}</div>` : "";
    const links = (t.enlaces || []).length
      ? `<h3>Referencias y enlaces</h3><ul class="m-enlaces">${t.enlaces.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.texto || l.url)}</a></li>`).join("")}</ul>` : "";

    $("modalCont").innerHTML = `
      <article class="articulo">
        ${meta(t)}
        <h2>${esc(t.titulo)}</h2>
        ${t.resumen ? `<p class="entradilla">${esc(t.resumen)}</p>` : ""}
        ${media}
        <div class="cuerpo-texto">${parrafos}</div>
        ${fotos}${vids}${links}
      </article>`;
    document.title = `${t.titulo} · ${S.nombreWeb || ""}`;
    if (!modal.open) modal.showModal();
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
