// Ejercicio 1
// dado el siguiene array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// obtener un nuevo array con esta estructura
//-> {
//    'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident'
//      ....
//   }

const joinUsers = users.reduce( (acc, user) => {
    let userName = user.firstName + ' ' + user.lastName
    acc[userName] = user.role
    return acc
}, {})




//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role
const filterUserByRole = (arr, role) => arr.filter(user => user.role === role )


// ejercicio 3
// tomando el siguiente array de objetos
// filtrar lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes
let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const personVoted = persons.reduce( (acc, person) => {
    return person.voted == true ? acc + 1: acc
}, 0);
console.log(personVoted)

const averageAgeVoters = persons.reduce( (acc, person) => {
    return acc + person.age
}, 0) / persons.length

console.log(averageAgeVoters)


