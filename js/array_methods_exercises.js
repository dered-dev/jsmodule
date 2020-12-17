// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> [4]


const mostBiggest  = arr => {
    let largest = arr[0]
    arr.forEach(element => {
        if (largest < element ) {
            largest = element
        }
    })
    return largest
}

// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

const numberToString = arr => arr.map( element => element.toString() )


// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]

const capitalizeString  = arr => {
    return arr.map( element => {
        if(typeof element === 'string') {
            return `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}` 
        } else {
            return element
        }
    })
}


// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]

[1, 2, 2, 4, 3, 4].filter((element, index, arr) =>  {
    console.log(element, arr.indexOf(element), index) 
    if( arr.indexOf(element) === index ) {
        return element
    }
})


// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]

[1, 2, 2, 4, 3, 4].filter((element, index, arr) =>  {
    console.log(element, arr.indexOf(element), index) 
    if( arr.indexOf(element) !== index ) {
        return element
    }
})


// ejercicio 7 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const convertLeapYear = arr => {
    return arr.filter(year => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
    })
}