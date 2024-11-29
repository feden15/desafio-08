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