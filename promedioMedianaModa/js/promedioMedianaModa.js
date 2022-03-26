var miLista = [100, 200, 500, 1, 200, , 200, 200, 149, 2993, 94, 500, 5000000];

// Se ordena la lista de menor a mayor

miLista.sort((a, b) => a - b);

// Cálculo de la media aritmética o promedio

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const mediaAritmetica = sumaLista / lista.length;

  return mediaAritmetica;
}

// Cálculo de la mediana

const mitadMiLista = parseInt(miLista.length / 2);
const esImpar = miLista.length % 2;

let mediana;

if (esImpar) {
  mediana = miLista[mitadMiLista];
} else {
  mediana = (miLista[mitadMiLista] + miLista[mitadMiLista - 1]) / 2;
}

// Cálculo de la moda

// Se transforma el array en objeto para contar cuantas veces aparece cada número

const miListaCount = {};

miLista.map(function (elemento) {
  if (miListaCount[elemento]) {
    miListaCount[elemento] += 1;
  } else {
    miListaCount[elemento] = 1;
  }
});

// Se transforma el objeto en array y se ordena de menor a mayor segun la cantidad de veces que aparece cada número. El último valor listado en el array es el que más veces aparece en el listado

const miListaArray = Object.entries(miListaCount).sort((a, b) => a[1] - b[1]);

const moda = miListaArray[miListaArray.length - 1][0];
const cantidadDeApariciones = miListaArray[miListaArray.length - 1][1];

// Console log de las variables calculadas

console.log(
  "El promedio de los valores listados es de " +
    calcularMediaAritmetica(miLista) +
    "."
);

console.log("La mediana de los valores listados es de " + mediana + ".");

console.log(
  "La moda de los valores listados es de " +
    moda +
    ", apareciendo " +
    cantidadDeApariciones +
    " veces."
);
