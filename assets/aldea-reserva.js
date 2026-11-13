/* ==========================================================================
   FORMULARIO DE RESERVACIÓN · LA ALDEA NAVIDEÑA
   Página: /aldea-navidena-recorridos/#reservar
   Cada envío entra al CRM de Planet Events como prospecto (función aldea_reservar_web,
   archivo supabase/aldea_reservaciones_web.sql del repo planet-events-crm) y se le
   asigna a la responsable de la Aldea, que recibe su aviso por WhatsApp.
   Si la base no contesta, el formulario abre un correo a ventas@ con los datos.
   Ligas directas: /aldea-navidena-recorridos/?tipo=publico#reservar  (o #reservar-publico)
   ========================================================================== */
(function () {
  "use strict";

  var SUPABASE_URL = "https://ixkulonffrzctjgrgrat.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_r_py2xBFU1N-F2gd-A2VUQ_Vi92GU3s"; // llave pública (publishable) del proyecto del CRM de Planet
  var CONVERSION = "AW-18533987435/uZHmCNeQ07QdEOvo2IVF"; // Google Ads: "Planet – Mensaje"
  var CORREO = "ventas@planeteventsleon.com";

  var sec = document.getElementById("reservar");
  var form = document.getElementById("rf");
  var ok = document.getElementById("rf-ok");
  if (!sec || !form) return;

  var hoy = new Date();
  var preventa = hoy < new Date("2026-11-28T00:00:00-06:00");
  var tipo = "escuela";
  var $ = function (n) { return form.elements[n]; };
  var est = form.querySelector(".est"), err = form.querySelector(".err"), btn = form.querySelector(".rf-send");
  var fmt = function (n) { return "$" + n.toLocaleString("es-MX"); };

  // La fecha mínima es hoy (si ya empezó la temporada)
  var iso = function (d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  if (iso(hoy) > "2026-11-27") $("fecha").min = iso(hoy);

  function setTipo(t, enfocar) {
    tipo = t;
    sec.querySelectorAll("[data-solo]").forEach(function (el) { el.hidden = el.getAttribute("data-solo") !== t; });
    form.querySelectorAll(".seg button").forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-tipo") === t)); });
    $("escuela").required = t === "escuela";
    $("ninos").min = t === "escuela" ? "1" : "0";
    sec.querySelectorAll(".pre-txt").forEach(function (el) { el.hidden = !(preventa && t === "publico"); });
    btn.textContent = t === "escuela" ? "Enviar reservación de la escuela" : "Enviar reservación";
    limpiarError();
    revisarFecha(false);
    estimar();
    if (enfocar) (t === "escuela" ? $("escuela") : $("nombre")).focus({ preventScroll: true });
  }

  function num(n) { var v = parseInt($(n).value, 10); return isNaN(v) || v < 0 ? 0 : v; }

  function estimar() {
    var n = num("ninos"), a = num("adultos"), txt = "";
    if (tipo === "escuela") {
      if (n > 0) {
        var pagan = n - Math.floor(n / 10);
        txt = "<b>Total estimado: " + fmt(pagan * 100) + "</b> · " + n + " alumnos, pagan " + pagan + ".";
      }
    } else if (n + a > 0) {
      txt = preventa
        ? "<b>Total estimado en preventa: " + fmt((n + a) * 100) + "</b> · " + (n + a) + " personas a $100."
        : "<b>Total estimado: " + fmt(n * 200 + a * 100) + "</b> · " + n + " niños a $200 y " + a + " adultos a $100.";
    }
    est.innerHTML = txt ? txt + " Te confirmamos el total." : "";
  }

  // Escuelas: lunes a viernes · Público: jueves a domingo
  function revisarFecha(mostrar) {
    var v = $("fecha").value;
    if (!v) { $("fecha").removeAttribute("aria-invalid"); return ""; }
    var d = new Date(v + "T12:00:00"), dia = d.getDay(); // 0 domingo … 6 sábado
    var msg = "";
    if (v < "2026-11-27" || v > "2027-01-06") msg = "La Aldea abre del 27 de noviembre al 6 de enero.";
    else if (v < iso(hoy)) msg = "Esa fecha ya pasó.";
    else if (tipo === "escuela" && (dia === 0 || dia === 6)) msg = "Los recorridos escolares son de lunes a viernes.";
    else if (tipo === "publico" && dia >= 1 && dia <= 3) msg = "Para público en general abrimos de jueves a domingo.";
    if (msg) $("fecha").setAttribute("aria-invalid", "true"); else $("fecha").removeAttribute("aria-invalid");
    if (mostrar && msg) mostrarError(msg);
    return msg;
  }

  function mostrarError(m) { err.textContent = m; err.hidden = false; }
  function limpiarError() { err.hidden = true; form.querySelectorAll("[aria-invalid]").forEach(function (el) { if (el.name !== "fecha") el.removeAttribute("aria-invalid"); }); }

  function validar() {
    limpiarError();
    var falta = null, tel = $("telefono").value.replace(/\D/g, "").slice(-10);
    function marca(n, m) { $(n).setAttribute("aria-invalid", "true"); if (!falta) falta = { el: $(n), m: m }; }
    if (tipo === "escuela" && $("escuela").value.trim().length < 2) marca("escuela", "Escribe el nombre de la escuela.");
    if ($("nombre").value.trim().length < 2) marca("nombre", "Escribe tu nombre.");
    if (tel.length !== 10) marca("telefono", "Escribe un WhatsApp de 10 dígitos.");
    var c = $("correo").value.trim();
    if (c && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c)) marca("correo", "Revisa el correo.");
    if (!$("fecha").value) marca("fecha", "Elige la fecha.");
    else { var fm = revisarFecha(false); if (fm) marca("fecha", fm); }
    if (tipo === "escuela" && num("ninos") < 1) marca("ninos", "Escribe el número de alumnos.");
    if (tipo === "publico" && num("ninos") + num("adultos") < 1) marca("ninos", "Escribe cuántos niños y adultos vienen.");
    if (falta) { mostrarError(falta.m); falta.el.focus(); return null; }
    return {
      p_tipo: tipo,
      p_nombre: $("nombre").value.trim(),
      p_telefono: tel,
      p_correo: c || null,
      p_fecha: $("fecha").value,
      p_hora: tipo === "publico" ? $("hora").value : null,
      p_ninos: num("ninos"),
      p_adultos: num("adultos"),
      p_escuela: tipo === "escuela" ? $("escuela").value.trim() : null,
      p_grados: tipo === "escuela" ? ($("grados").value.trim() || null) : null,
      p_visita_previa: tipo === "escuela" && $("visita").checked,
      p_comentarios: $("comentarios").value.trim() || null
    };
  }

  function correoRespaldo(d) {
    var fecha = d.p_fecha.split("-").reverse().join("/");
    var cuerpo = tipo === "escuela"
      ? ["Hola, queremos reservar un recorrido escolar en La Aldea Navideña.", "", "Escuela: " + d.p_escuela, "Contacto: " + d.p_nombre,
         "WhatsApp: " + d.p_telefono, "Fecha: " + fecha, "Alumnos: " + d.p_ninos + (d.p_grados ? " (" + d.p_grados + ")" : ""),
         "Maestros: " + d.p_adultos, d.p_visita_previa ? "Queremos agendar una visita previa." : "", d.p_comentarios || ""]
      : ["Hola, quiero reservar para La Aldea Navideña (público en general).", "", "Nombre: " + d.p_nombre, "WhatsApp: " + d.p_telefono,
         "Fecha: " + fecha + " · llegada " + d.p_hora, "Niños: " + d.p_ninos + " · Adultos: " + d.p_adultos, d.p_comentarios || ""];
    return "mailto:" + CORREO + "?subject=" + encodeURIComponent("Reservación Aldea Navideña" + (tipo === "escuela" ? " – " + d.p_escuela : "")) +
      "&body=" + encodeURIComponent(cuerpo.join("\n"));
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if ($("sitio").value) return; // bot
    var d = validar();
    if (!d) return;
    btn.disabled = true; var txt = btn.textContent; btn.textContent = "Enviando…";
    fetch(SUPABASE_URL + "/rest/v1/rpc/aldea_reservar_web", {
      method: "POST",
      headers: Object.assign({ "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY },
        SUPABASE_ANON_KEY.indexOf("eyJ") === 0 ? { Authorization: "Bearer " + SUPABASE_ANON_KEY } : {}),
      body: JSON.stringify(d)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
    }).then(function (res) {
      btn.disabled = false; btn.textContent = txt;
      if (!res.ok) {
        // Mensaje de la base (fecha fuera de horario, datos faltantes…) o respaldo por correo
        if (res.j && res.j.message && !/function|permission|schema/i.test(res.j.message)) { mostrarError(res.j.message); return; }
        throw new Error("base");
      }
      try { if (window.gtag) window.gtag("event", "conversion", { send_to: CONVERSION }); window.gtag && window.gtag("event", "reserva_aldea", { tipo: tipo }); } catch (x) {}
      var r = res.j || {}, wa = ok.querySelector(".ok-wa"), tel = String(r.whatsapp || "").replace(/\D/g, "").slice(-10);
      var quien = r.responsable ? String(r.responsable).split(" ")[0] : "";
      ok.querySelector(".ok-txt").textContent = (quien ? quien + " te escribe" : "Te escribimos") + " por WhatsApp en breve para confirmar la fecha" +
        (tipo === "escuela" ? " y el anticipo." : " y cómo pagar.");
      if (tel.length === 10) {
        wa.href = "https://wa.me/52" + tel + "?text=" + encodeURIComponent("Hola, acabo de enviar una reservación para La Aldea Navideña a nombre de " + d.p_nombre + ".");
        wa.textContent = "Escribirle a " + (quien || "la Aldea") + " por WhatsApp";
        wa.hidden = false;
      } else wa.hidden = true;
      form.hidden = true; ok.hidden = false; ok.focus({ preventScroll: true });
    }).catch(function () {
      btn.disabled = false; btn.textContent = txt;
      mostrarError("No pudimos enviar el formulario. Te abrimos un correo con tus datos para que solo lo mandes.");
      setTimeout(function () { location.href = correoRespaldo(d); }, 900);
    });
  });

  form.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () { setTipo(b.getAttribute("data-tipo"), false); });
  });
  ["ninos", "adultos"].forEach(function (n) { $(n).addEventListener("input", estimar); });
  $("fecha").addEventListener("change", function () { limpiarError(); revisarFecha(true); });
  form.addEventListener("input", function (e) { if (e.target.name !== "fecha" && e.target.hasAttribute("aria-invalid")) e.target.removeAttribute("aria-invalid"); });
  ok.querySelector(".ok-otra").addEventListener("click", function () { form.reset(); ok.hidden = true; form.hidden = false; setTipo(tipo, true); });

  // Botones de la página que llevan al formulario con el tipo ya elegido
  document.querySelectorAll("[data-ir]").forEach(function (a) {
    a.addEventListener("click", function () { setTipo(a.getAttribute("data-ir"), false); });
  });

  var inicial = /[?&]tipo=publico/.test(location.search) || location.hash === "#reservar-publico" ? "publico" : "escuela";
  setTipo(inicial, false);
  if (location.hash === "#reservar-publico") sec.scrollIntoView();
})();
