  /* ---------------------------------------------------------------
     DATOS DEL SITIO. Para actualizar precios, textos o fotos, edita solo este bloque.
     Las fotos viven en la carpeta assets/<destino>/ y se agregan a "galeria".
     --------------------------------------------------------------- */
  /* GOOGLE ADS / MEDICIÓN
     1. Pega aquí el ID de tu etiqueta de Google (Google Ads → Herramientas → Etiqueta de Google), p. ej. "AW-123456789".
     2. Si creas acciones de conversión en Google Ads, pega su "send_to" (p. ej. "AW-123456789/AbCdEf") en cada una.
     Mientras esté vacío, la página funciona igual y no mide nada. */
  var GOOGLE_TAG_ID = "";
  var CONVERSIONES = {
    whatsapp: "",   // clic en cualquier botón de WhatsApp
    telefono: "",   // clic en el teléfono
    boletos: ""     // clic en comprar boletos (TicketCity)
  };

  var CONTACTO = {
    whatsapp: "524772858643",       // WhatsApp de Planet Events (agente Diego)
    telefonoTexto: "477 285 8643"
  };
  var HORA_EXTRA = 750;

  var PASOS_ESCOLAR = ["Solicita una cotización.", "Comparte nombre de la escuela, fecha, número de alumnos y grado escolar.", "Agendamos tu visita.", "Realiza el anticipo para asegurar la fecha."];

  /* Precio de visitas escolares: igual en todos los destinos infantiles */
  var PRECIOS_ESCOLARES = [["Escuela pública", 50, "Maestros no pagan"], ["Escuela privada", 70, "Maestros no pagan"]];

  var DESTINOS = [
    {
      id: "gv", pagina: "/granjaventura/", logo: "assets/logos/gv-icon.jpg", banner: "assets/logos/gv-banner.jpg", bg: "rgb(6,50,53)", color: "--c-gv", nombre: "Granja Ventura", tag: "Salón de fiestas y granja didáctica",
      descripcion: "Parque temático donde niños y familias disfrutan el contacto con la naturaleza: recorridos guiados, convivencia con animales de granja, museo didáctico, huerto y actividades interactivas. Ideal para visitas escolares y convivencias. Además cuenta con un espacio para fiestas infantiles, rodeado de naturaleza y diversión.",
      capacidad: "Hasta 120 personas",
      galeria: [["assets/gv/1.jpg", "Huerto y área de juegos"], ["assets/gv/2.jpg", "Niños regando el huerto"], ["assets/gv/3.jpg", "Salón de fiestas"], ["assets/gv/4.jpg", "Recorrido con los caballos"], ["assets/gv/5.jpg", "Convivencia con los animales"], ["assets/gv/6.jpg", "Jardín con carpa, inflable y juegos"], ["assets/gv/7.jpg", "Área de conejos y gallinas"], ["assets/gv/8.jpg", "Salón de fiestas"], ["assets/gv/9.jpg", "Barra de café y snacks"], ["assets/gv/10.jpg", "Corrales techados de la granja"], ["assets/gv/11.jpg", "Salón con salida a la granja"]], galAspect: "3 / 4",                                                                // FOTOS: agregar aquí ["assets/<destino>/foto1.jpg", "descripción"]
      precios: [["Lunes a jueves", 4000], ["Viernes y domingo", 5000], ["Sábado", 6000]],   // POR CONFIRMAR: precios ajustados
      incluye: ["Valet parking", "Limpieza del espacio", "Productos y consumibles en baños", "Personal de seguridad", "Personal de atención y limpieza en baños", "Animadores y visita guiada", "Mobiliario y cuidadoras para niños", "5 horas de evento, con tiempo de montaje y desmontaje"],
      nota: "",
      direccion: "Blvd. Ibarrilla #96, atrás del Vivero Municipal, León, Guanajuato.",
      mapa: "Granja Ventura, Blvd. Ibarrilla 96, León, Guanajuato",
      visita: {
        titulo: "Visita a la granja",
        horario: "Viernes de 2:00 p.m. a 6:00 p.m. · Sábados y domingos de 9:00 a.m. a 6:00 p.m.",
        reservacion: { dias: "Lunes a jueves", texto: "Previa reservación", nota: "Agenda tu visita con anticipación" },
        entrada: { precio: 100, nota: "Acceso a la granja" },
        buffet: { dias: "Sábados y domingos, de 10:00 a.m. a 4:30 p.m.", adulto: 250, nino: 150, nota: "Incluye acceso a la granja" },
        gratis: "Menores de 3 años no pagan entrada ni buffet.",
        compra: "https://soldout.ticketcity.mx/site/elegir/evento/granjaventura-leon/foro/granja-ventura"
      },
      talleres: {
        titulo: "Talleres incluidos en tu boleto",
        lema: "¡Aprende, juega y vive la experiencia en la granja!",
        lista: [
          ["galleta", "Taller de decorar galletas de animales", "--tl-1"],
          ["semilla", "Taller de sembrar tu semilla", "--tl-2"],
          ["fomi", "Taller de animales con fomi", "--tl-3"],
          ["dibujo", "Taller de dibujo", "--tl-4"]
        ]
      },
      escolar: {
        destacados: [],
        texto: "Lleva a tu grupo escolar a vivir la granja didáctica: recorridos guiados y convivencia con los animales.",
        paquetes: PRECIOS_ESCOLARES,
        beneficios: []
      }
    },
    {
      id: "dino", apertura: true, logo: "assets/logos/dino-icon.jpg", banner: "assets/logos/dino-banner.jpg", bg: "rgb(252,243,234)", color: "--c-dino", nombre: "Dinoplaneta", tag: "Salón de fiestas infantiles",
      descripcion: "Un espacio temático de dinosaurios donde los niños viven experiencias únicas con juegos, convivencia familiar y actividades educativas. Un lugar donde aprender y divertirse van de la mano.",
      capacidad: "Hasta 70 personas",
      galeria: [],                                                                // FOTOS: agregar aquí ["assets/<destino>/foto1.jpg", "descripción"]
      precios: [["Lunes a jueves", 4000], ["Viernes y domingo", 5000], ["Sábado", 6000]],
      incluye: ["Valet parking y estacionamiento", "Limpieza del espacio", "Productos y consumibles en baños", "Personal de seguridad", "Personal de atención y limpieza en baños", "Mobiliario para 70 personas", "5 horas de evento, 1 de montaje y 1 de desmontaje"],
      nota: "",
      direccion: "Blvd. Algeciras 1402, Col. Arbide, 37360 León de los Aldama, Gto.",
      mapa: "Blvd. Algeciras 1402, Arbide, León, Guanajuato",
      escolar: {
        destacados: [["Aprender","Descubre el mundo de los dinosaurios"],["Explorar","Observa, pregunta y descubre"],["Compartir","Convive y trabaja en equipo"]],
        texto: "Además de celebrar fiestas, recibimos grupos escolares para vivir una experiencia de aprendizaje y diversión en el mundo de los dinosaurios.",
        paquetes: PRECIOS_ESCOLARES,
        beneficios: ["Aprender sobre el mundo de los dinosaurios", "Despertar la curiosidad y la imaginación", "Observar, hacer preguntas y descubrir", "Participar y colaborar en equipo", "Fortalecer la convivencia entre compañeros", "Disfrutar una experiencia fuera del aula"]
      }
    },
    {
      id: "fe", apertura: true, logo: "assets/logos/fe-icon.jpg", banner: "assets/logos/fe-banner.jpg", bg: "rgb(1,11,36)", color: "--c-fe", nombre: "Fut Experience", tag: "Museo interactivo de fútbol y salón de fiestas",
      descripcion: "Museo interactivo dedicado a la historia del fútbol, con enfoque especial en México, la Selección Mexicana y el fútbol de León. También funciona como salón de fiestas temático.",
      capacidad: "Hasta 70 personas",
      galeria: [],                                                                // FOTOS: agregar aquí ["assets/<destino>/foto1.jpg", "descripción"]
      precios: [["Lunes a jueves", 4000], ["Viernes y domingo", 5000], ["Sábado", 6000]],
      incluye: ["Valet parking y estacionamiento", "Limpieza del espacio", "Productos y consumibles en baños", "Personal de seguridad", "Personal de atención y limpieza en baños", "Mobiliario para 70 personas", "5 horas de evento, 1 de montaje y 1 de desmontaje"],
      nota: "",
      direccion: "Tancítaro 1401, San Jerónimo 1, 37204, León de los Aldama.",
      escolar: {
        destacados: [["Historia del fútbol","Un recorrido por México, la Selección y el fútbol de León"],["Aprendizaje interactivo","Aprender jugando"],["Trabajo en equipo","Colaboración y respeto"],["Valores en el deporte","Disciplina, pasión y sueños"]],
        texto: "Además de fiestas infantiles, recibimos grupos escolares: una visita de aprendizaje, diversión y pasión por el fútbol.",
        paquetes: PRECIOS_ESCOLARES,
        beneficios: ["Conecta la historia del fútbol con valores, cultura y sociedad", "Fomenta la colaboración, el respeto y la convivencia", "Historias de grandes figuras que inspiran a perseguir sueños", "Instalaciones adecuadas para recibir grupos con comodidad y seguridad"]
      }
    },
    {
      id: "jk", apertura: true, logo: "assets/logos/jk-icon.jpg", banner: "assets/logos/jk-banner.jpg", bg: "rgb(251,243,232)", color: "--c-jk", nombre: "Jungle Kids", tag: "Salón de fiestas infantiles",
      descripcion: "Un espacio divertido, seguro y diseñado para que los niños jueguen, exploren y celebren. Ideal para cumpleaños infantiles, bautizos, baby showers familiares, graduaciones de kínder, reuniones familiares y posadas infantiles.",
      capacidad: "Hasta 50 adultos",
      galeria: [],                                                                // FOTOS: agregar aquí ["assets/<destino>/foto1.jpg", "descripción"]
      precios: [["Lunes a jueves", 4000], ["Viernes y domingo", 5000], ["Sábado", 6000]],
      incluye: ["Renta del espacio por 5 horas, 1 de montaje y 1 de desmontaje", "Mobiliario para 50 personas, con montaje y acomodo", "Limpieza antes y después del evento", "Productos para baños", "1 persona encargada para apoyo y supervisión"],
      nota: "Horario límite: 10:00 PM.",
      direccion: "Pedro Moreno 243 A, Zona Centro, León de los Aldama, Gto.",
      mapa: "Pedro Moreno 243 A, Zona Centro, León, Guanajuato",
      escolar: {
        destacados: [["Descubre","La naturaleza de una forma divertida"],["Aprende","Con actividades lúdicas y educativas"],["Convive","En un ambiente seguro y adaptado para grupos escolares"],["Vive","Una experiencia única en el mundo de la selva"]],
        texto: "Además de celebrar fiestas, recibimos grupos escolares para vivir una experiencia de aprendizaje y diversión en el mundo de la selva.",
        paquetes: PRECIOS_ESCOLARES,
        beneficios: ["Aprendizaje vivencial: refuerza contenidos escolares de forma práctica", "Convivencia y trabajo en equipo", "Contacto con la naturaleza y respeto por el cuidado animal", "Una salida diferente que inspira y deja huella"]
      }
    },
    {
      id: "sm", apertura: true, logo: "assets/logos/sm-icon.jpg", banner: "assets/logos/sm-banner.jpg", bg: "rgb(252,248,237)", color: "--c-sm", nombre: "Space Museum", tag: "Próximamente",
      proximamente: true,                                                              // POR DEFINIR: descripción, capacidad, precios, qué incluye, dirección y visitas escolares
      descripcion: "Muy pronto compartiremos toda la información de este destino: precios, qué incluye y visitas escolares.",
      capacidad: "", galeria: [], precios: [], incluye: [], nota: "", direccion: null, escolar: null
    }
  ];

  /* Dibujos de línea para los talleres (se pueden cambiar por fotos reales después) */
  var ICONOS = {
    galleta: '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M40 10c6 0 8 5 14 6 6 1 10 5 9 11 0 5 5 8 5 13 0 6-6 8-8 13-2 5-1 11-7 13-5 2-9-2-14-2s-9 4-14 2c-6-2-5-8-7-13-2-5-8-7-8-13 0-5 5-8 5-13-1-6 3-10 9-11 6-1 8-6 16-6z"/><circle cx="30" cy="30" r="3"/><circle cx="50" cy="28" r="3"/><circle cx="26" cy="46" r="3"/><circle cx="42" cy="44" r="3"/><circle cx="54" cy="48" r="3"/><circle cx="38" cy="58" r="3"/></svg>',
    semilla: '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M20 46h40l-5 24H25z"/><path d="M16 46h48"/><path d="M40 46V28"/><path d="M40 34c-2-10-10-14-18-12 0 9 8 14 18 12z"/><path d="M40 28c2-9 9-13 17-11-1 9-8 13-17 11z"/></svg>',
    dibujo: '<svg viewBox="0 0 80 80" aria-hidden="true"><rect x="12" y="14" width="44" height="54" rx="4"/><path d="M20 28h28M20 38h18"/><path d="M62 20l8 8-26 26-11 3 3-11z"/><path d="M56 26l8 8"/></svg>',
    fomi: '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="42" r="24"/><path d="M20 24l-4-10 12 5M60 24l4-10-12 5"/><ellipse cx="40" cy="50" rx="11" ry="8"/><circle cx="36" cy="50" r="1.6"/><circle cx="44" cy="50" r="1.6"/><circle cx="31" cy="36" r="2.4"/><circle cx="49" cy="36" r="2.4"/></svg>'
  };

  var SERVICIOS = ["Decoración temática", "Alimentos y banquetes", "Pastel y postres", "Bebidas", "Mesas de dulces", "Piñata",
    "Animación infantil", "Fotografías", "Sonido y música", "Inflable", "Personajes temáticos", "Recuerdos para tus invitados"];

  /* --------------------------------------------------------------- */
  function money(n) { return "$" + Number(n).toLocaleString("es-MX"); }
  function wa(msg) { return "https://wa.me/" + CONTACTO.whatsapp + "?text=" + encodeURIComponent(msg); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var byId = {};
  /* Espacios para adultos (datos de grupojegar.com/terrazas) */
  var ADULTOS = [
    {
      id: "magnolia", adulto: true, color: "--c-tm", bg: "var(--c-tm)", ini: "TM", nombre: "Terraza Magnolia", tag: "Suites, salón y terraza",
      descripcion: "Un espacio versátil, acogedor y rodeado de naturaleza para celebrar tus momentos más especiales.",
      capacidad: "Hasta 70 personas",
      ideal: ["Desayunos y brunch", "Cumpleaños y eventos familiares", "Eventos sociales", "Eventos empresariales"],
      galeria: [["assets/tm/1.jpg", "Terraza Magnolia"], ["assets/tm/2.jpg", "Terraza Magnolia"], ["assets/tm/3.jpg", "Terraza Magnolia"]], galAspect: "3 / 4",
      precios: [["Lunes a jueves", 4000], ["Viernes y domingo", 4500], ["Sábados", 5000]],
      incluye: ["5 horas de evento", "1 hora de montaje", "1 hora de desmontaje", "Mobiliario para 70 personas", "Limpieza antes y después del evento", "Productos para baños", "Una persona de apoyo y supervisión"],
      nota: "Horario límite: 12:00 a.m.",
      direccion: "Pedro Moreno 243A, Zona Centro, León, Guanajuato.",
      mapa: "Pedro Moreno 243A, Zona Centro, León, Guanajuato",
      banquetes: {
        titulo: "Banquetes en Magnolia",
        lema: "Cuatro opciones de comida y cena, disponibles dentro de nuestro salón para complementar tu evento.",
        lista: [
          ["Barra de pizzas", 170, ["3 variedades de pizza", "Pasta a elegir", "Ensalada fresca", "Aderezos y complementos", "Postre sencillo"]],
          ["Taquiza mexicana", 110, ["4 guisados a elegir", "Arroz y frijoles", "Nopales preparados", "Salsas y guacamole", "Tortillas"]],
          ["Buffet Magnolia", 220, ["Pollo al gratín o pechuga en salsa", "Pasta cremosa", "Ensalada verde", "Verduras salteadas", "Postre del día"]],
          ["Premium Magnolia", 290, ["Filete de res o salmón al grill", "Ensalada mixta", "Puré de papa", "Espárragos", "Café o postre del día"]]
        ]
      }
    },
    {
      id: "mural", adulto: true, color: "--c-tmu", bg: "var(--c-tmu)", ini: "TM", nombre: "Terraza Mural", tag: "Celebra en un espacio con historia",
      descripcion: "Un ambiente único en el corazón de la ciudad, ideal para tus eventos más especiales.",
      capacidad: "Hasta 40 personas",
      ideal: ["Desayunos y brunch", "Cumpleaños y eventos familiares", "Eventos sociales", "Eventos empresariales"],
      galeria: [["assets/tmu/1.jpg", "Terraza Mural"], ["assets/tmu/2.jpg", "Terraza Mural"], ["assets/tmu/3.jpg", "Terraza Mural"], ["assets/tmu/4.jpg", "Terraza Mural"], ["assets/tmu/5.jpg", "Terraza Mural"]], galAspect: "3 / 4",
      precios: [["Sábado y domingo por la mañana", 7000], ["Domingo a jueves", 8000], ["Viernes y sábado en la noche", 10000]],
      incluye: ["5 horas de evento", "1 hora de montaje", "1 hora de desmontaje", "Mobiliario para 40 personas", "Limpieza antes y después del evento", "Productos para baños", "Una persona de apoyo y supervisión"],
      nota: "",
      direccion: "Calzada de los Héroes 211, Zona Centro, León, Guanajuato.",
      mapa: "Calzada de los Héroes 211, Zona Centro, León, Guanajuato"
    }
  ];
  DESTINOS.forEach(function (d) { byId[d.id] = d; });
  ADULTOS.forEach(function (d) { byId[d.id] = d; });

  var homeEl = document.getElementById("home");
  var detailEl = document.getElementById("detail");

  /* Tarjetas del inicio */
  var DESTINO_PAGINA = document.body.getAttribute("data-destino");
  function hrefDe(d) { return d.pagina || ("#" + d.id); }
  if (homeEl) {
  document.getElementById("dest-grid").innerHTML = DESTINOS.map(function (d) {
    var min = d.precios.length ? Math.min.apply(null, d.precios.map(function (p) { return p[1]; })) : 0;
    return '<a class="dcard" href="' + hrefDe(d) + '" style="--c:var(' + d.color + ')" aria-label="Ver ' + esc(d.nombre) + '">' +
      '<div class="pic logo" style="background:' + d.bg + '"><img src="' + d.logo + '" alt="Logo de ' + esc(d.nombre) + '" loading="lazy"></div>' +
      '<div class="in"><h3>' + esc(d.nombre) + '</h3><p class="tag">' + esc(d.tag) + '</p>' +
      '<div class="meta">' + (d.proximamente ? '<span class="chip">Próximamente</span>' : (d.apertura ? '<span class="chip">Próxima apertura</span>' : '') + '<span class="from num">Desde ' + money(min) + '</span><span class="chip">' + esc(d.capacidad.replace("Hasta ", "")) + '</span>') + '<span class="more">Ver destino →</span></div></div></a>';
  }).join("");

  /* Tarjetas para adultos */
  document.getElementById("ad-grid").innerHTML = ADULTOS.map(function (d) {
    var min = Math.min.apply(null, d.precios.map(function (p) { return p[1]; }));
    return '<a class="dcard" href="#' + d.id + '" style="--c:var(' + d.color + ')" aria-label="Ver ' + esc(d.nombre) + '">' +
      '<div class="pic"><img src="' + d.galeria[0][0] + '" alt="' + esc(d.nombre) + '" loading="lazy"></div>' +
      '<div class="in"><h3>' + esc(d.nombre) + '</h3><p class="tag">' + esc(d.tag) + '</p>' +
      '<div class="meta"><span class="from num">Desde ' + money(min) + '</span><span class="chip">' + esc(d.capacidad.replace("Hasta ", "")) + '</span><span class="more">Ver terraza →</span></div></div></a>';
  }).join("") +
    '<a class="dcard" id="ad-wa" href="#contacto" style="--c:var(--c-west)" aria-label="Salón western, próximamente">' +
      '<div class="pic west" aria-hidden="true"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="38" style="fill:var(--bg);stroke:var(--ink)" stroke-width="3"/><path d="M60 26 L67 49 L91 49 L72 63 L79 86 L60 72 L41 86 L48 63 L29 49 L53 49Z" style="fill:var(--mustard);stroke:var(--ink)" stroke-width="3" stroke-linejoin="round"/></svg></div>' +
      '<div class="in"><h3>Salón western</h3><p class="tag">Dentro de Granja Ventura. Muy pronto compartiremos capacidad, precios y fotos.</p>' +
      '<div class="meta"><span class="chip">Próximamente</span><span class="more">Avísame cuando abra →</span></div></div></a>';

  document.getElementById("svc-list").innerHTML = SERVICIOS.map(function (s) { return "<li>" + s + "</li>"; }).join("");
  document.getElementById("hx").textContent = money(HORA_EXTRA);
  document.getElementById("phone-text").textContent = CONTACTO.telefonoTexto;
  [["contact-wa", "Hola, quiero cotizar un evento con Planet Events."], ["ad-wa", "Hola, me interesa el salón western para adultos. ¿Me avisan cuando esté disponible?"]].forEach(function (x) {
    var a = document.getElementById(x[0]); a.href = wa(x[1]); a.target = "_blank"; a.rel = "noopener";
  });
  var tel = document.getElementById("phone-text"); if (tel && tel.tagName === "A") tel.href = "tel:+52" + CONTACTO.whatsapp.slice(2);
  }

  /* Página de destino */
  function renderDetail(d) {
    var c = 'style="--c:var(' + d.color + ')"';
    var prices = d.precios.map(function (p) {
      return '<div class="price-row"><span>' + p[0] + '</span><strong class="num">' + money(p[1]) + '</strong></div>';
    }).join("");
    var incl = d.incluye.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
    var thumbs = d.galeria.map(function (g, i) {
      return '<button type="button" data-i="' + i + '" aria-label="Ver foto ' + (i + 1) + ': ' + esc(g[1]) + '"' + (i === 0 ? ' aria-current="true"' : "") + '><img src="' + g[0].replace(/([^\/]+)$/, "t/$1") + '" alt="" loading="lazy" onerror="this.onerror=null;this.src=\'' + g[0] + '\'"></button>';
    }).join("");
    var gallery;
    if (d.galeria.length) {
      gallery = '<div class="main"' + (d.galAspect ? ' style="aspect-ratio:' + d.galAspect + '"' : '') + '><img id="gal-img" src="' + d.galeria[0][0] + '" alt="' + esc(d.galeria[0][1]) + '">' +
        '<button class="nav-btn prev" type="button" aria-label="Foto anterior">‹</button><button class="nav-btn next" type="button" aria-label="Foto siguiente">›</button>' +
        '<span class="count num" id="gal-count">1 / ' + d.galeria.length + '</span></div><div class="thumbs">' + thumbs + '</div>';
    } else {
      gallery = '<div class="main"><div class="ph"><span>Próximamente fotografías</span></div></div><div class="thumbs ph-row"><div class="ph"><span>Próximamente</span></div><div class="ph"><span>Próximamente</span></div><div class="ph"><span>Próximamente</span></div><div class="ph"><span>Próximamente</span></div></div>';
    }
    var escolar;
    var e = d.escolar || { destacados: [], beneficios: [], paquetes: null, texto: "" };
    var benef = (e.beneficios && e.beneficios.length) ? '<ul class="incl benefits">' + e.beneficios.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "";
    if (e.paquetes) {
      escolar = '<div class="pk">' + e.paquetes.map(function (p) {
        return '<div><p class="who">' + p[0] + '</p><p class="pr num">' + money(p[1]) + ' <small>por alumno</small></p><p class="what">' + p[2] + '</p></div>';
      }).join("") + "</div>" + benef;
    } else {
      escolar = '<div class="quote-box"><b>Cotiza tu visita escolar.</b> Escríbenos con los datos de tu grupo y te enviamos el precio por alumno.</div>' + benef;
    }
    var dest = (e.destacados && e.destacados.length) ? '<div class="pk dest">' + e.destacados.map(function (h) { return '<div><p class="pr">' + esc(h[0]) + '</p><p class="what">' + esc(h[1]) + '</p></div>'; }).join("") + '</div>' : "";
    var mapa = "";
    if (d.mapa) {
      var q = encodeURIComponent(d.mapa);
      mapa = '<section class="mapa" ' + c + '><h2>Cómo llegar</h2><p class="lema">' + esc(d.direccion || "") + '</p>' +
        '<div class="mapbox"><iframe title="Mapa de ' + esc(d.nombre) + '" src="https://www.google.com/maps?q=' + q + '&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>' +
        '<a class="btn btn-ghost" style="margin-top:14px" href="https://www.google.com/maps/search/?api=1&query=' + q + '" target="_blank" rel="noopener">Abrir en Google Maps</a></section>';
    }
    var visita = "";
    if (d.visita) {
      var v = d.visita;
      visita = '<section class="visita" ' + c + '><h2>' + esc(v.titulo) + '</h2><p class="lema">' + esc(v.horario) + '</p><div class="pk">' +
        (v.reservacion ? '<div><p class="who">' + esc(v.reservacion.dias) + '</p><p class="pr" style="font-size:24px">' + esc(v.reservacion.texto) + '</p><p class="what">' + esc(v.reservacion.nota) + '</p></div>' : "") +
        (v.entrada ? '<div><p class="who">Entrada general</p><p class="pr num">' + money(v.entrada.precio) + '</p><p class="what">' + esc(v.entrada.nota) + '</p></div>' : "") +
        '<div><p class="who">Buffet adulto</p><p class="pr num">' + money(v.buffet.adulto) + '</p><p class="what">' + esc(v.buffet.dias) + '</p></div>' +
        '<div><p class="who">Buffet niños</p><p class="pr num">' + money(v.buffet.nino) + '</p><p class="what">' + esc(v.buffet.nota) + '</p></div></div>' +
        '<p class="note">' + esc(v.gratis) + '</p>' +
        '<a class="btn btn-main" style="margin-top:16px" href="' + v.compra + '" target="_blank" rel="noopener">Comprar accesos</a></section>';
    }
    var talleres = "";
    if (d.talleres) {
      talleres = '<section class="talleres" ' + c + '><h2>' + esc(d.talleres.titulo) + '</h2><p class="lema">' + esc(d.talleres.lema) + '</p><div class="tl-grid">' +
        d.talleres.lista.map(function (t) { return '<div class="tl" style="--bgc:var(' + t[2] + ')">' + ICONOS[t[0]] + '<h3>' + esc(t[1]) + '</h3></div>'; }).join("") +
        '</div><span class="chip tl-badge">¡Ya incluido en tu boleto!</span></section>';
    }
    var how = '<p class="how"><b>Para reservar:</b> ' + PASOS_ESCOLAR.join(" ") + "</p>";
    var banq = "";
    if (d.banquetes) {
      banq = '<section class="banq" ' + c + '><h2>' + esc(d.banquetes.titulo) + '</h2><p class="lema">' + esc(d.banquetes.lema) + '</p><div class="pk">' +
        d.banquetes.lista.map(function (b) {
          return '<div><p class="who">' + esc(b[0]) + '</p><p class="pr num">' + money(b[1]) + ' <small>por persona</small></p><ul>' + b[2].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>';
        }).join("") + '</div></section>';
    }
    var head = d.adulto ? '<a class="back" href="#adultos">← Para adultos</a>'
      : '<a class="back" href="#infantiles">← Destinos infantiles</a><div class="banner"><img src="' + d.banner + '" alt="' + esc(d.nombre) + '"></div>';
    var title = '<div class="titlerow">' + (d.logo ? '<div class="lg" style="background:' + d.bg + '"><img src="' + d.logo + '" alt="Logo de ' + esc(d.nombre) + '"></div>' : '<div class="lg ini" style="background:' + d.bg + '">' + esc(d.ini || d.nombre.charAt(0)) + '</div>') + '<div><h1>' + esc(d.nombre) + '</h1><p class="tag" style="margin-top:4px">' + esc(d.tag) + '</p></div></div>';
    if (d.apertura) title += '<p class="aviso">Estamos próximos a aperturar, ¡mantente pendiente!</p>';
    if (d.proximamente) {
      return head + '<div class="detail-top" ' + c + '><div class="gal">' + gallery + '</div><div class="info">' + title +
        '<p class="desc">' + esc(d.descripcion) + '</p><div class="box"><h2>¿Te interesa?</h2><p class="note" style="margin-top:0">Escríbenos y te avisamos en cuanto tengamos fechas y precios.</p>' +
        '<a class="btn btn-main" href="' + wa("Hola, me interesa Space Museum. ¿Me avisan cuando tengan información?") + '" target="_blank" rel="noopener">Preguntar por ' + esc(d.nombre) + '</a></div></div></div><div style="height:48px"></div>';
    }
    return head +
      '<div class="detail-top" ' + c + '>' +
        '<div class="gal">' + gallery + '</div>' +
        '<div class="info">' + title +
          '<p class="desc">' + esc(d.descripcion) + '</p>' +
          (d.ideal ? '<div class="chips">' + d.ideal.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("") + '</div>' : "") +
          '<div class="chips"><span class="chip">' + esc(d.capacidad) + '</span><span class="chip">5 horas de evento</span>' + (d.nota ? '<span class="chip">' + esc(d.nota.replace(/\.$/, "")) + '</span>' : "") + '</div>' +
          '<div class="box"><h2>Renta del salón</h2>' + prices +
            (d.adulto ? '<p class="note">Anticipo del 50% de la renta para apartar; horas extra y servicios adicionales se pagan completos al apartar. Liquidación 7 días antes del evento.</p>'
              : '<p class="note">Hora extra ' + money(HORA_EXTRA) + '. Anticipo del 50% para apartar y liquidación 7 días antes del evento.</p>') +
            '<a class="btn btn-main" href="' + wa("Hola, me interesa rentar " + d.nombre + ". ¿Me pasan disponibilidad y cotización?") + '" target="_blank" rel="noopener">Cotizar ' + esc(d.nombre) + '</a></div>' +
        '</div>' +
      '</div>' +
      '<div class="detail-top two" style="padding-top:0" ' + c + '>' +
        '<div class="box" style="margin-top:0"><h2>Qué incluye la renta</h2><ul class="incl">' + incl + '</ul></div>' +
        '<div class="box where" style="margin-top:0;padding-block:20px"><h2>Dónde estamos</h2>' +
          '<p>' + (d.direccion ? esc(d.direccion) : "Pregúntanos la ubicación por WhatsApp.") + '</p>' +
          '<p class="note">Servicios adicionales como decoración, alimentos, pastel, animación y más se cotizan aparte.</p></div>' +
      '</div>' +
      visita + talleres +
      (d.adulto ? banq :
      '<section class="school" ' + c + ' id="escolar-' + d.id + '"><h2>Visitas escolares en ' + esc(d.nombre) + '</h2><p class="lead">' + esc(e.texto) + '</p>' + dest + escolar + how +
        '<a class="btn btn-main" href="' + wa("Hola, quiero cotizar una visita escolar a " + d.nombre + ". Escuela: ___ Fecha: ___ Alumnos: ___ Grado: ___") + '" target="_blank" rel="noopener">Cotizar visita escolar</a></section>') +
      mapa +
      '<div style="height:48px"></div>';
  }

  function wireGallery(d) {
    if (!d.galeria.length) return;
    var idx = 0, n = d.galeria.length;
    var img = document.getElementById("gal-img"), count = document.getElementById("gal-count");
    var thumbBtns = detailEl.querySelectorAll(".thumbs button");
    function show(i) {
      idx = (i + n) % n;
      img.src = d.galeria[idx][0]; img.alt = d.galeria[idx][1];
      count.textContent = (idx + 1) + " / " + n;
      thumbBtns.forEach(function (b, k) { b.setAttribute("aria-current", k === idx ? "true" : "false"); });
    }
    thumbBtns.forEach(function (b) { b.addEventListener("click", function () { show(Number(b.dataset.i)); }); });
    detailEl.querySelector(".prev").addEventListener("click", function () { show(idx - 1); });
    detailEl.querySelector(".next").addEventListener("click", function () { show(idx + 1); });
    if (n < 2) { detailEl.querySelectorAll(".nav-btn, .count").forEach(function (x) { x.hidden = true; }); }
  }

  /* Navegación entre inicio y destinos */
  var current = "";
  var TITULO_INICIO = document.title;
  function go(id, fromHash) {
    var d = byId[id];
    if (d && d.pagina && homeEl) { location.href = d.pagina; return; }
    if (d) {
      current = id;
      homeEl.hidden = true; detailEl.hidden = false;
      detailEl.innerHTML = renderDetail(d);
      wireGallery(d);
      if (homeEl) document.title = d.nombre + " · Planet Events";
      window.scrollTo(0, 0);
    } else {
      var wasDetail = !detailEl.hidden;
      current = id;
      if (!homeEl) { location.href = "/#" + id; return; }
      detailEl.hidden = true; homeEl.hidden = false;
      document.title = TITULO_INICIO;
      var el = id ? document.getElementById(id) : null;
      if (el) { el.scrollIntoView(); } else if (wasDetail || !fromHash) { window.scrollTo(0, 0); }
    }
    if (!fromHash) { try { if (location.hash.slice(1) !== id) location.hash = id; } catch (err) {} }
  }
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest ? ev.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (!id) return;
    if (!homeEl) return;   /* en páginas propias, los # llevan a la portada */
    ev.preventDefault();
    go(id, false);
  });
  window.addEventListener("hashchange", function () {
    var id = location.hash.slice(1);
    if (id !== current) go(id, true);
  });
  var H = location.hash.slice(1);
  if (DESTINO_PAGINA && byId[DESTINO_PAGINA]) {
    current = DESTINO_PAGINA; detailEl.hidden = false;
    detailEl.innerHTML = renderDetail(byId[DESTINO_PAGINA]); wireGallery(byId[DESTINO_PAGINA]);
  } else if (byId[H] && byId[H].pagina) {
    location.replace(byId[H].pagina);   /* enlaces viejos tipo /#gv */
  } else if (byId[H]) go(H, true);

  /* Botón flotante de WhatsApp */
  (function () {
    var d = byId[current], msg = d ? "Hola, me interesa " + d.nombre + ". ¿Me pasan disponibilidad y cotización?" : "Hola, quiero cotizar un evento con Planet Events.";
    var b = document.createElement("a");
    b.className = "wa-float"; b.href = wa(msg); b.target = "_blank"; b.rel = "noopener"; b.setAttribute("aria-label", "Escribir por WhatsApp");
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>WhatsApp';
    document.body.appendChild(b);
  })();

  /* ---------- Medición para Google Ads ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  if (GOOGLE_TAG_ID) {
    var gs = document.createElement("script"); gs.async = true;
    gs.src = "https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_TAG_ID; document.head.appendChild(gs);
    gtag("js", new Date()); gtag("config", GOOGLE_TAG_ID);
  }
  function medir(tipo, etiqueta) {
    if (!GOOGLE_TAG_ID) return;
    gtag("event", "clic_" + tipo, { destino: current || "inicio", boton: etiqueta });
    if (CONVERSIONES[tipo]) gtag("event", "conversion", { send_to: CONVERSIONES[tipo] });
  }
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest ? ev.target.closest("a[href]") : null;
    if (!a) return;
    var h = a.href, txt = (a.textContent || "").trim().slice(0, 60);
    if (h.indexOf("wa.me/") > -1) medir("whatsapp", txt);
    else if (h.indexOf("tel:") === 0) medir("telefono", txt);
    else if (h.indexOf("ticketcity") > -1) medir("boletos", txt);
  }, true);
