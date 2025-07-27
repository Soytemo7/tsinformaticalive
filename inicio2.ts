function saludar(nombre:string): string{
    return `Hola ${saludar}`
}

console.log(saludar("Manuel"))

const cuadrado = (n:number) => n*n
console.log(cuadrado(6))

// sobrecarga de funciones

function combinar(a:any,b:any):any{
    return a+b
}

console.log(combinar("Hola"," Muudo"))
console.log(combinar(5,6))

 // genericos

function devolverDatos<T>(dato:T):T{
    return dato
}

console.log(devolverDatos<string>("Hola mundo"))
console.log(devolverDatos<number>(100))
console.log(devolverDatos<boolean>(true))


class Caja<T>{
    private contenido:T
    constructor(value:T){
        this.contenido = value
    }

    contenidoActual():T{
        return this.contenido;
    }
}

const cajaNumeros = new Caja<number>(100)
console.log(cajaNumeros.contenidoActual())

const cajaStrings = new Caja<string>("Hola mundo desde generico")
console.log(cajaStrings.contenidoActual())

// tipos condicionales

type IsString<T> = T extends string ? "Es string":"Es falso"

type test1 = IsString<string>
type test2 = IsString<number>

// tipos de utilidades (partial, readonly, record)


interface Usuario2 {
    nombre:string
    apellido:string
    edad:number
}

const usuarioParcial: Partial<Usuario2> = {
    nombre:"juan"
}

console.log(usuarioParcial);


//readonly

interface Configuracion {
    tema:string
    version:number
}

const config:Readonly<Configuracion>={
    tema:"oscuro",
    version:1.0
}

console.log(config)

// record

type Producto = {
    nombre:string
    precio:number
}

const inventario: Record<string,Producto> = {
    "prod1":{nombre:"Laptop",precio:1000},
    "prod2":{nombre:"Mouse",precio:20},
}

console.log(inventario["prod1"])

// union de tipos

type ID = number | string
let userId: ID
userId = 10
userId = "10"

// interseccion

type Persona = {
    nombre:string
    edad: number
}

type Empleado = {
    empresa:string
    puesto:string
}

type EmpleadoCompleto = Persona & Empleado;

const empleado: EmpleadoCompleto = {
    nombre:"Manuel",
    edad:40,
    empresa: "Google",
    puesto: "Programador"
}

console.log(empleado)

// tipos personalizadso de errores

class DivisionPorCeroError extends Error {
    constructor(){
        super("No se puede dividir por ceor")
        this.name = "DivisionPorCeroError"
    }
}

function dividirSeguro(a:number,b:number):number{
    if(b===0){
        throw new DivisionPorCeroError()        
    }
    return a/b
}

console.log(dividirSeguro(10,0))

//decoradores
// para usarlos, debe irse a tsconfig y al final agregar
// "experimentalDecorators":true

function mensajedeCreacion(constructor: Function){
    constructor.log("Clase creada: ",constructor)
}

@mensajedeCreacion
class Animal {
    nombre:string
    constructor(nombre:string){
        this.nombre = nombre
        console.log("Un animal ha nacido")
    }
}

const perro = new Animal("Firulais")

function descirHolaAntes(target:any,key:string,descriptor:PropertyDescriptor){
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args:any[]){
        console.log("Hola")
        return metodoOriginal.apply(this,args)
    }    
}

class Persona2{
    @descirHolaAntes
    hablar(){
        console.log("Estoy Hablando")
    }
}

// tsc datos.ts --experimentalDecorators

const juan = new Persona2()
juan.hablar()

//  mapped types 
type Usuario3 = {
    nombre:string
    apellido:string
    edad:number
}

type Opcional<T> = {
    [K in keyof T]?: T[K]
}

type usuarioOpcional = Opcional<Usuario3>
const user1: usuarioOpcional = {nombre:"Ana"}


// indexed types

type Usuario4= {
    nombre:string
    apellido:string
    edad:number
}

type EdadUsuario = Usuario4["edad"]
const edad: EdadUsuario = 25

