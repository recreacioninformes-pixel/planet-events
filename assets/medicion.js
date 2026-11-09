/* ==========================================================================
   MEDICIÓN DE GOOGLE ADS · planeteventsleon.com
   Cuenta cuántas personas que llegaron de un anuncio de Google tocaron
   WhatsApp o el correo (cada clic = 1 "mensaje" en Google Ads).
   Google solo cuenta el clic si la persona vino de un anuncio; las visitas
   normales no se cuentan como conversión.

   Para cambiar códigos, edita solo este bloque. Si dejas GOOGLE_TAG_ID vacío "",
   la página no carga nada de Google.
   ========================================================================== */
(function () {
  "use strict";

  var GOOGLE_TAG_ID = "AW-18533987435";           // Etiqueta de Google (misma cuenta que JEGAR)
  var CONVERSIONES = {
    mensaje: "AW-18533987435/uZHmCNeQ07QdEOvo2IVF", // "Planet – Mensaje (WhatsApp o correo)"
    telefono: "",                                   // clic en el teléfono (opcional)
    boletos: ""                                     // clic en comprar boletos (opcional)
  };

  if (!GOOGLE_TAG_ID) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_TAG_ID;
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", GOOGLE_TAG_ID);

  function medir(tipo, canal, etiqueta) {
    try {
      gtag("event", "clic_" + canal, { pagina: location.pathname, boton: etiqueta });
      if (CONVERSIONES[tipo]) gtag("event", "conversion", { send_to: CONVERSIONES[tipo] });
    } catch (e) {}
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
    if (!a) return;
    var h = a.getAttribute("href") || "", txt = (a.textContent || "").trim().slice(0, 60);
    if (h.indexOf("wa.me/") > -1) medir("mensaje", "whatsapp", txt);
    else if (h.indexOf("mailto:") === 0) medir("mensaje", "correo", txt);
    else if (h.indexOf("tel:") === 0) medir("telefono", "telefono", txt);
    else if (h.indexOf("ticketcity") > -1) medir("boletos", "boletos", txt);
  }, true);

  /* Para probar desde la consola: window.PLANET_MEDIR.ultimo() */
  window.PLANET_MEDIR = { ultimo: function () { return window.dataLayer.slice(-3); } };
})();
