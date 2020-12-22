// create nodes and append
let title = document.createElement("h1")
let texto = document.createTextNode('Soy un titulo desde JS')
title.appendChild(texto)
document.getElementById('caja2').appendChild(title)

let parrafo = document.createElement('p')
let textoparrafo  = document.createTextNode('soy un parrafo desde JS')
parrafo.appendChild(textoparrafo)

console.log(parrafo)
document.getElementById('caja2').appendChild(parrafo)


// selectores JS


// let elemento = document.getElementById('elementToSet')
let elementos = document.getElementsByClassName('parrafos')
let secondElement = elementos[1]
// secondElement.setAttribute('class','parrafos parrafo2 parrafoprueba active')
secondElement.classList.add('active')
secondElement.classList.remove('parrafoprueba')
let bytag = document.getElementsByTagName('section')
console.log(bytag)
bytag[0].classList.add('section__parrafo')

let secciones = document.getElementsByClassName('secciones')
// let secciones = document.getElementsByClassName('sinclase')
// let querySelector = document.querySelector('.secciones')
// 1er coincidencia
let querySelectorAll = document.querySelectorAll('li')
console.log(querySelectorAll)

