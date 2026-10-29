/* Intro animada del inicio: los destinos giran como planetas alrededor del planeta Planet Events.
   Para cambiar textos o destinos, edita la lista PI_DESTINOS. Las ilustraciones viven en assets/intro/. */
(function () {
  var box = document.getElementById("pintro");
  if (!box) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { box.remove(); return; }

  var PI_DESTINOS = [
    { id: "gv", n: "Granja Ventura", t: "Salón de fiestas y granja didáctica", k: "Planeta granja" },
    { id: "dino", n: "Dinoplaneta", t: "Salón de fiestas infantiles con dinosaurios", k: "Planeta jurásico" },
    { id: "fe", n: "Fut Experience", t: "Museo interactivo de fútbol y salón de fiestas", k: "Planeta fútbol" },
    { id: "jk", n: "Jungle Kids", t: "Salón de fiestas infantiles en la selva", k: "Planeta selva" },
    { id: "sm", n: "Space Museum", t: "Próximamente", k: "Planeta espacial" }
  ];
  var D = PI_DESTINOS, A = "/assets/intro/";
  // estrellas en posiciones fijas: [izquierda %, arriba %, ancho px]
  var SP = [[8,30,34],[22,14,22],[36,80,26],[47,8,30],[58,88,20],[72,18,24],[84,40,30],[93,64,22],[15,62,20],[30,46,18],[66,70,18],[90,12,26],[4,88,24],[52,58,16]];

  box.innerHTML =
    '<div class="pi-stage">' +
      '<div class="pi-stars">' + SP.map(function (s, i) {
        return '<img src="' + A + 'estrella' + (i % 6 + 1) + '.webp" alt="" style="left:' + s[0] + '%;top:' + s[1] + '%;width:' + s[2] + 'px;animation-delay:' + (i * 0.37 % 2.8).toFixed(2) + 's">';
      }).join("") + '</div>' +
      '<img class="pi-deco pi-luna" src="' + A + 'luna.webp" alt="">' +
      '<img class="pi-deco pi-saturno" src="' + A + 'saturno.webp" alt="">' +
      '<img class="pi-deco pi-astro" src="' + A + 'astronauta.webp" alt="">' +
      '<div class="pi-sys"><div class="pi-orbit"></div>' +
        '<div class="pi-sun"><img src="' + A + 'planeta.webp" alt="Planeta ilustrado con granja, dinosaurios, fútbol, selva y espacio"><div class="pi-badge"><img src="/assets/logo.png" alt=""></div></div>' +
        D.map(function (d) { return '<a class="pi-pl" href="#' + d.id + '" aria-label="' + d.n + '"><img src="/assets/logos/' + d.id + '-icon.jpg" alt=""></a>'; }).join("") +
        '<img class="pi-rocket" src="' + A + 'cohete.webp" alt="">' +
      '</div>' +
      '<div class="pi-head">' +
        '<span class="pi-logo"><img src="/assets/logo.png" alt="Planet Events"></span>' +
        '<p class="pi-title pi-fade" style="animation-delay:2.2s">Cada celebración tiene su propio planeta.</p>' +
        '<p class="pi-hint pi-fade" style="animation-delay:2.7s">Desliza para viajar<span aria-hidden="true">↓</span></p>' +
      '</div>' +
      D.map(function (d) {
        return '<div class="pi-card"><div class="row"><div class="lg"><img src="/assets/logos/' + d.id + '-icon.jpg" alt=""></div><div><p class="k">' + d.k + '</p><h2>' + d.n + '</h2></div></div>' +
          '<p class="t">' + d.t + '</p><a class="btn btn-main" href="#' + d.id + '">Ver destino</a></div>';
      }).join("") +
      '<div class="pi-dots" aria-hidden="true">' + D.map(function (_, i) { return (i ? "<b></b>" : "") + "<i></i>"; }).join("") + '</div>' +
      '<a class="pi-skip" href="#inicio">Saltar intro ↓</a>' +
    '</div>';

  var q = function (s) { return box.querySelector(s); }, qa = function (s) { return box.querySelectorAll(s); };
  var sys = q(".pi-sys"), orbit = q(".pi-orbit"), sun = q(".pi-sun"), sunimg = q(".pi-sun > img"), head = q(".pi-head"),
      rk = q(".pi-rocket"), luna = q(".pi-luna"), sat = q(".pi-saturno"), astro = q(".pi-astro"),
      pls = qa(".pi-pl"), cards = qa(".pi-card"), dots = qa(".pi-dots i"), header = document.querySelector("header.top");

  function setHeader() { document.documentElement.style.setProperty("--hh", (header ? header.offsetHeight : 0) + "px"); }
  var ticking = false;
  function frame() {
    ticking = false;
    if (!box.offsetParent) return;                          // oculto (página de un destino)
    var r = box.getBoundingClientRect(), stH = box.firstChild.offsetHeight, tot = box.offsetHeight - stH;
    var hh = header ? header.offsetHeight : 0;
    var p = Math.min(1, Math.max(0, (hh - r.top) / tot));
    if (r.bottom < 0 || r.top > innerHeight) return;
    var mob = innerWidth < 760, W = innerWidth, H = stH;
    var intro = Math.min(1, p / 0.1);
    var tour = Math.min(1, Math.max(0, (p - 0.1) / 0.85));
    var idx = tour * (D.length - 1), base = Math.floor(idx), fr = idx - base;
    var sm = fr < .5 ? 0 : (fr - .5) * 2; sm = sm * sm * (3 - 2 * sm);
    var pos = Math.min(D.length - 1, base + sm);
    var Rx = (mob ? W * 0.42 : Math.min(W * 0.29, 400)) * (0.55 + 0.45 * intro), Ry = Rx * 0.36;
    var sunS = mob ? Math.min(W * 0.56, H * 0.34, 240) : Math.min(H * 0.48, 340) * (1.3 - 0.3 * intro);
    sys.style.setProperty("--sun", sunS + "px");
    sunimg.style.transform = "rotate(" + (p * 50) + "deg)";
    orbit.style.width = 2 * Rx + "px"; orbit.style.height = 2 * Ry + "px"; orbit.style.margin = (-Ry) + "px 0 0 " + (-Rx) + "px"; orbit.style.opacity = .45 * intro;
    var front = 0, best = -9;
    pls.forEach(function (el, j) {
      var th = (j - pos) / D.length * Math.PI * 2, depth = Math.cos(th);
      var sc = (0.45 + 0.75 * (depth + 1) / 2) * (depth > .97 ? 1.25 : 1);
      el.style.transform = "translate(" + Math.sin(th) * Rx + "px," + (depth * Ry + (mob ? 10 : 20)) + "px) scale(" + sc * intro + ")";
      el.style.zIndex = depth < 0 ? 5 : 20;
      el.style.opacity = intro;
      el.tabIndex = intro > .5 ? 0 : -1;
      if (depth > best) { best = depth; front = j; }
    });
    var ra = p * Math.PI * 7, ax = Rx + 34, ay = Ry + 34;
    var dir = Math.atan2(-Math.sin(ra) * ay, Math.cos(ra) * ax) * 180 / Math.PI;
    rk.style.transform = "translate(" + Math.sin(ra) * ax + "px," + (Math.cos(ra) * ay - 10) + "px) rotate(" + (dir + 45) + "deg)";
    rk.style.opacity = intro; rk.style.zIndex = Math.cos(ra) < 0 ? 4 : 30;
    luna.style.transform = "translateY(" + (Math.sin(p * 9) * 8 - p * 30) + "px) rotate(" + (p * -20) + "deg)";
    sat.style.transform = "translateY(" + (Math.cos(p * 8) * 10 + p * 20) + "px) rotate(" + (p * 25) + "deg)";
    var axp = (mob ? 0.95 : 0.92) - p * 0.85;
    var ay0 = mob ? 0.5 : 0.1;                              // en celular cruza por el hueco bajo el planeta
    astro.style.transform = "translate(" + (axp * W - astro.offsetWidth / 2) + "px," + (ay0 * H + Math.sin(p * 14) * 14) + "px) rotate(" + (-12 + p * 70) + "deg)";
    astro.style.opacity = mob ? intro : 1;
    head.style.opacity = Math.max(0, 1 - p / 0.06);
    head.style.visibility = p > 0.07 ? "hidden" : "visible";
    cards.forEach(function (c, j) { c.classList.toggle("on", p > 0.09 && p < 0.999 && j === front && sm < .04); });
    dots.forEach(function (d, j) { d.classList.toggle("on", j === front && p > 0.09); });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  addEventListener("scroll", req, { passive: true });
  addEventListener("resize", function () { setHeader(); req(); });
  addEventListener("hashchange", function () { setTimeout(function () { setHeader(); req(); }, 50); });
  setHeader(); frame();
  // se vuelve a calcular cuando cargan las imágenes/fuentes
  addEventListener("load", function () { setHeader(); req(); });
})();
