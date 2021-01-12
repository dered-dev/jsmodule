// Asynchronous JavaScript And XML
// JSON
// XML

// GET 
const getData = (url, funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            // status code
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                funcionALlamar(selector, objectResponse)
            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    
    })
    request.open(method,url)
    request.send()
}

const printUsers = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `
            <li>${user.name} ${user.phone} <a href="user.html?id=${user.id}">Ver usuario</a></li>
        `
    });
    document.querySelector(selector).innerHTML = listData
}

const printPosts = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.id}. ${user.title} ${user.body} </li>`
    });
    document.querySelector(selector).innerHTML = listData
}


// loadUsers()



// load post
const getposts = document.getElementById('getposts')
if(getusers){
    getposts.addEventListener('click', function(){
        getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
    })
}


const printUser = (selector, arrData) => {  
    document.querySelector(selector).innerHTML = `
    <h5 class="card-title name__user">${arrData.name}</h5>
    <p class="card-text email__user">${arrData.email}</p>
    <a href="${arrData.website}" target="_blank" class="btn btn-primary website__user">Ver perfil</a>
    `
}

const userLocation = window.location;
if(userLocation.pathname === '/user.html') {
    let url = new URLSearchParams(location.search)
    let id = url.get('id')
    if(id >= 1 && id < 11){
        getData(`https://jsonplaceholder.typicode.com/users/${id}`, printUser, '#card__user')
    } else {
        document.querySelector('#card__user').innerHTML = `
        <p class="card-text email__user">El usuario no existe</p>        
        `
    }
}


// nuevo usuario
const urlDB = 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/'

let newUser  = {
    id: 1,
    lastname: "Camarillo",
    name: "Jorge",
    urlPhoto: "https://loremflickr.com/320/240/person",
}


const createUser  = () => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            // status code
            if(request.status >= 200 && request.status <= 299){
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('POST', `${urlDB}users/.json`)
    request.send(
        JSON.stringify({
            id: 2,
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
