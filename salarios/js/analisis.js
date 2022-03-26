// Helpers ----------------------------------------------------------

// Se plantea una función para evaluar si la cantidad de salarios contabilizados es par o impar

function esPar(numero) {
  return numero % 2 === 0;
}

// Se plantea una función para calcular la media aritmetica (o promedio) de un listado de números

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const mediaAritmetica = sumaLista / lista.length;

  return mediaAritmetica;
}

// Se plantea una función para calcular la mediana de un listado de números

function calcularMediana(list) {
  const mitad = parseInt(list.length / 2);

  const listSorted = list.sort(function (a, b) {
    return a - b;
  });

  if (esPar(list.length)) {
    const valorMitadInf = listSorted[mitad - 1];
    const valorMitadSup = listSorted[mitad];
    return (valorMitadInf + valorMitadSup) / 2;
  } else {
    const valoraMitad = listSorted[mitad];
    return valoraMitad;
  }
}

// Se plantea una función para crear una lista del top 10%

function top10PercentList(list) {
  const listSorted = list.sort(function (a, b) {
    return a - b;
  });

  const spliceStart = list.length * 0.9;
  const spliceCount = list.length - spliceStart;

  const top10List = listSorted.splice(spliceStart, spliceCount);
  return top10List;
}

// ------------------------------------------------------------------

// Se crea un array únicamente con los salarios de cada persona

const salariosArg = argentina.map(function (persona) {
  return persona.salary;
});

console.log(salariosArg);

// Se ordena el array de los salarios de menor a mayor

const salariosArgSorted = salariosArg.sort(function (a, b) {
  return a - b;
});

console.log(salariosArgSorted);

// Se calcula la media aritmética de los salarios listados

mediaAritmeticaSalariosArg = calcularMediaAritmetica(salariosArg);

console.log(mediaAritmeticaSalariosArg);

// Se calcula la mediana de los salarios listados

medianaSalariosArg = calcularMediana(salariosArg);

console.log(medianaSalariosArg);

// Se crea una lista de los 10% más asalariados

top10AsalariadosArg = top10PercentList(salariosArg);

console.log(top10AsalariadosArg);

// Se calcula la mediana de los 10% más asalariados

medianaTop10MasAsalariados = calcularMediana(top10AsalariadosArg);

console.log(medianaTop10MasAsalariados);
