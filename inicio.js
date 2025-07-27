//  npm install -g typescript
// installa extension typescript en vsc
//  tsc --init
// tsc hello.js
// node hello.js
function greet(name) {
    return "hello";
}
var user = "world";
console.log(greet(user));
// arrrays
var numeros = [1, 2, 3, 4, 5];
// tuplas
var persona = ["Juan", 40];
//enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
//any
var dato = "hola mundo";
dato = 100;
dato = true;
//unknown  (se debe comprobar su tipo antes)
var valor = "Puedo ser cualquie cosa";
valor = false;
if (typeof valor === "boolean") {
    console.log("Es un booleano");
}
//void para funciones (no devuelve valor)
function saludar() {
    console.log("Hola mundo");
}
saludar();
// never  no termina una funcion normal
function lanzarError(mensaje) {
    throw new Error(mensaje);
}
var usuario = {
    nombre: "Manuel",
    edad: 32,
    sexo: "M"
};
var Coche = /** @class */ (function () {
    function Coche(marca, velocidad) {
        this.marca = marca;
        this.velocidad = velocidad;
    }
    Coche.prototype.acelerar = function () {
        console.log("Acelerando...");
    };
    return Coche;
}());
var micoche = new Coche("Toyota", 200);
micoche.acelerar();
var Labrador = /** @class */ (function () {
    function Labrador(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }
    Labrador.prototype.haciendoSonido = function () {
        console.log("Guau");
    };
    return Labrador;
}());
var miPerro = new Labrador("Toby", "Labrador");
miPerro.haciendoSonido();
