// console.log('dar click a pedir usuario')
// setTimeout( ()=> {
//     console.log('Pidiendo usuarios')
// }, 2000)
// console.log('Imprimir usuarios')

let x = 12
console.log('dar click a pedir usuario')
new Promise( (resolve, reject) => {
    if(x == 10) {
        resolve(x)
    } else {
        reject('El valor no es 10')
    }

    // setTimeout( () => {
    //     x = x * 2
    //     console.log('Pidiendo usuarios')
    //     resolve(x)
    // }, 2000)

}).then( response  => {
    console.log(response)
}).catch(err => {
    console.error(err)
})

let usuarios = [
    {
        id:1,
        nombre:'jorge'
    },
    {
        id:2,
        nombre: 'Luis'
    }
]

const obtenerUsuario = (id) => {
    let promesa = new Promise((resolve, reject) => {
        if(usuarios.find( usuario => usuario.id ===  id)) {
            resolve('El usuario existe')
        } else {
            reject('El usuario no existe')
        }   
    })
    return promesa
}
obtenerUsuario(1)
.then(response => {
    console.log(response)
})
.catch( err => {
    console.log(err)
})








