//RESUELVE LOS EJERCICIOS AQUÍ

//Ejercicio 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

let [, ana] = empleados;

//Jercicio 2
let [emaLuis, ,] = empleados;
emaLuis = emaLuis.email;

//Ejercico 3
let a = 5;
let b = 3;

[a, b] = [b, a];

//Ejercicio 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;

//Ejercicio 5
function sumEveryOther(...suma) {
  let total = 0;

  for (let i = 0; i < suma.length; i++) {
    total += suma[i];
  }
  return total;
}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

//Ejercicio 6
function addOnlyNums(...string) {
  let sumatorio = 0;
  for (let i = 0; i < string.length; i++) {
    if (typeof string[i] == "number") {
      sumatorio += string[i];
    }
  }
  return sumatorio;
}
addOnlyNums(1, "perro", 2, 4);

//Ejercicio 7
function countTheArgs(...string) {
  return string.length;
}
countTheArgs("gato", "perro");
countTheArgs("gato", "perro", "pollo", "oso");

//Ejercicio 8
function combineTwoArrays(array1, array2) {
  let concaArray = [...array1, ...array2];
  return concaArray;
}

combineTwoArrays([1, 2, 3], [4, 5, 6]);

//Ejercicio 9
function onlyUniques(...anyArgument) {
  let convertArray = [...anyArgument];
  let arrFinal = [];
  for (let i = 0; i < convertArray.length; i++) {
    if (arrFinal.indexOf(convertArray[i]) == -1) {
      arrFinal.push(convertArray[i]);
    }
  }
  return arrFinal;
}

onlyUniques("gato", "pollo", "cerdo", "cerdo");
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8);

//Ejercicio 10
function combineAllArrays(...arg) {
  let vacio = [];
  for (let i = 0; i < arg.length; i++) {
    vacio = [...vacio, ...arg[i]];
  }
  return vacio;
}

//Ejercicio 11
function sumAndSquare(...anyArg) {
  let resultArr = anyArg.reduce(
    (accumulator, currentValue) => accumulator + currentValue * currentValue,
    0
  );
  return resultArr;
}
