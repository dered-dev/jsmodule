/**
 * onchange() lo tiene que disparar el selector
 * get value option selected 
 * document.getElementById('orden').value
 * 1 función
 * 1 metodo
 * usar innerHTML
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
 * ascendente a - z
 * descendente z - a
 * 
 */


let selectOrder = document.getElementById('order__list')

const filterKodersSelectAD = (arr) => {
    let order = document.getElementById('order__list').value
    let fakeArr = [...arr]
    let orderArray = fakeArr.sort()
    
    if(order === 'a'){
        return orderArray
    } else if(order === 'd'){
        return orderArray.reverse()
    } else {
        return arr
    }
}

const filterKodersSelectAZ = (letter ) => {
    let filtrados = kodersArr.filter((koder)=> {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    return filtrados
}

// spread operator
// let variableoriginal = [2,1,3]
// spread operator
// let otraVariable = [...variableoriginal]

// let otraVariable = []
// for(let i = 0; i< variableor.length; i++){
//     otraVariable.push(variableoriginal[i])
// }

const filterAZ = () => {
    let valorderaz = ''
    if(document.getElementById('orderletter')){
        let valorderaz = document.getElementById('orderletter').value
    }
    
    let arrayKoders = filterKodersSelectAZ(valorderaz)
    let resultadoKoders = filterKodersSelectAD(arrayKoders)
    addElements('#lista', resultadoKoders.length , resultadoKoders)
}



