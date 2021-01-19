

$(function(){
    // GET

    const paintUsers = (users)  => {
        console.log(users)
        let usersHtml = ''
        for(item in users) {
            usersHtml += `
                <tr>
                    <td class="tdname">${users[item].name}</td>
                    <td>${users[item].lastname}</td>
                    <td><a href="${users[item].urlPhoto}">Photo</a></td>
                    <td>
                        <a href="show-user.html?id=${item}">Ver</a>
                        <a href="update-user.html?id=${item}">Actualizar</a>
                        <a data-id="${item}" class="delete__user" data-bs-toggle="modal" data-bs-target="#mymodal">Eliminar</a>
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
            //console.log(response)
            // let arr = []
            // for(item in response) {
            //     arr.push(response[item])
            // }
            // console.log(arr.reverse())
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

    $('#delete__user__ok').click(function(){
        console.log('eliminando')
        let iduser = $(this).data('id')
        $.ajax({
            url: `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${iduser}.json`,
            method: 'DELETE'
        }).done(function(response) {
            console.log('usuario eliminado')
            location.pathname = '/ajax.html'
        }).fail(function(err){
            console.log(err)
            console.log(err.status)
            console.log(err.statusText)
            console.log('todo mal')
        })
    })

    $('.users').on('click','.delete__user', function(){
        let iduser = $(this).data('id')
        $('#mymodal #delete__user__ok').attr('data-id', iduser)
    })

    $('.users').on('click','.tdname', function(){
        console.log('click en el nombre')
    })


    // listado
    // new user

    // TODO
    // update user
    // UPDATE

    // delete User *
    // DELETE


    

})