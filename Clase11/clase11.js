let diaSemana = prompt("¿Que dia es hoy?");

switch (diaSemana){
    case "lunes":
        alert("Se realiza ejercicios de Brazos");
        break;

    case "martes":
        alert("Se realiza ejercicios de Pecho");
        break;

    case "miercoles":
        alert("Se realiza ejercicios de Piernas");
        break;

    case "jueves":
        alert("Se realiza Caminata de 5 km");
        break;

    case "viernes":
        alert("Se realiza ejercicios de Brazos");
        break;
    
    case "sabado":
        alert("Se realiza ejercicios de Pecho");
        break;

    case "domingo":
        alert("Se realiza ejercicios de Piernas");
        break;
    
    default:
        alert("Escribe el dia de la semana en minusculas.");
}

// -------------------------------------- //

for(i=20; i<=70; i++){
    document.write("El numero es: " + i + "<br>");
}

// -------------------------------------- //

let cantidadSaludo = prompt("Ingrese la cantidad de saludos");

while (cantidadSaludo>0){

    document.write("Hola Mundo" + "<br>");
    cantidadSaludo = cantidadSaludo - 1;

}