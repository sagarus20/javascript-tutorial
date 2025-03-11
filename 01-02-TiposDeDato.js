/*
Ejempos de tipo de Dato en JavaScript
*/ 

//tipo de dato string

var nombre="juan"

console.log(nombre)
nombre = 10.5

console.log(typeof nombre)
//tipo de dato number

var numero=1000

console.log(numero)

//tipo de dato object

var objeto={
    nombre:"Juan",
    apellido:"cardenas",
    telefono:"552425",
}

console.log(objeto)
console.log(objeto.nombre)

console.log(typeof nombre)
//tipo de dato boolean

var bandera=true

console.log(typeof bandera)

//tipo de dato funcion

var funcionamiento=function(){
    
}

console.log( typeof funcionamiento)


//tipo simbolo
var simbolo=Symbol("mi simbolo")

console.log( typeof simbolo)

//tipo clase es una funcion

class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}
console.log(  Persona)
console.log( typeof Persona)

//tipo undefined
var x
console.log( typeof x)

//null ausencia de valor

var y=null
console.log( typeof y)
console.log(  y)

//tipo array
var lista=['as','espada','picas']
console.log( typeof lista)
console.log(  lista)
//empty string

var vacio=''
console.log( typeof vacio)
console.log(vacio)
