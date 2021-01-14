// functions.js

// Create user
const createNewUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    xhttp.send(
        JSON.stringify({
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Read user
const readUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
    xhttp.send()
}

// Update and replace
const updateAndReplaceUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }

    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge",
        lastname: "Camarillo",
        urlPhoto: "https://loremflickr.com/320/240/person"
      })
    )
}

// Update and modify 
const updateAndModifyUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge Luis"
      })
    )
}

// Delete 
const deleteUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send()
    
}


// function request all methods
const requestAjax = (url, funcionALlamar, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            funcionALlamar(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify(data))
    }
}

// delete User
const deleteUserBtns = () => {
    document.querySelectorAll(".btn__delete__user").forEach((btn)=> {
        
        btn.addEventListener('click', function(user) {
            console.log(user)
            console.log(user.target)
            console.log(user.target.classList)
            console.log(user.target.dataset.id)
            if(user.target.classList.contains('btn__delete__user')) {
                // id usuario
                let idUser  = user.target.dataset.id
                // request
                requestAjax(
                    `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`,
                    redirectToUsers,
                    'DELETE'
                )
            }
        });
    })
}

// show users 
const showUsers = (response) => {
    let users = response
    let usersList = ''
    let iconDelete = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>`
    for(user in response ) {
        let dataUsuario = response[user]
        usersList += `
            <li class="d-flex px-3 py-2 shadow-sm mb-2 rounded justify-content-between item__user"> 
                <div class="d-flex"> 
                    <span class="d-flex rounded-circle icon__user" style='background-image:  url(${dataUsuario.urlPhoto})'></span> 
                    <p class="d-flex text-left px-2">${dataUsuario.name} ${dataUsuario.lastname} </p> 
                </div> 
                <div class="d-flex"> 
                    <a href="user.html?id=${user}" class="btn btn-link">Ver usuario</a> 
                    <a href="update-user.html?id=${user}" class="btn btn-link">Editar usuario</a> 
                    <button class="btn btn-danger btn__delete__user" data-id="${user}" data-user="${user}" data-algo="${user}">Eliminar ${iconDelete}</button>    
                </div> 
            </li>
        `
    }
    document.querySelector('.list__users').innerHTML = usersList
    deleteUserBtns()
}
// print user card
const printUser = (arrData) => {
    if(arrData !== null) {

        document.querySelector('#card__user').innerHTML = `
            <img src="${arrData.urlPhoto}" class="mb-4 rounded-circle img__user__profile" >
            <h5 class="card-title name__user">${arrData.name}</h5>
            <p class="card-text email__user">${arrData.lastname}</p>
        `
    } else {
        document.querySelector('#card__user').innerHTML = `
            <p class="card-text ">El usuario no existe</p>
        `
    }
}
// create new user
const redirectToUsers  = (res) => {
    window.location.pathname = '/'
}

// home.js
if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
    // estoy en home
    requestAjax(
    'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json',
    showUsers,
    'GET')
}

if(window.location.pathname === '/user.html'){
    let url = new URLSearchParams(location.search)
    let id = url.get('id')
    // estoy en home
    requestAjax(
    `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${id}.json`,
    printUser,
    'GET')    
}

let btn__send__form = document.querySelector('.btn__send__form')
if(btn__send__form) {
    // get data user

    btn__send__form.addEventListener('click', () => {
        console.log('sending form')
        // obtener los datos a guardar
        let name = document.querySelector('#name__input').value
        let lastName = document.querySelector('#lastname__input').value
        let urlPhoto = document.querySelector('#photo__input').value
        // validacion
        if(name === '' || lastName === '' || urlPhoto === '') {
            document.getElementById('alert__form').classList.remove('d-none')
            setTimeout(()=> {
                document.getElementById('alert__form').classList.add('d-none')
            }, 3000)
        } else {
            let userToCreate = {
                lastname: lastName,
                urlPhoto: urlPhoto,
                name: name,
            }
            requestAjax(
                'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json',
                redirectToUsers,
                'POST',
                userToCreate
            )
        }
    })
}

// update user.html




