// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
// [1,2,3,4]
// [1,2,3,4]


const arrReduce = [1,2,3,4,10,20]
arrReduce.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
}, 10) / arrReduce.length

arrReduce.reduce((accumulator,currentValue) => accumulator + currentValue, 0)


// ['a','b','c','c','b']
// searchOcurrence(array, 'caracter')
// searchOcurrence(['a','b','c','c','b'], 'c')
// -> 2
const searchOcurrence = (arrToSearch, elToSearch) => {
    let ocurrence = arrToSearch.reduce( (accumulator, currentValue) => {
        if(currentValue === elToSearch) {
            return accumulator + 1
        } else {
            return accumulator + 0
        }
    }, 0)
    return ocurrence
}

const searchOcurrence = (arrToSearch, elToSearch) => {
    let ocurrence = arrToSearch.reduce( (accumulator, currentValue) => {
        let suma = currentValue === elToSearch ? 1 : 0
        return accumulator + suma
    }, 0)
    return ocurrence
}

const searchOcurrence = (arrToSearch, elToSearch) => {
    let ocurrence = arrToSearch.reduce( (accumulator, currentValue) => {
        return accumulator + currentValue === elToSearch ? 1 : 0
    }, 0)
    return ocurrence
}

const searchOcurrence = (arrToSearch, elToSearch) => {
    let ocurrence = arrToSearch.reduce( (accumulator, currentValue) => {
        return currentValue === elToSearch ? accumulator + 1: accumulator
    }, 0)
    return ocurrence
}

// [1, 'en','algun', 'lugar', 'de','la','mancha',1]
// -> 'En algun lugar de la mancha'
// .reduce()
const arrayToString = (arr) => {
    return arr.reduce((acc, cv) => {
        return acc + cv
    },'').toUpperCase()
}

