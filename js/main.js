function validateForm(){
	var spans = document.getElementsByTagName("span");
		while (spans.length>0) {
			spans[0].parentElement.removeChild(spans[0]);
		}
	// Para contar si es verdadero o falso la condicion que debe cumplirse
	var validar = true;
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correoElectronico = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var listaDeBicicletas = document.getElementById("Opciones").value;
	//Validar que se llene el campo del nombre y que este en mayuscula
	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  		var span = document.createElement("span");
			span.innerHTML = "No has ingresado ningun nombre";
		var spanNombre = document.getElementsByClassName("input-box")[0];	
			spanNombre.appendChild(span);
  		validar = false;
	} else if (/[a-z]/.test(nombre[0])) {
		var span = document.createElement("span");
			span.innerHTML = "Solo se acepta la primera letra en mayúscula en el nombre";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[0];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	}
	//Validar que se llene el campo del apellido y que este en mayuscula
	if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
  		var span = document.createElement("span");
			span.innerHTML = "No has ingresado ningun apellido";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[1];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	} else if (/[a-z]/.test(apellido[0])) {
		var span = document.createElement("span");
			span.innerHTML = "Solo se acepta la primera letra en mayúscula en el apellido";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[1];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	}
	// Validar correo electronico
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (correoElectronico == null || correoElectronico.length == 0 || /^\s+$/.test(correoElectronico)) {
  		var span = document.createElement("span");
			span.innerHTML = "No has ingresado ningun correo";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[2];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	} else if (!re.test(correoElectronico)) {
		var span = document.createElement("span");
			span.innerHTML = "El formato del correo electrónico no es válido";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[2];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	}
	//Validar contrase;a
	if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
  		var span = document.createElement("span");
			span.innerHTML = "No has ingresado ninguna contraseña";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[3];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	} else if (contraseña.length < 6 || contraseña == "password" || contraseña == "123456" || contraseña == "0987654") {
		var span = document.createElement("span");
			span.innerHTML = "La contraseña debe ser mayor a 6 caracteres,no puede ser igual a password ó 123456 ó 098754";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[3];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	}
	//Validar eleccion de bicicletas
	if (listaDeBicicletas == null || listaDeBicicletas == "0") {
		var span = document.createElement("span");
			span.innerHTML = "No elegiste ninguna opción de la lista de bicicletas";
		var spanNombreMayuscula = document.getElementsByClassName("input-box")[4];	
			spanNombreMayuscula.appendChild(span);
  		validar = false;
	}
	return validar;
}