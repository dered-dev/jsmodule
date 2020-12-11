
//imprimir la tabla del 8 en reversa

for(let i = 10; i >= 1;i--){
    console.log(`8 x ${i} = ${8 * i}`)
}


//imprimir los numeros pares entre 1 y 100
// 2
// 4
// 100
for(let i = 1; i <= 100; i++){
    if( i % 2 === 0 ){
        console.log(i)
    }
}

// dado un string
// "reverse"
// -> esrever
// invertir el orden e imprimir en consola
const stringToReverse = "Hola mundo"
let stringReversed = ''
for(let i = stringToReverse.length - 1; i >= 0 ; i--) {
    stringReversed += stringToReverse[i]
}
console.log(stringReversed)



// imprimir en consola el siguiente patron
// El acuario tiene 9 peces
// El acuario tiene 8 peces
// El acuario tiene 7 peces
// -....-
// El acuario tiene 1 pez


// For inner for
// imprimir las tablas del 1 al 10
// imprimir las tablas del 10 al 1

// a partir del string
// "129678543"
// imprimir las tablas de multiplicar en ese orden
// tabla del 1
// tabla del 2 
// tabla del 9


// dado un string
// "anitalavalatina"
// verificar si es o no un palindromo
// solo usar for






// tabla del 7 con while
let counter = 1
while(counter <= 10){
    console.log(`7 x ${counter} = ${7 * counter}`)
    counter = counter + 1
}

let counterDo = 1
do {
    // sentencias
    console.log(`7 x ${counterDo} = ${7 * counterDo}`)
    counterDo++
} while(counterDo < 10 )





