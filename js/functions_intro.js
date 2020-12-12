/**
 * Functions introduction
 */

/**
 *  Declaration
 *  function nameFunction (paramter, parameter, ...) {
        // sentences
    }
 */

/**
 * call function
 * nameFunction() or
 * nameFunction(arg)
 */
 


function getName () {
    const name = prompt('¿Cuál es tu nombre?')
    console.log(name)
}

function nameReverse (stringName)  {
    const stringToReverse = stringName
    let stringReversed = ''
    for(let i = stringToReverse.length - 1; i >= 0 ; i--) {
        stringReversed += stringToReverse[i]
    }
    console.log(stringReversed)
}

function add (valOne, valTwo)  {
    console.log(valOne + valTwo)
}