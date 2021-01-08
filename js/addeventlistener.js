
let showAll = document.getElementById('showAll')
showAll.addEventListener("click", function(){
    addElements('#lista', 10, kodersArr)
})



let aToZ = document.getElementById('orderletter')
if(aToZ !== null) {
    aToZ.addEventListener('change', function(){
        filterAZ()
    })
}


// h0mework
// function check search

const search  = () => {
    let searchValue = document.querySelector('.search').value
    const filterBySearch = kodersArr.filter( (koder) => {
        return koder.toLowerCase().includes(searchValue.toLowerCase())
    })
    let resultadoKoders = filterKodersSelectAD(filterBySearch)
    addElements('#lista', resultadoKoders.length , resultadoKoders)
}

let order__list = document.getElementById('order__list')
order__list.addEventListener("change", function(){
    search()
})

let busqueda = document.querySelector('.search')
busqueda.addEventListener("keyup", function(){
    search()
})
