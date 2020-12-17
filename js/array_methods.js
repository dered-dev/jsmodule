const arrayCitys = ['ciudad','Cdmx','Monterrey', 'guadalajara']
// for(let i = 0; i < arrayCitys.length; i++){
//     console.log( arrayCitys[i] )
// }

// arrayCitys.forEach(function( currentElement) {
//     // sentencias
//     if(currentElement.startsWith('c') ||  currentElement.startsWith('C') ) {
//         console.log(currentElement)
//     }
// });


arrayCitys.forEach( currentElement => {
    // sentencias
    if(currentElement.startsWith('c') ||  currentElement.startsWith('C') ) {
        console.log(currentElement)
    }
});

// tabla de multiplicar
// [1,2 3,4]
// 1, 2, 3, 4
// 
const arrayTable =  [1, 10, 11, 9]

arrayTable.forEach(currentTable => {
    let arrayMultiples = [1,5,3,4,5,6,7,8,9,10]
    arrayMultiples.forEach(currentMultiple => {
        console.log(`${currentTable} x ${currentMultiple} = ${currentTable * currentMultiple}`)
    })
});

// function
// [1, 2, 3] 
// -> [2, 4, 6]
// foreEach

const doubleValues = arrNumbers => {
    let arrayToFill = []
    arrNumbers.forEach(currentValue => {
        arrayToFill.push(currentValue * 2)
    })
    return arrayToFill
}

console.log(doubleValues([1,2,3]))

// const arrayToDouble = [1,2,3]
// const resultDoubleValues = doubleValues(arrayToDouble)
// console.log(resultDoubleValues)


// function
// [1, 2, 3, 4] 
// -> [2, 4]
// foreEach

const onlyEvenValues = arrNumbers => {
    let arrayToFill = []
    arrNumbers.forEach(item => {
        console.log(item)
        if(item % 2 === 0){
            arrayToFill.push(item)
        }
    })
    return arrayToFill
}

// function
// ['hola', 'mundo']
// -> ['ha', 'm0']
// foreEach

const firstAndLast = arrStrings => {
    let arrayToFill = []
    arrStrings.forEach((item) => {
        arrayToFill.push(item.slice(0,1) + item.slice(-1))
    })
    return arrayToFill
}


// .map()
// currentvalue, index, arrayOriginal
// -> []
    
let arrayToFill = []
arrNumbers.forEach(currentValue => {
    console.log(currentValue * 2)
})
//return arrayToFill

// [1,20,50]
// -> [2,40,100]
// let newArray = arr.map(callback( currentValue[, index[, array]]) {
//    // return element for newArray, after executing something
// }[, thisArg]);

let resultArray  = [1,20,50].map(function(currentValue, index, arr) {
    return currentValue * 2
})

let arrayResult2 = [1,20,50].map(currentValue => {
    return currentValue * 2
})


const doubleValuesMap = (arr) => {
    const resulArray = arr.map(currentValue => {
         currentValue * 2 
    })
    return resulArray
}

const doubleValuesMap = (arr) => {
    const resulArray = arr.map(currentValue => currentValue * 2 )
    return resulArray
} 

const doubleValuesMap = (arr) => {
    return arr.map(currentValue => currentValue * 2 )
} 

const doubleValuesMap = (arr) => arr.map(currentValue => currentValue * 2 )
console.log(doubleValuesMap([1,2,3,4,5,6]))

// [1,2,3,4]
// []
// .filter( condicion )

[1,2,3,4].filter((item) => {
    let perro = 'puppy'
    if(perro === 'puppy'){
        return item
    }
})

[1,2,3,4].filter((item) => {
    return (item % 2 === 0 && item > 2)
})

[1,2,3,4].filter(item => item % 2)












