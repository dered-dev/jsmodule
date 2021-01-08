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

