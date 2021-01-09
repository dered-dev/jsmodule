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
    console.log(arrData)
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.name} ${user.phone} <a href="${user.website}">Ir a sitio web</a></li>`
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

document.getElementById('getusers').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
})

document.getElementById('getposts').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
})



