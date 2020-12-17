

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
// clonar un objeto
let person2 = person
// actualizar una propiedad
person.location.street = 'reforme'
// eliminar una propiedad
delete person.credential.key2

// imprimir cada uno de los valores de la propieda location
// y credential
for(item in person) {
    if(item === 'location' || item === 'credential') {
        for(item2 in person[item]) {
            console.log(`${item2}: ${person[item][item2]}`)
        }
    } 
}

// obj koders
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

// imprimir el promedio de cada koder
koders.forEach((current, index) => {
    console.log(current.average)
})

// imprimir el promedio general de los koders
let averageKoders = koders.reduce((acc, cv ) => {
    return acc + cv.average
}, 0) / koders.length
console.log(averageKoders)

// Filtrar los koders que tienen promodio mayor a 9
koders.filter((cv) => {
    return cv.average > 9
})

// Filtrar los koders que tengan la propiedad location
koders.filter((cv) => {
    if(cv.location) {
        return cv
    }
})












