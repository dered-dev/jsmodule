
const kodersArr = ['Ale', 'ale2', 'alejandra','oscar','ruben', 'brian']

// Exercise
const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}

// Exercise filter
const filterKoders = (letter) => {
    let filtrados = kodersArr.filter((koder)=> {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista', filtrados.length , filtrados)   
}
