// Imprimir en consola la tabla del 7
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 7

console.log('TAREA')
console.log('Tabla del 7')
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${ 7 * i}`)
    // template literal
}

// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....
console.log('Múltiplos de 3 y 7')
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 || i % 7 === 0) {
        console.log(i)
    }
}

// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// "en un lugar de la mancha" -> 5
console.log('Espacios en una cadena de texto')
const stringSpaces = "en un lugar de la mancha"
let countSpace = 0
for(let i = 0; i < stringSpaces.length; i++){
    if(stringSpaces[i] === ' '){
        countSpace += 1
    }
}
console.log(countSpace)
console.log(stringSpaces.split(" ").length - 1)

// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// "Hola mundo" -> 4

console.log('Vocales en una cadena de texto')
const stringVowels = "Hola mundo"
let countVowels = 0
for(let i = 0; i < stringVowels.length; i++){
    if(
        stringVowels[i] === 'a' ||
        stringVowels[i] === 'e' ||
        stringVowels[i] === 'i' ||
        stringVowels[i] === 'o' ||
        stringVowels[i] === 'u' ||
        stringVowels[i] === 'A' ||
        stringVowels[i] === 'E' ||
        stringVowels[i] === 'I' ||
        stringVowels[i] === 'O' ||
        stringVowels[i] === 'U'
    ){
        countVowels += 1
    }
}

console.log(countVowels)