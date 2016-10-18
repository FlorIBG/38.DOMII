function validateForm(){
	// Para contar si es verdadero o falso la condicion que debe cumplirse
	var validar = true;
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correoElectronico = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var listaDeBicicletas = document.getElementById("Opciones").selectedIndex;
	//Validar que se llene el campo del nombre y que este en mayuscula
	var spanNombre = document.getElementById('errorNombre');
	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  		spanNombre.innerHTML = "No has ingresado ningun nombre";
  		validar = false;
	} else if (/[a-z]/.test(nombre[0])) {
		spanNombre.innerHTML = "Solo se acepta la primera letra en mayúscula en el nombre";
  		validar = false;
	}
	//Validar que se llene el campo del apellido y que este en mayuscula
	var spanApellido = document.getElementById('errorApellido');
	if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
  		spanApellido.innerHTML = "No has ingresado ningun apellido";
  		validar = false;
	} else if (/[a-z]/.test(apellido[0])) {
		spanNombre.innerHTML = "Solo se acepta la primera letra en mayúscula en el apellido";
  		validar = false;
	}
	// Validar correo electronico
	var spancorreoElectronico = document.getElementById('errorEmail');
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (correoElectronico == null || correoElectronico.length == 0 || /^\s+$/.test(correoElectronico)) {
  		spancorreoElectronico.innerHTML = "No has ingresado ningun correo";
  		validar = false;
	} else if (!re.test(correoElectronico)) {
		spancorreoElectronico.innerHTML = "El formato del correo electrónico no es válido";
  		validar = false;
	}
	//Validar contrase;a
	var spanPassword = document.getElementById('errorPassword');
	if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
  		spanPassword.innerHTML = "No has ingresado ninguna contraseña";
  		validar = false;
	} else if (contraseña.length < 6 || contraseña == "password" || contraseña == "123456" || contraseña == "0987654") {
		spanPassword.innerHTML = "La contraseña debe ser mayor a 6 caracteres,no puede ser igual a password ó 123456 ó 098754";
  		validar = false;
	}
	//Validar eleccion de bicicletas
	var spanListaBicicletas = document.getElementById('errorLista');
	if (listaDeBicicletas == null || listaDeBicicletas == 0) {
		spanListaBicicletas.innerHTML = "No elegiste ninguna opción de la lista de bicicletas";
  		validar = false;
	}
	return validar;
}