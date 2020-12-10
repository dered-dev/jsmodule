

/** 
 * ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/
const lenString  = "hola koders"
console.log(lenString.length)

/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */

const initialString = "Hola"
const strinConcated = initialString.concat("mundo")
console.log(strinConcated)


/**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */

const stringToSlice = "Hello koders"
console.log(stringToSlice.slice(4,7))

/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */

const stringToReplace = "hola koders"
console.log(stringToReplace.replace(' ', '-'))

/**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */

const stringToSplit = "hola koders"
const stringSplited = stringToSplit.split(' ')
const stringCapitalized = []
for(i = 0; i < stringSplited.length; i++){
    stringCapitalized.push(
        stringSplited[i].charAt(0).toUpperCase() + stringSplited[i].slice(1)
        )
}
console.log(stringCapitalized.join(' '))


/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */

const stringMail = "jorgec@kodemia.mx"
const arrobaIndex = stringMail.indexOf('@')
const maskedMail = `****${stringMail.slice(arrobaIndex)}`
console.log(maskedMail)
console.log('en una sola linea', `*****${stringMail.slice(stringMail.indexOf('@'))}`)

/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */

const stringToArray = "en un lugar de la mancha"
console.log(stringToArray.split(' '))



