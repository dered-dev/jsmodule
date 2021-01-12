// create
// fetch(`https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         id: 1,
//         name: "Jorge",
//         lastname: "Camarillo",
//         urlPhoto: "https://loremflickr.com/320/240/person"
//     })
// })
// .then(response => {
//     console.log(response)
//     return response.json()
// })
// .then(newUser => {
//     console.log(newUser)
// })

// // read
// fetch(`https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json`, {
//     method: 'GET'
// })
// .then(response => {
//     return response.json()
// })
// .then(koders => {
//     console.log(koders)
// })


// // Update
// fetch(`https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQngx3MO3DyNSWX-Soa.json`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         id: 1,
//         lastname: "Camarillo C",
//         name: "Jorge",
//         urlPhoto: "https://loremflickr.com/320/240/person"
//     })
// })
// .then(response => {
//     return response.json()
// })
// .then(userUpdated => {
//     console.log(userUpdated)
// })



// fetch(`https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQngx3MO3DyNSWX-Soa.json`, {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         id: 1,
//         lastname: "Camarillo Cristobal",
//     })
// })
// .then(response => {
//     return response.json()
// })
// .then(userUpdated => {
//     console.log(userUpdated)
// })

// // delete
// fetch(`https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQngx3MO3DyNSWX-Soa.json`, {
//     method: 'DELETE'
// })
// .then(response => {
//     return response.json()
// })
// .then(userDeleted => {
//     console.log(userDeleted)
// })