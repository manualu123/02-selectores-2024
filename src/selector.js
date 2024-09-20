// Podemos usar el siguiente formato de comentario para definir
// el comportamiento de la Función.
/**
 * @description: Recorre el árbol del DOM y recolecta elementos que coincidan en un Array (resulSet).
 * @param {function} matcher: La Función generada por `matchFunctionMaker`.
 * @param {object} startElement: Nodo del que parte la búsqueda.
 * @returns {array}: Nodos encontrados.
 */
const traverseDomAndCollectElements = function (
  matcher,
  startElement = document.body
) {
  let resultSet = [];

  // Usá `matcher` para identificar el nodo correcto
  // Escribí tu código acá

  return resultSet;
};

/**
 * @description: Detecta y devuelve el tipo de selector
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {string}: Devuelve uno de estos tipos: id, class, tag.class, tag
 */
const selectorTypeMatcher = function (selector) {
  // Escribí tu código acá
};

/**
 * @description: Genera una Función comparadora en base a un selector dado.
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {function}: Toma un elemento como un parámetro y devuelve `true`/`false` si el elemento coincide, o no, con el selector.
 */
const matchFunctionMaker = function (selector) {
  const selectorType = selectorTypeMatcher(selector);
  let matcher;
  if (selectorType === "id") {
    // define matcher para id
  } else if (selectorType === "class") {
    // define matcher para class
  } else if (selectorType === "tag.class") {
    // define matcher para tag.class
  } else if (selectorType === "tag") {
    // define matcher para tag
  }
  return matcher;
};

/**
 * @description: Busca en el DOM tree los nodos que coincidan con el selector dado.
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {array}: Nodos encontrados.
 */
const querySelector = function (selector) {
  const selectorMatchFunc = matchFunctionMaker(selector);
  const elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
