

// accesors


let obj = {
    name: 'ruben',
    lastname: 'flores',
    age: 29,
    assigments: [
        {
            na: 'español',
            ave: 90
        },
        {
            na: 'matematicas',
            ave: 90
        }
    ],  
    getAverage: function(){
        let assigments = this.assigments
        let total = assigments.reduce((acc, cv)=> {
            return acc + cv.ave
        }, 0)
        return total / assigments.length
    },
    getfullname: function() {
        return this.name + ' ' + this.lastname
    },
    saltar: function() {
        return `${this.name} esta saltando`
    },
    getYearsOld: function(){
        return `${this.age} años`
    }
}
console.log(obj.getfullname())

let koder = {
    email: 'jorgec@kodemia.mx',
    emailalt: 'jorgec@kodemia.mx',
    name: 'jorge',
    lastname: 'camarillo',
    nickname: 'yorch',
    gender: 'M',
    birthday: '12/05/1991',
    bootcamp: 'python',
    generation: 1,
    weight: 81,
    height: 1.77,
    moduls: [
        {
            na: 'maquetado',
            ave: 90
        },
        {
            na: 'JS',
            ave: 90
        }
    ],
    absences: [
        {
            date: '2020/12/15',
            ispresent: false
        },
        {
            date: '2020/12/16',
            ispresent: true
        },
        {
            date: '2020/12/17',
            ispresent: false
        },
    ],
    get porcentAbsences() {
        let absences = this.absences
        return absences.reduce( (acc, cv) => {
            if(cv.ispresent === false) {
               return acc + 1
            } else {
                return acc
            }
        }, 0)
    },
    get fullName () {
        return this.name + ' ' + this.lastname
    },
    get Age (){
        let date = this.birthday.slice(this.birthday.length -4);
        return `${this.getFullName()} tiene ${2020 - date} años`;
    },
    get Average (){
        let moduls = this.moduls
        let total = moduls.reduce((acc, cv)=> {
            return acc + cv.ave
        }, 0)
        return total / moduls.length
    },
    get IMC (){
        return this.weight / (this.height * this.height)
    },
    set newbootcamp (newBootcamp) {
        this.bootcamp = newBootcamp
    },
    set customProperty (nameProperties){
        this[nameProperties.nameProperty] = nameProperties.valuePro
    },

}
console.log(koder.fullName)
koder.newbootcamp = 'JS'
koder.customProperty = {
    nameProperty: 'customPr',
    valuePro: [1,2,3,4] 
}


console.log(koder.fullName)

koder.setNewProperty('newproperty', [1,2,3])

// koder.bootcamp = 'JS'
console.log(koder.setBootcamp('JS'))
console.log(koder.setBootcamp('JS'))
console.log(koder.getAge())
console.log(koder.getAverage())
console.log(koder.getIMC())
console.log(koder)







