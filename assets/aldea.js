(function () {
  // Se deja de mostrar solo al terminar el 6 de enero de 2027 (hora de León)
  if (new Date() >= new Date("2027-01-07T00:00:00-06:00")) return;
  var KEY = "aldea-2026-visto";
  var enGranja = location.pathname.indexOf("/granjaventura") === 0;
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}
  var wa = "https://wa.me/524772858643?text=" + encodeURIComponent("Hola, quiero reservar un recorrido en La Aldea Navideña de Granja Ventura.");
  var pine = function (x, y, s) { return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 -60 L-16 -34 L-8 -34 L-24 -10 L-12 -10 L-30 16 L30 16 L12 -10 L24 -10 L8 -34 L16 -34 Z" fill="#3E5C4B"/><path d="M0 -60 L-7 -48 L7 -48 Z M-16 -34 L-4 -38 L6 -34 L16 -34 M-24 -10 L-6 -14 L10 -10 L24 -10 M-30 16 L-8 11 L12 16 L30 16" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><rect x="-5" y="16" width="10" height="12" fill="#6B4A2F"/></g>'; };
  var house = function (x, w, h, c) { return '<g transform="translate(' + x + ' 0)"><rect x="0" y="' + (200 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><path d="M-8 ' + (204 - h) + ' L' + (w / 2) + ' ' + (166 - h) + ' L' + (w + 8) + ' ' + (204 - h) + ' Z" fill="#fff"/><rect x="' + (w / 2 - 9) + '" y="' + (200 - h + 22) + '" width="18" height="18" rx="3" fill="#F6C65B"/><path d="M' + (w / 2) + ' ' + (222 - h) + ' v18 M' + (w / 2 - 9) + ' ' + (231 - h) + ' h18" stroke="#1C1814" stroke-width="1.5"/><rect x="' + (w / 2 - 8) + '" y="' + (176) + '" width="16" height="24" rx="8" fill="#1C1814" opacity=".85"/></g>'; };
  var svg = '<svg viewBox="0 0 480 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
    '<circle cx="410" cy="42" r="18" fill="#F8F4EB"/><circle cx="418" cy="36" r="16" fill="#2F4A3D"/>' +
    pine(40, 168, 1.05) + pine(95, 178, .8) + house(130, 70, 72, "#B23A2E") + house(220, 84, 96, "#E2AE3A") +
    '<g transform="translate(262 92)"><path d="M0 -14 L4 -4 L14 -4 L6 2 L9 12 L0 6 L-9 12 L-6 2 L-14 -4 L-4 -4 Z" fill="#F6C65B" stroke="#1C1814" stroke-width="1.2"/></g>' +
    house(322, 62, 64, "#5F7C8F") + pine(420, 174, .95) +
    '<path d="M0 200 Q120 186 240 198 T480 194 V220 H0 Z" fill="#F8F4EB" stroke="#1C1814" stroke-width="1.5"/>' +
    '<path d="M150 128 q30 14 60 0 q40 16 78 0 q30 14 60 2" fill="none" stroke="#1C1814" stroke-width="1.2"/>' +
    [158, 178, 198, 228, 252, 276, 300, 322, 342].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (132 + (i % 2) * 3) + '" r="3.2" fill="' + ["#F6C65B", "#B23A2E", "#F8F4EB"][i % 3] + '" stroke="#1C1814" stroke-width=".8"/>'; }).join("") +
    '</svg>';
  var ov = document.createElement("div");
  ov.className = "aldea-ov";
  ov.innerHTML = '<canvas aria-hidden="true"></canvas><div class="aldea" role="dialog" aria-modal="true" aria-labelledby="aldea-t">' +
    '<div class="scene"><canvas aria-hidden="true"></canvas>' + svg + '<button class="x" type="button" aria-label="Cerrar">×</button></div>' +
    '<div class="body"><span class="kicker">✦ ¡Llega a León! ✦</span>' +
    '<h2 id="aldea-t" class="al-sr">¡Llega La Aldea Navideña!</h2><img class="al-logo" src="/assets/aldea-logo.jpg" alt="La Aldea Navideña" width="640" height="572">' +
    '<p class="al-where">Este año, ahora en <b>Granja Ventura</b> · León, Gto.</p>' +
    '<div class="facts"><div><small>Fechas</small><strong>30 nov – 6 ene</strong></div><div><small>Horario</small><strong>L a V · 9 a 2</strong></div><div><small>Entrada</small><strong class="num">$100</strong></div></div>' +
    '<p class="incl">Recorridos escolares · Shows con duendes · Santa y los Reyes Magos</p>' +
    '<p class="promo"><b>Grupos:</b> pagan 9 y entran 10</p>' +
    '<div class="acts"><a class="main" href="' + wa + '" target="_blank" rel="noopener">Reservar recorrido</a>' + (enGranja ? '<a class="sec" href="#" data-close>Ver la granja</a>' : '<a class="sec" href="/granjaventura/">Ver Granja Ventura</a>') + '</div>' +
    '<button class="later" type="button">Ahora no, gracias</button></div></div>';
  function close() { ov.classList.remove("on"); try { sessionStorage.setItem(KEY, "1"); } catch (e) {} setTimeout(function () { ov.remove(); }, 350); stop = true; }
  var stop = false;
  function snow(cv, n, big) {
    var ctx = cv.getContext("2d"), f = [], W, H, dpr = Math.min(2, window.devicePixelRatio || 1);
    function size() { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size(); window.addEventListener("resize", size);
    for (var i = 0; i < n; i++) f.push({ x: Math.random() * W, y: Math.random() * H, r: (big ? 1.5 : 1) + Math.random() * (big ? 3 : 2.2), s: .4 + Math.random() * 1.1, d: Math.random() * 6.28 });
    (function tick() {
      if (stop) return;
      ctx.clearRect(0, 0, W, H); ctx.fillStyle = "rgba(255,255,255,.9)";
      f.forEach(function (p) { p.y += p.s; p.d += .012; p.x += Math.sin(p.d) * .5; if (p.y > H + 5) { p.y = -5; p.x = Math.random() * W; } ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill(); });
      requestAnimationFrame(tick);
    })();
  }
  function open() {
    document.body.appendChild(ov);
    var cvs = ov.querySelectorAll("canvas");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { snow(cvs[0], 120, true); snow(cvs[1], 60, false); }
    requestAnimationFrame(function () { ov.classList.add("on"); });
    ov.querySelector(".x").addEventListener("click", close);
    ov.querySelector(".later").addEventListener("click", close);
    var dc = ov.querySelector("[data-close]"); if (dc) dc.addEventListener("click", function (e) { e.preventDefault(); close(); });
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }
  setTimeout(open, 1500);
})();
