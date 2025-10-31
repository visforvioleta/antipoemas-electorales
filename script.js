// === script.js completo ===

// Cargar Tracery dinámicamente
const traceryScript = document.createElement('script');
traceryScript.src = "https://cdn.jsdelivr.net/npm/tracery-grammar@2.7.3/tracery.js";
document.head.appendChild(traceryScript);

traceryScript.onload = () => {
  // Diccionarios de Tracery (verbos + frases)
  const grammarObj = {
    "verb": [
      "se compromete a",
      "jura solemnemente que",
      "cree en",
      "va a trabajar por",
      "impulsará",
      "fortalecerá",
      "apostará por",
      "implementará",
      "quiere construir",
      "invocará el poder de"
    ],
    "phrase": [
      "la patria del absurdo",
      "el progreso con sabor a empanada fría",
      "un futuro sin promesas ni finales felices",
      "la economía del desencanto",
      "la educación sentimental del votante promedio",
      "el retorno de la esperanza en horario prime",
      "la transparencia de los espejos rotos",
      "la igualdad de las oportunidades imposibles",
      "la poesía como política de Estado",
      "la reforma tributaria del alma"
    ]
  };

  // Crear la gramática
  const grammar = tracery.createGrammar(grammarObj);

  // Función pública que se llama desde los botones en el HTML
  window.generateVerse = function(candidate) {
    // Generar partes con Tracery
    const verb = grammar.flatten("#verb#");
    const phrase = grammar.flatten("#phrase#");

    // Componer el verso final
    const verse = `${candidate} ${verb} ${phrase}.`;

    // Mostrar en el contenedor #chatResponse (con clase .visible para animar)
    const responseEl = document.getElementById("chatResponse");
    if (!responseEl) {
      console.warn("No existe el elemento #chatResponse en el DOM");
      return;
    }

    // Reiniciar la clase .visible para poder reproducir la animación en cada clic
    responseEl.classList.remove("visible");
    // Force reflow para reiniciar transición/animación
    void responseEl.offsetWidth;

    // Insertar el verso (escape mínimo)
    responseEl.innerHTML = `<p>${escapeHtml(verse)}</p>`;
    responseEl.classList.add("visible");
  };

  // Utilidad pequeña para escapar HTML (por seguridad si luego metes contenido variable)
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};
