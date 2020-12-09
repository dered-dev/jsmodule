// Ejercicio. 
// Estar en la rama class/class-one
// Crear el archivo weight_in_moon.js

// 1. pedir al usuario su peso en KG 
// 2. arrojar en un alert cual seria su peso en la luna


let weight_in_earth = prompt('¿Cuál es tu peso en KG?')
let weight_in_moon = (weight_in_earth / 9.81) * 1.622
console.log(weight_in_moon)



let result = 'Tu peso en la luna es: ' + weight_in_moon + ' kg.'

let resultTwo = `Tu peso en la luna es: ${weight_in_moon} kg`


alert(resultTwo)


