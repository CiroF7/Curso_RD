/* Con mozzilla se ejecuta bien los mensajes y con los demas navegadores desaparece rapidamente los mensajes*/

var mensaje;
var IngresoConfirm = window.confirm("¿Es mayor de edad?");

    if (IngresoConfirm == true) {
        mensaje = "Ha ingresado al sitio, ya que es mayor de edad";
	} else {
	    mensaje = "Entra al sitio bajo su responsabilidad";
	}
	alert(mensaje);

function saliendo(){
    alert("Usted esta saliendo de nuestro sitio");
}

