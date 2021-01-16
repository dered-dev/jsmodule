

$(function(){
    // GET

    const paintUsers = (users)  => {
        console.log(users)
        let usersHtml = ''
        for(item in users) {
            usersHtml += `
                <tr>
                    <td>${users[item].name}</td>
                    <td>${users[item].lastname}</td>
                    <td><a href="${users[item].urlPhoto}">Photo</a></td>
                    <td>
                        <a href="show-user.html?id=${item}">Ver</a>
                        <a href="update-user.html?id=${item}">Actualizar</a>
                        <a data-id="${item}">Eliminar</a>
                    </td>
                </tr>
            `
        }
        
        $('.users .table tbody').html(usersHtml)

    }
    if($('.users').length > 0){
        $.ajax({
            url: "https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json",
            method: 'GET'
        }).done(function(response) {
            paintUsers(response)
            
        }).fail(function(err){
            console.log(err)
            console.log(err.status)
            console.log(err.statusText)
            console.log('todo mal')
        })
    }


    if($('#form-new-user').length > 0){
        $('.send__form').click(function(){
            // create user object
            let userObject = {
                lastname: $('#name__input').val(),
                name: $('#lastname__input').val(),
                urlPhoto: $('#url__photo').val()
            }
            $.ajax({
                url: "https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json",
                method: 'POST',
                data: JSON.stringify(userObject)
            }).done(function(response) {
                console.log(response)
                $('#alert__form').css('display','block!important')
            }).fail(function(err){
                console.log(err)
                console.log(err.status)
                console.log(err.statusText)
                console.log('todo mal')
            })
        })
    }

    

    // listado
    // new user

    // TODO
    // update user
    // UPDATE

    // delete User
    // DELETE


    

})