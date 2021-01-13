let x  = 10

console.log('1. Iniciando el proceso')
setTimeout(()=> {
    x = x * 2
    console.log('2. Proceso terminado')
})
console.log('3. El resultado es', x)


// Definición de promesa
const promesa = new Promise( (resolve, reject) => {
    setTimeout(()=> {
        x = x * 2
        console.log('2. Proceso terminado')
        resolve(x)
    })
})  

console.log('1. Iniciando el proceso')
promesa.then(response => {
    console.log('3. El resultado es', response)
})


// 
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
let telefonos = [
    {
        id:1,
        nombre:'3131313131'
    },
    {
        id:2,
        nombre: '423424232'
    }
]


const obtenerUsuario = id => {
    return new Promise( (resolve, reject) => {
        if(usuarios.find(usuario => usuario.id === id)) {
            resolve('El usuario existe')
        } else  {
            reject('El usuario no existe')
        }
    })
}

const obtenerTelefono = id => {
    return new Promise( (resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)) {
            resolve('El telefono')
        } else  {
            reject('El telefono no existe')
        }
    })
}

obtenerUsuario()
.then(response => {
    console.log(response)
})
.catch(err=> {
    console.error(err)
})