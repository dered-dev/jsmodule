
// function calculateDogAge(nameDog, ageDog) {
//     const dogYears = 7 * ageDog
//     return dogYears
// }

// const calculateDogAge = (nameDog, ageDog) => {
//     const dogYears = 7 * ageDog
//     return dogYears
// }

// const calculateDogAge = (nameDog, ageDog) => { 
//     return 7 * ageDog 
// }

const calculateDogAge = (nameDog, ageDog) => 7 * ageDog 
console.log(calculateDogAge(2,3))




// declaracion de la funcion
// const calArea = radius => {
//     //calculamos N cosas
//     return Math.PI * radius * radius
// }

const calArea = radius => Math.PI * radius * radius

const resultCalArea = calArea(10) // invoke function
// print result
console.log(resultCalArea)



// get factorial
const getFactorial = (numberFactorial) => {
    let total = 1
    for(let count = 1; count <= numberFactorial; count++){
        total = total + count
    }
    return total
}
// invoke function
const resultGetFactorial = getFactorial(3)
// print result
console.log(resultGetFactorial)

