
const obj = {
    name: 'jorge',
    lastname: 'camarillo',
    set newname (name) {
        this.name = name.valor1
    }
}

Object.defineProperty(obj,'fullname', {
    get : function () {
        return this.name +' '+this.lastname
    }
})


let dataUsers = [
    {
        name: 'jorge',
        lastName: 'camarillo',
        age: 24
    },
    {
        name: 'jorge',
        lastName: 'cristobal'
    }
]

// dataUsers.forEach((element)=>{
//     Object.defineProperty(element, 'fullname', {
//         get : function () {
//             return this.name +' '+this.lastname
//         }
//     })
    
// })

dataUsers.forEach((element)=>{
    Object.defineProperties(element,{
        "getUpper" : {
            get : function(){
                return this.name.toUpperCase() +' '+this.lastname.toUpperCase()
            }
        },
        "lower" : {
            get : function(){
                return this.name.toLowerCase() +' '+this.lastname.toLowerCase()
            }
        },
        "setnewname" : {
            set : function(nuevoNombre){
                this.name = nuevoNombre
            }
        }
    })
})




