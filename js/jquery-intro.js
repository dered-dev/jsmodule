

$(function(){
   
    console.log('Document ready')
    

    // selectores 
    // $(selector).action()
    // $('.list__item').click()
    // $('.list__item').mouseenter()
    // $('.list__item').focus()
    // $('.list__item').blur()


    // $('.list__item').css()

    // $('.list__item').attr()
    
    // $('.list__item').fadeIn()
    // $('.list__item').fadeOut()
    
    // // mostrar / ocultar elementos
    // $('.list__item').show()
    // $('.list__item').hide()
    // $('.list__item').toggle()

    // // add Class
    // $('body ol li').addClass('list__item')
    // $('body ol li').removeClass('list__item')
    // $('body ol li').toggleClass('list__item')
    // modificar atributos

    // Agregar evento
    $('#show').click(function(){
        // show, slideDown, fadeIn,
        // $(selector).action() 
        $('.contenido').fadeIn()
        
    })

    $('#hide').click(function(){
        // hide, slideUp, fadeOut,
        // $(selector).action() 
        $('.contenido').fadeOut()
    })

    $(selector).addClass()
    $(selector).removeClass()
    $(selector).attr('atributo','valor')

    // getter y setter
    
    $(s).css('propiedad','valor')
    $(s).css({
        'propiedad':'valor',
        'propiedad':'valor'
    })
    
 
})