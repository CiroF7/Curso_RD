function envio(){

	var respuesta;
	var opcion = window.confirm("¿Vive en San Nicolas o en un area menor a 40km?");

	if (opcion == true) {
		respuesta = "Envio Gratis";
	} else {
		respuesta = "Debe pagar $800 adicionales";
	}

	document.getElementById("textoenvio").innerHTML=respuesta;
}