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