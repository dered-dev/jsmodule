

// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"

const scoreExam = 80

if(scoreExam >= 90 ) {
    console.log('Tu calificación es una A')
} else if(scoreExam >= 80 && scoreExam < 90 ) {
    console.log('Tu calificación es una B')
} else if(scoreExam >= 70 && scoreExam < 80 ) {
    console.log('Tu calificación es una C')
} else if(scoreExam >= 60 && scoreExam < 70 ) {
    console.log('Tu calificación es una D')
} else if(scoreExam >= 50 && scoreExam < 60 ) {
    console.log('Tu calificación es una E')
} else {
    console.log('Tu calificación es una F')
}


// Exercise 2

// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo

const numberToDivide = 80

if(numberToDivide % 2 === 0 && numberToDivide % 11 === 0) {
    console.log(`${numberToDivide} es divisible entre 2 y 11 `);
} else {
    console.log(`${numberToDivide} no es divisible entre 2 y 11`);
}


// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir en resultado en consola

const numberIsEven = 80
numberIsEven % 2 === 0 ? console.log(`El número ${numberIsEven} es par`) : console.log(`El número ${numberIsEven} es impar`)

// Exercise 4
// Pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.
const dayOfWeek = 3
switch(dayOfWeek){
    case 1: 
        console.log("Es lunes");
        break;
    case 2: 
        console.log("Es martes");
        break;
    case 3: 
        console.log("Es miércoles");
        break;
    case 4: 
        console.log("Es jueves");
        break;
    case 5: 
        console.log("Es viernes");
        break;
    case 6: 
        console.log("Es sábado");
        break;
    case 7: 
        console.log("Es domingo");
        break;
    default: 
        console.log("Número inválido, debe estar entre 1 y 7.");
}


// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

// Enero, Marzo, Mayo, Julio, Agosto, Octubre, Deciembre	31 dias
// Abril, junio, septiembre, noviembre	30 dias
// Febrero	28 o 29 dias

const monthToCompare =  3

if(monthToCompare == 1) {
    console.log("31 días")
} else if (monthToCompare == 2) {
    console.log("28 0 29 días")
} else if (monthToCompare == 3) {
    console.log("31 días")
} else if (monthToCompare == 4) {
    console.log("30 días")
} else if (monthToCompare == 5) {
    console.log("31 días")
} else if (monthToCompare == 6) {
    console.log("30 días")
} else if (monthToCompare == 7) {
    console.log("31 días")
} else if (monthToCompare == 8) {
    console.log("31 días")
} else if (monthToCompare == 9) {
    console.log("30 días")
} else if (monthToCompare == 10) {
    console.log("31 días")
} else if (monthToCompare == 11) {
    console.log("30 días")
} else if (monthToCompare == 12) {
    console.log("31 días")
} else {
    console.log("Número inválido, debe estar entre 1 y 12.")
}

// solution with switch

switch(monthToCompare) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:    
        console.log("31 días")
        break
    case 4:
    case 6:
    case 9: 
    case 11: 
        console.log("30 días")
        break
    case 2: 
        console.log("28 0 29 días")
        break
    default:
        console.log("Número inválido, debe estar entre 1 y 12.")
}