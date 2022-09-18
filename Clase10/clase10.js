let nombre = "Programacíon" + " Fácil";
let saludo = "Les doy la bienvenida a ";
let nombre2 = " de Revolucion Digital.";
let fraseCompleta = saludo + nombre + nombre2;
 
console.log(fraseCompleta);

// -------------------------------------- //

let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" 
+ " sitios web poderosos.";

console.log(frase);

// -------------------------------------- //

let numeroString1 = "10";
let textoString1 = " = Diez, ";
let numeroString2 = "20";
let textoString2 = " = Veinte, ";
let numeroString3 = "30";
let textoString3 = " = Treinta.";

let concatenaNumeros = numeroString1 + textoString1 
+ numeroString2 + textoString2 + numeroString3 + textoString3;

console.log(concatenaNumeros);

// -------------------------------------- //

var name = prompt("Cual es tu nombre?");
var age = prompt("Cuál es tu edad:?");

console.warn(name);
console.warn(age);

// -------------------------------------- //

let sexo;
let edad; 

sexo = prompt("Defina si es hombre o mujer?");
edad = prompt("Introduce tu edad");

if (sexo = "hombre"){
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
} else if (sexo = "mujer"){
    if (edad >= 20){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
}