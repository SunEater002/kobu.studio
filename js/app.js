/* ---------- Dibujo de prendas y estampados (no necesitas editar esto) ---------- */
const ARTE = {
  sol:     () => `<circle r="30" fill="#5B7CFA"/><circle r="22" fill="#D2FF1E"/><circle r="14" fill="#5B7CFA"/><circle r="6" fill="#fff"/>`,
  estrella:() => { let p=[]; for(let i=0;i<10;i++){const r=i%2?12:30,a=Math.PI/5*i-Math.PI/2;p.push((Math.cos(a)*r).toFixed(1)+","+(Math.sin(a)*r).toFixed(1));} return `<polygon points="${p.join(" ")}" fill="#D2FF1E" stroke="#5B7CFA" stroke-width="3" stroke-linejoin="round"/>`; },
  texto:   () => `<g font-family="Fraunces, Georgia, serif" font-weight="900" font-size="17" text-anchor="middle"><text x="1.5" y="7.5" fill="#D2FF1E" textLength="58" lengthAdjust="spacingAndGlyphs">TU LOGO</text><text x="-1" y="6" fill="#5B7CFA" textLength="58" lengthAdjust="spacingAndGlyphs">TU LOGO</text></g>`,
  rayas:   () => `<g transform="rotate(-20)"><rect x="-32" y="-20" width="64" height="12" rx="6" fill="#5B7CFA"/><rect x="-32" y="-6" width="64" height="12" rx="6" fill="#D2FF1E"/><rect x="-32" y="8" width="64" height="12" rx="6" fill="#ffffff"/></g>`
};
const ARTES = [["sol","Círculos"],["estrella","Estrella"],["texto","Texto"],["rayas","Rayas"]];

const PRENDA_SVG = {
  playera:  { cuerpo: `<path d="M70 20 L40 30 L10 62 L35 85 L50 72 L50 180 L150 180 L150 72 L165 85 L190 62 L160 30 L130 20 Q100 45 70 20 Z"/>`, extra:`<path d="M70 20 Q100 45 130 20" fill="none" stroke-opacity=".25"/>`, x:100, y:96, s:1 },
  sudadera: { cuerpo: `<path d="M68 38 L32 52 L10 158 L40 163 L52 108 L52 184 L148 184 L148 108 L160 163 L190 158 L168 52 L132 38 Q100 58 68 38 Z"/><path d="M68 38 Q72 6 100 6 Q128 6 132 38 Q100 62 68 38 Z"/>`, extra:`<path d="M80 34 Q100 52 120 34 Q116 16 100 16 Q84 16 80 34Z" fill="#000" fill-opacity=".28" stroke="none"/><path d="M70 150 L130 150 L138 174 L62 174 Z" fill="none" stroke-opacity=".3"/>`, x:100, y:92, s:1 },
  gorra:    { cuerpo: `<path d="M38 118 Q38 46 100 46 Q162 46 162 118 Z"/><path d="M26 120 Q100 98 174 120 Q180 140 150 142 Q100 126 50 142 Q20 140 26 120 Z"/>`, extra:`<circle cx="100" cy="47" r="4"/><path d="M100 50 L100 108" fill="none" stroke-opacity=".2"/>`, x:100, y:80, s:.55 }
};
function prendaDe(id){ return PRENDA_SVG[id] || PRENDA_SVG.playera; }
function dibujo(prenda, color, arte, cls){
  const p = prendaDe(prenda);
  return `<svg class="${cls||""}" viewBox="0 0 200 200" role="img" aria-label="Vista previa de ${prenda} con estampado">
    <g fill="${color}" stroke="currentColor" stroke-opacity=".4" stroke-width="2" stroke-linejoin="round">${p.cuerpo}${p.extra}</g>
    <g transform="translate(${p.x} ${p.y}) scale(${p.s})">${(ARTE[arte]||ARTE.sol)()}</g>
  </svg>`;
}

/* ---------- Utilidades ---------- */
const $ = (id) => document.getElementById(id);
const money = (n) => "$" + Math.round(n).toLocaleString("es-MX");
const waBase = "https://wa.me/" + CONFIG.whatsapp;
const waLink = (txt) => waBase + (txt ? "?text=" + encodeURIComponent(txt) : "");

