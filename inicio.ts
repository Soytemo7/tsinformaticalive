//  npm install -g typescript
// installa extension typescript en vsc
//  tsc --init
// tsc hello.js
// node hello.js

function greet(name:string):string{
    return "hello"
}

let user = "world";
console.log(greet(user))

// arrrays

let numeros: number[] = [1,2,3,4,5]

// tuplas

let persona: [string,number] = ["Juan",40]

//enum

enum Color{
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Verde

//any

let dato: any = "hola mundo"
dato = 100
dato = true

//unknown  (se debe comprobar su tipo antes)

let valor: unknown = "Puedo ser cualquie cosa"

valor = false;

if(typeof valor=== "boolean"){
    console.log("Es un booleano")
}

//void para funciones (no devuelve valor)


function saludar(): void{
    console.log("Hola mundo")
}

saludar()

// never  no termina una funcion normal

function lanzarError(mensaje:string): never{
    throw new Error(mensaje)
}

// interfaces

interface persona {
    nombre:string
    edad:number
    sexo:string
}

const usuario:persona={
    nombre:"Manuel",
    edad:32,
    sexo:"M"
}

// interfaz en clases

interface Vehiculo{
    marca:string
    velocidad:number
    acelerar():void;
}

class Coche implements Vehiculo{
    marca: string
    velocidad: number;

    constructor(marca:string,velocidad:number){
        this.marca =marca
        this.velocidad =velocidad
    }

    acelerar(){
        console.log("Acelerando...")
    }
}

const micoche = new Coche("Toyota",200)
micoche.acelerar()

//extension de interfaces

interface Animal{
    nombre:string
    haciendoSonido():void;
}

interface Perro extends Animal{
    raza:string
}

class Labrador implements Perro{
    nombre:string
    raza:string

    constructor(nombre:string,raza:string){
        this.nombre = nombre;
        this.raza = raza;
    }

    haciendoSonido(){
        console.log("Guau")
    }
 }

 const miPerro = new Labrador("Toby","Labrador")
 miPerro.haciendoSonido()

 // tipos alias mas flexible que interface

 type Usuario = {
    nombre:string
    correo:string
 }

 const nuevoUsuario: Usuario = {
    nombre: "juan",
    correo:"fdsada"
 }

 console.log(nuevoUsuario.nombre)


// tipos literales


type Colores = "rojo" | "verde" | "azul";

let colorFavorito2:Colores

colorFavorito2 = "rojo"

