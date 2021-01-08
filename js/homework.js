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

const checkSession = () => {
    const cookieUser = document.cookie
    if(cookieUser.includes('sessionuser=1234')){
        if(window.location.pathname !== '/user.html'){
            location.pathname = '/user.html'
        }
    } else {
        document.cookie = 'sessionuser=1234'
        location.pathname = '/login.html'
    }
}
const checkResolution = () => {
    let messageContainer = document.querySelector('.message__desktop')
    if(window.innerWidth <= 767){
        messageContainer.classList.add('open')
    } else {
        messageContainer.classList.remove('open')
    }
}


window.addEventListener('load', function(){
    checkSession()
    checkResolution()
})
window.addEventListener('resize', function(){
    checkResolution()
})