/* ---------- Textos generales ---------- */
document.querySelectorAll("[data-brand]").forEach(e => e.textContent = CONFIG.marca);
document.title = CONFIG.marca + " | Playeras, sudaderas y gorras personalizadas";
document.querySelectorAll("[data-wa-link]").forEach(a => a.href = waLink("Hola " + CONFIG.marca + ", quiero información."));
$("hero-titulo").textContent = CONFIG.hero.titulo;
$("hero-texto").textContent = CONFIG.hero.texto;
$("stage-note").textContent = CONFIG.hero.nota;
$("servicios-intro").textContent = CONFIG.serviciosIntro;
$("contacto-texto").textContent = CONFIG.contactoTexto;
$("anio").textContent = new Date().getFullYear();
const TICK = `<svg viewBox="0 0 22 22" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="#D2FF1E"/><path d="M6 11.5l3.4 3.3L16 7.8" fill="none" stroke="#111113" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
$("ventajas").innerHTML = CONFIG.ventajas.map(v => `<li>${TICK}<span>${v}</span></li>`).join("");

/* ---------- Servicios y pasos ---------- */
$("servicios-lista").innerHTML = CONFIG.servicios.map(s => `<div class="row"><h3>${s.nombre}</h3><p>${s.texto}</p></div>`).join("");
$("pasos").innerHTML = CONFIG.pasos.map((p,i) => `<div class="step"><b>${i+1}</b><h3>${p.titulo}</h3><p>${p.texto}</p></div>`).join("");

/* ---------- Tabla de precios ---------- */
$("tabla").innerHTML =
  `<caption>Precio por pieza en MXN, según cantidad</caption>
   <thead><tr><th scope="col">Prenda</th>${CONFIG.rangos.map(r=>`<th scope="col">${r.etiqueta}</th>`).join("")}</tr></thead>
   <tbody>${CONFIG.prendas.map(p=>`<tr><th scope="row">${p.nombre}</th>${p.precios.map(x=> x==null ? `<td class="ask">Cotiza por WhatsApp</td>` : `<td>${money(x)}</td>`).join("")}</tr>`).join("")}</tbody>`;
$("notas-precio").innerHTML = CONFIG.notasPrecio.map(n => `<p>${n}</p>`).join("");

/* ---------- Simulador del hero ---------- */
const COLORES = [["#FFFFFF","Blanco"],["#14172A","Negro"],["#6B7280","Gris"],["#B91C1C","Rojo"],["#1E3A8A","Azul marino"],["#0F766E","Verde"],["#E8D8B9","Arena"]];
const sim = { prenda: "playera", color: "#14172A", arte: "sol" };
function pintarSim(){
  $("mock").innerHTML = dibujo(sim.prenda, sim.color, sim.arte, "mock");
  $("c-prenda").innerHTML = [["playera","Playera"],["sudadera","Sudadera"],["gorra","Gorra"]].map(([id,n])=>`<button type="button" class="chip" data-k="prenda" data-v="${id}" aria-pressed="${sim.prenda===id}">${n}</button>`).join("");
  $("c-color").innerHTML = COLORES.map(([c,n])=>`<button type="button" class="sw" data-k="color" data-v="${c}" aria-label="${n}" title="${n}" style="background:${c}" aria-pressed="${sim.color===c}"></button>`).join("");
  $("c-arte").innerHTML = ARTES.map(([id,n])=>`<button type="button" class="chip" data-k="arte" data-v="${id}" aria-pressed="${sim.arte===id}">${n}</button>`).join("");
}
$("mock").parentElement.addEventListener("click", e => {
  const b = e.target.closest("button[data-k]"); if(!b) return;
  sim[b.dataset.k] = b.dataset.v; pintarSim();
});
pintarSim();

/* ---------- Cotizador ---------- */
$("q-prenda").innerHTML = CONFIG.prendas.map(p=>`<option value="${p.id}">${p.nombre}</option>`).join("");

function calcular(){
  const prenda = CONFIG.prendas.find(p => p.id === $("q-prenda").value) || CONFIG.prendas[0];
  const cant = Math.max(1, parseInt($("q-cant").value, 10) || 1);
  let idx = 0; CONFIG.rangos.forEach((r,i)=>{ if(cant >= r.min) idx = i; });
  const pieza = prenda.precios[idx];
  return { prenda, cant, rango: CONFIG.rangos[idx].etiqueta, pieza, total: pieza == null ? null : pieza * cant };
}
function pintarCotizacion(){
  const c = calcular();
  const sinPrecio = c.pieza == null;
  $("s-pieza").textContent = sinPrecio ? "A cotizar" : money(c.pieza);
  $("s-unidad").textContent = sinPrecio ? "" : "por pieza";
  $("s-rango").textContent = c.rango;
  $("s-total").textContent = sinPrecio ? "Te lo confirmamos" : money(c.total);
  const v = (id) => $(id).value.trim();
  const lineas = [
    "Hola " + CONFIG.marca + ", quiero cotizar un pedido:",
    "Nombre: " + (v("q-nombre") || "sin indicar"),
    "Prenda: " + c.prenda.nombre,
    "Cantidad: " + c.cant + " piezas"
  ];
  if (v("q-tallas")) lineas.push("Tallas: " + v("q-tallas"));
  if (v("q-color")) lineas.push("Color de prenda: " + v("q-color"));
  if (v("q-fecha")) lineas.push("Fecha requerida: " + v("q-fecha"));
  if (v("q-notas")) lineas.push("Detalles: " + v("q-notas"));
  lineas.push(sinPrecio ? "Quiero que me confirmen el precio de mayoreo." : "Precio de la página: " + money(c.pieza) + " por pieza, " + money(c.total) + " en total.");
  $("q-enviar").href = waLink(lineas.join("\n"));
}
["q-nombre","q-prenda","q-cant","q-tallas","q-color","q-fecha","q-notas"].forEach(id => {
  $(id).addEventListener("input", pintarCotizacion);
  $(id).addEventListener("change", pintarCotizacion);
});
pintarCotizacion();

/* ---------- Galería de trabajos ---------- */
let filtro = "Todos";
function pintarGaleria(){
  const cats = ["Todos", ...new Set(CONFIG.trabajos.map(t => t.categoria))];
  $("filtros").innerHTML = cats.length > 3 || cats.length === 3
    ? cats.map(c=>`<button type="button" class="chip" data-cat="${c}" aria-pressed="${filtro===c}">${c}</button>`).join("")
    : "";
  const lista = CONFIG.trabajos.filter(t => filtro === "Todos" || t.categoria === filtro);
  $("galeria").innerHTML = lista.length ? lista.map(t => {
    const i = CONFIG.trabajos.indexOf(t);
    const imgs = t.imagenes || (t.imagen ? [t.imagen] : []);
    return `<article class="work"><figure>
      <div class="tile">${imgs.length ? `<img src="${imgs[0]}" alt="${t.titulo}" loading="lazy" data-tile="${i}">` : dibujo(t.prenda, t.color, t.arte)}</div>
      ${imgs.length > 1 ? `<div class="thumbs">${imgs.map((s,n)=>`<button type="button" data-w="${i}" data-n="${n}" aria-label="Ver imagen ${n+1} de ${t.titulo}" aria-pressed="${n===0}"><img src="${s}" alt=""></button>`).join("")}</div>` : ""}
      <figcaption><h3>${t.titulo}</h3><p>${t.descripcion || ""}</p></figcaption>
    </figure></article>`;
  }).join("") : `<p class="empty">Aún no hay trabajos en esta categoría.</p>`;
}
$("galeria").addEventListener("click", e => {
  const b = e.target.closest("button[data-w]"); if(!b) return;
  const t = CONFIG.trabajos[+b.dataset.w];
  const imgs = t.imagenes || [];
  const tile = document.querySelector('img[data-tile="' + b.dataset.w + '"]');
  if (tile && imgs[+b.dataset.n]) tile.src = imgs[+b.dataset.n];
  b.parentElement.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
});
$("filtros").addEventListener("click", e => {
  const b = e.target.closest("button[data-cat]"); if(!b) return;
  filtro = b.dataset.cat; pintarGaleria();
});
pintarGaleria();

/* ---------- Contacto ---------- */
const filas = [
  `<a class="crow" href="${waLink("Hola " + CONFIG.marca + ", quiero información.")}" target="_blank" rel="noopener"><span>WhatsApp</span><b>${CONFIG.telefonoVisible}</b></a>`,
  CONFIG.email ? `<a class="crow" href="mailto:${CONFIG.email}"><span>Correo</span><b>${CONFIG.email}</b></a>` : "",
  CONFIG.instagram ? `<a class="crow" href="https://instagram.com/${CONFIG.instagram}" target="_blank" rel="noopener"><span>Instagram</span><b>@${CONFIG.instagram}</b></a>` : "",
  CONFIG.horario ? `<div><span>Horario</span><b>${CONFIG.horario}</b></div>` : "",
  CONFIG.ubicacion ? `<div><span>Ubicación</span><b>${CONFIG.ubicacion}</b></div>` : ""
];
$("contacto-lista").innerHTML = filas.join("");
