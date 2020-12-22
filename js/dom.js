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




