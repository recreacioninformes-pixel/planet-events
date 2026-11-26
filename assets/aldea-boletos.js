/* ==========================================================================
   COMPRA DE BOLETOS EN LÍNEA · LA ALDEA NAVIDEÑA
   Página: /aldea-navidena/boletos/
   Los precios salen de la base del CRM (boletera_precios_publicos). Al pagar, la función
   "boletera-pago" (repo planet-events-crm) crea el pedido y la página de pago de Stripe
   (tarjeta u OXXO). Al confirmarse el pago, el cliente ve sus boletos con QR en
   app.planeteventsleon.com/#/boletos/…  — el precio NUNCA se toma del navegador.
   ========================================================================== */
(function () {
  "use strict";

  var SUPABASE_URL = "https://ixkulonffrzctjgrgrat.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_r_py2xBFU1N-F2gd-A2VUQ_Vi92GU3s"; // llave pública (publishable) del CRM de Planet
  var MAX = 30;

  var form = document.getElementById("bf");
  if (!form) return;
  var tk = document.getElementById("tk");
  var totalEl = document.getElementById("total");
  var btn = form.querySelector(".rf-send");
  var err = form.querySelector(".err");
  var precios = [];
  var cant = {};
  var fmt = function (n) { return "$" + Number(n).toLocaleString("es-MX", { maximumFractionDigits: 2 }); };
  var $ = function (n) { return form.elements[n]; };

  function cabeza(h) { return { apikey: SUPABASE_ANON_KEY, Authorization: "Bearer " + SUPABASE_ANON_KEY, "Content-Type": "application/json" }; }

  function piezas() { return precios.reduce(function (s, p) { return s + (cant[p.tipo] || 0); }, 0); }
  function subtotal() { return precios.reduce(function (s, p) { return s + (cant[p.tipo] || 0) * Number(p.precio); }, 0); }
  function cargo() { return precios.reduce(function (s, p) { return s + (cant[p.tipo] || 0) * Number(p.cargo || 0); }, 0); }
  function total() { return subtotal() + cargo(); }

  function pintar() {
    var n = piezas();
    precios.forEach(function (p) {
      var row = tk.querySelector('[data-tipo="' + p.tipo + '"]');
      row.querySelector("output").value = cant[p.tipo] || 0;
      row.querySelector(".menos").disabled = !(cant[p.tipo] > 0);
      row.querySelector(".mas").disabled = n >= MAX;
    });
    totalEl.textContent = fmt(total());
    var det = document.getElementById("desglose");
    if (det) det.textContent = cargo() > 0 && n > 0 ? "Boletos " + fmt(subtotal()) + " + cargo por servicio " + fmt(cargo()) : "";
    btn.disabled = n === 0;
    btn.textContent = n === 0 ? "Elige tus boletos" : "Pagar " + fmt(total());
  }

  function armar() {
    if (!precios.length) {
      tk.innerHTML = '<p class="est">La venta en línea no está abierta en este momento. Escríbenos al <a href="https://wa.me/524772858643">477 285 8643</a>.</p>';
      return;
    }
    tk.innerHTML = "";
    precios.forEach(function (p) {
      cant[p.tipo] = 0;
      var row = document.createElement("div");
      row.className = "tk-row";
      row.setAttribute("data-tipo", p.tipo);
      row.innerHTML = '<div><b></b><span></span></div>' +
        '<div class="step"><button type="button" class="menos" aria-label="Quitar uno">−</button><output aria-live="polite">0</output><button type="button" class="mas" aria-label="Agregar uno">+</button></div>';
      row.querySelector("b").textContent = (p.descripcion || p.tipo);
      row.querySelector("span").textContent = fmt(p.precio) + " por boleto" + (Number(p.cargo) > 0 ? " + " + fmt(p.cargo) + " de cargo por servicio" : "");
      row.querySelector(".menos").addEventListener("click", function () { cant[p.tipo] = Math.max(0, cant[p.tipo] - 1); pintar(); });
      row.querySelector(".mas").addEventListener("click", function () { if (piezas() < MAX) { cant[p.tipo]++; pintar(); } });
      tk.appendChild(row);
    });
    // Un boleto preseleccionado para que el total tenga sentido desde el inicio
    cant[precios[0].tipo] = 1;
    pintar();
  }

  fetch(SUPABASE_URL + "/rest/v1/rpc/boletera_precios_publicos", { method: "POST", headers: cabeza(), body: "{}" })
    .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function (d) { precios = Array.isArray(d) ? d : []; armar(); })
    .catch(function () { tk.innerHTML = '<p class="est">No pudimos cargar los precios. Recarga la página o escríbenos al <a href="https://wa.me/524772858643">477 285 8643</a>.</p>'; });

  function falla(msg, campo) {
    err.textContent = msg; err.hidden = false;
    if (campo) { campo.setAttribute("aria-invalid", "true"); campo.focus(); }
  }
  form.addEventListener("input", function (e) { if (e.target.removeAttribute) e.target.removeAttribute("aria-invalid"); err.hidden = true; });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.hidden = true;
    var nombre = $("nombre").value.trim();
    var tel = $("telefono").value.replace(/\D/g, "").slice(-10);
    var correo = $("correo").value.trim();
    if (!piezas()) return falla("Elige al menos un boleto.");
    if (nombre.length < 2) return falla("Escribe tu nombre.", $("nombre"));
    if (tel.length !== 10) return falla("Escribe tu WhatsApp a 10 dígitos.", $("telefono"));
    if (correo && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) return falla("Revisa tu correo.", $("correo"));

    var items = precios.filter(function (p) { return cant[p.tipo] > 0; }).map(function (p) { return { tipo: p.tipo, cantidad: cant[p.tipo] }; });
    btn.disabled = true; btn.textContent = "Abriendo pago seguro…";
    fetch(SUPABASE_URL + "/functions/v1/boletera-pago", {
      method: "POST", headers: cabeza(),
      body: JSON.stringify({ accion: "crear", nombre: nombre, telefono: tel, correo: correo || null, items: items, sitio: $("sitio").value }),
    })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.url) throw new Error(j.error || "No se pudo abrir el pago."); return j; }); })
      .then(function (j) {
        try { if (window.gtag) window.gtag("event", "begin_checkout", { value: total(), currency: "MXN" }); } catch (x) { /* medición opcional */ }
        location.href = j.url;
      })
      .catch(function (x) {
        falla((x && x.message) || "No se pudo abrir el pago. Intenta de nuevo.");
        pintar();
      });
  });
})();
