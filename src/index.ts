import "./styles.css";
const longitud: number = Number(prompt("Ingrese la dimensión del arreglo"));

let arrNumb: number[] = new Array(longitud);

let para = document.getElementById("arreglo");

let posit: number = 0; //no olvidar cuales son las variables array
let negat: number = 0; // al inicial. deben hacerce con [] y dentro el indice
let ceros: number = 0; //al cual se hace referencia en la variable ler i =>[i]

for (let i = 0; i < longitud; i++) {
  arrNumb[i] = Number(prompt(`Ingrese el número ${i} de ${longitud}`));
  if (arrNumb[i] === 0) {
    ceros++;
  } else if (arrNumb[i] > 0) {
    posit++;
  } else {
    negat++;
  }
}
para.innerText = `Hay ${posit} números positivos, ${negat} números negativos y ${ceros} cero.`;
