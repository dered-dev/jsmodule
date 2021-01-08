
let showAll = document.getElementById('showAll')
showAll.addEventListener("click", function(){
    addElements('#listatest', 10, kodersArr)
})

let order__list = document.getElementById('order__list')
order__list.addEventListener("change", function(){
    filterAZ()
})

let aToZ = document.getElementById('orderletter')
if(aToZ !== null) {
    aToZ.addEventListener('change', function(){
        filterAZ()
    })
}

let busqueda = document.querySelector('.search')
busqueda.addEventListener("keyup", function(){
    // console.log(document.querySelector('.search').value)
    // buscaba




})

// insertBefore
// li
// li
// reemplazar
// DOM
// Document Object Model

// BOM 
// Browser Object Model

// Mediante el evento resize
// si la resolucion ancho <= 767  
// aparecer contenido mobile
// desaparecer contenido desktop
// sino
// Desaparecer contenido mobile
// Aparecer contenido desktop
// window.innerWidth
// window.innerHeight

const showHideBox = () => {
    console.log('me ejecuto')
    
    if(window.innerWidth <= 767) {
        document.querySelector('.box_mobile').classList.remove('d-none')
        document.querySelector('.box_mobile').classList.add('d-block')
        document.querySelector('.box_desktop').classList.remove('d-block')
        document.querySelector('.box_desktop').classList.add('d-none')
    } else {
        document.querySelector('.box_mobile').classList.remove('d-block')
        document.querySelector('.box_mobile').classList.add('d-none')
        document.querySelector('.box_desktop').classList.remove('d-none')
        document.querySelector('.box_desktop').classList.add('d-block')
    }
}

window.addEventListener('resize', showHideBox)
// sentencias
window.addEventListener('load', showHideBox)





// window  DOM, BOM
// screen -> 
// history
// navigator
// cookie
// location


// window.location

// function
// document.cookie
// si logged=true
// si existe la cookie logged
// Mensaje: Bienvenido
// sino existe
// Mensaje: User is offline
// loguearlo (setear cookie logged=true)

const isLogged = () => {
    if(document.cookie.includes('logged=true')){
        document.querySelector('#session').innerHTML = 'Bienvenido'
    } else {
        document.querySelector('#session').innerHTML = 'User is offline'
        document.cookie = 'logged=true'
    }
}
window.addEventListener('load', isLogged)




// HomeWork
// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html

// 2. 
// Crear un div con un mensaje de
// "Este sitio se ve mejor en desktop"

// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje

// utilizar css
// no usar inline styles
