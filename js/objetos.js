

let person = {
    name: 'nayeli',
    location: {
        cp: '55778',
        street:' asadaas'
    },
    credential: {
        key1: '55778',
        key2:'asadaas'
    }
}
let person2 = person
person.location.street = 'reforme'
delete person.credential.key2
delete person2.credential.key2
console.log(person)

// imprimir cada uno de los valores de la propieda location
for(item in person) {
    if(item === 'location' || item === 'credential') {
        for(item2 in person[item]) {
            console.log(`${item2}: ${person[item][item2]}`)
        }
    } 
}

let koders = [
    {
        name: 'nayeli',
        average: 10,
        location: {
            cp: '55778',
            street:' asadaas'
        }
    },
    {
        name: 'nayeli',
        average: 9
    }
]

koders.forEach((current, index) => {
    console.log(current.average)
})

let averageKoders = koders.reduce((acc, cv ) => {
    return acc + cv.average
}, 0) / koders.length

koders.filter((cv) => {
    return cv.average > 9
})

koders.filter((cv) => {
    if(cv.location) {
        return cv
    }
})

console.log(averageKoders)














