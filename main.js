import './style.css'

//! ------------------------------------------ PARTE 1 -------------------------------------------------- 

console.warn('PARTE 1');

let nombre = 'Fede'; 
let apellido = 'Nova';
let edad = 25; 
let pais = 'Uruguay';

let conocimientos = ['Inglés', 'Español', 'Cocinar'];

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(pais);

console.log(conocimientos);

edad = 26;
console.log(edad);

let nuevaLongitudConocimientos = conocimientos.push('Conducir');
console.log(conocimientos);

//! ------------------------------------------ PARTE 2 -------------------------------------------------- 

console.warn('PARTE 2');

let marca = 'Peugeot';
let velocidad = '150 Km/h';
let stock = '10';
let modelos = ['Landtrek','Partner', 'SUV 2008', 'E-208'];

console.log('Recorremos el array con un for (a continuación)');

for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i]);
}
console.log(' '); // Para dejar espacio en la consola
console.log('Recorremos el array con un forEach (a continuación)');

modelos.forEach(function(modelo, i) {
    console.log(modelo);
})

//! ------------------------------------------ PARTE 3 -------------------------------------------------- 

console.warn('PARTE 3');

let rapidez = 135; // "Velocidad" ya está declarada en la parte dos

if (rapidez > 60) {
    console.log('Por favor, reduzca la velocidad');
} else {
    console.log('Va a buena velocidad, no sobrepase los 60 km/h');
}

//! ------------------------------------------ PARTE 4 -------------------------------------------------- 

console.warn('PARTE 4');

let sueldo = 0;
// sueldo = Number(prompt('Cuál es su sueldo?', '0'));

if (sueldo == 100000) {
    console.log('Excelente');
} else if (sueldo <= 40000) {
    console.log('Bajo');
} else if (sueldo <= 60000) {
    console.log('Bueno');
 } else if (sueldo <= 80000) {
    console.log('Muy bueno');
}

//! ------------------------------------------ PARTE 5 -------------------------------------------------- 

console.warn('PARTE 5');

let anioNacimiento = 1998;
// anioNacimiento = Number(prompt('Cuál es su año de nacimiento?', '1998'));

console.log('Actualmente tenés ' + (2024 - anioNacimiento));

//! ------------------------------------------ PARTE 6 -------------------------------------------------- 

console.warn('PARTE 6');

let numeroParaTabla = 0;
// numeroParaTabla = Number(prompt('Dime un número entero'));

for (let i=1; i<=10; i++) {
    console.log(numeroParaTabla+' x '+i+' = '+numeroParaTabla*i);
}

//! ------------------------------------------ PARTE 7 -------------------------------------------------- 

console.warn('PARTE 7');

let numeroEsPar = 0;
// numeroEsPar = Number(prompt('Dime un número entero'));

if ((numeroEsPar % 2) == 0) {
    console.warn('El número es par, el módulo da 0');
} else {
    console.warn('El número es impar, el módulo da distinto de 0');
}