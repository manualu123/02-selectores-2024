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
  if (matcher(startElement)) {
    resultSet.push(startElement);
    return resultSet;
  }
  const childrens = Object.values(startElement.children);
  //console.log(childrens);
  childrens.forEach((children) => {
    const sons = Object.values(children.children);
    if (sons.length) {
      sons.forEach((son) => {
        if (matcher(son)) {
          resultSet.push(son);
        }
      });
    }
    if (matcher(children)) {
      resultSet.push(children);
    }
  });

  return resultSet;
};

/**
 * @description: Detecta y devuelve el tipo de selector
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {string}: Devuelve uno de estos tipos: id, class, tag.class, tag
 */
const selectorTypeMatcher = function (selector) {
  if (selector[0] === "#") {
    return "id";
  }
  if (selector[0] === ".") {
    return "class";
  }
  if (selector.split(".").length == 2) {
    return "tag.class";
  }

  return "tag";
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
    let idSelector = [...selector];
    idSelector.shift();
    const selectorName = idSelector.join("");
    matcher = function (element) {
      if (element.id === selectorName) return true;
      return false;
    };
  } else if (selectorType === "class") {
    let classSelector = [...selector];
    classSelector.shift();
    const selectorName = classSelector.join("");
    matcher = (element) => {
      let arrElements = element.className.split(" ");
      let checkClassName = false;
      if (arrElements.includes(selectorName)) checkClassName = true;
      return checkClassName;
    };
  } else if (selectorType === "tag.class") {
    const [tag, clase] = selector.split(".");
    matcher = (element) => {
      const arrClases = element.className.split(" ");
      const elementTagName = element?.tagName?.toLowerCase();
      return elementTagName === tag && arrClases.includes(clase);
    };
  } else if (selectorType === "tag") {
    matcher = (element) => {
      return selector === element?.tagName?.toLowerCase();
    };
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
