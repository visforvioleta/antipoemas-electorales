// === script.js extendido ===

// Cargar Tracery dinámicamente
const traceryScript = document.createElement('script');
traceryScript.src = "https://cdn.jsdelivr.net/npm/tracery-grammar@2.7.3/tracery.js";
document.head.appendChild(traceryScript);

traceryScript.onload = () => {
  // === Gramática base ===
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
      "invocará el poder de",
      "anuncia sin anestesia",
      "declama entre aplausos y bostezos",
      "promete bajo juramento dudoso"
    ],
    "absurdismo": [
      "el sol que no paga impuestos",
      "la patria del absurdo",
      "el progreso con sabor a empanada fría",
      "la transparencia de los espejos rotos",
      "la economía del desencanto",
      "la reforma tributaria del alma",
      "la educación sentimental del votante promedio",
      "la poesía como política de Estado",
      "un país donde los relojes votan",
      "la igualdad de las oportunidades imposibles"
    ],
    "final": [
      "perfectamente bien.",
      "yo no respondo por las molestias causadas.",
      "el cielo se está cayendo a pedazos.",
      "no sé si hablo conmigo o con el enchufe.",
      "y sin embargo, seguimos votando."
    ]
  };

  // === Diccionario temático por candidato ===
  const candidateThemes = {
    "Eduardo Artés": [
      "el pueblo organizado",
      "la justicia social",
      "el trabajo digno",
      "la educación gratuita",
      "el fin del neoliberalismo"
    ],
    "Franco Parisi": [
      "la economía digital",
      "el emprendimiento",
      "los impuestos justos",
      "la libertad financiera",
      "el chileno promedio endeudado"
    ],
    "Johannes Kaiser": [
      "la libertad de expresión",
      "el orden perdido",
      "la familia tradicional",
      "la batalla cultural",
      "el miedo al caos"
    ],
    "Harold Mayne-Nicholls": [
      "el deporte como salvación",
      "la cancha pareja",
      "el fair play social",
      "los niños primero en la fila",
      "el país que entrena todos los días"
    ],
    "Jeannette Jara": [
      "la seguridad social",
      "la dignidad laboral",
      "el Estado presente",
      "las pensiones decentes",
      "la igualdad de género"
    ],
    "Evelyn Matthei": [
      "el orden y el progreso",
      "la eficiencia administrativa",
      "el combate al delito",
      "la gestión sin poesía",
      "la experiencia de la realidad"
    ],
    "José Antonio Kast": [
      "la patria sin fronteras abiertas",
      "la autoridad y el orden",
      "la familia como trinchera",
      "la expulsión inmediata",
      "la fe en los valores eternos"
    ],
    "Marco Enríquez-Ominami": [
      "la innovación social",
      "la modernidad líquida",
      "la transparencia de las promesas",
      "la reinvención del progresismo",
      "el cine político que nunca se filmó"
    ]
  };

  // Crear gramática de Tracery
  const grammar = tracery.createGrammar(grammarObj);

  // === FUNCIÓN PRINCIPAL ===
  window.generateVerse = function(candidate) {
    const themes = candidateThemes[candidate] || ["las promesas vacías"];
    const verb = grammar.flatten("#verb#");
    const absurd = grammar.flatten("#absurdismo#");
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const ending = grammar.flatten("#final#");

    // Componer antiverso parriano
    const verse = `${candidate} ${verb} ${theme}, pero termina hablando de ${absurd}. ${ending}`;

    // Mostrar en pantalla
    const responseEl = document.getElementById("chatResponse");
    if (!responseEl) return console.warn("No existe el elemento #chatResponse en el DOM");

    responseEl.classList.remove("visible");
    void responseEl.offsetWidth; // Reiniciar animación
    responseEl.innerHTML = `<p>${escapeHtml(verse)}</p>`;
    responseEl.classList.add("visible");
  };

  // === Utilidad para escapar HTML ===
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};
