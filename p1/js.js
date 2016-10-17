function verificaFormularioAcceso(){
	var formulario = document.formularioAcceso;
	var error = [];

	if (formulario[0].name == "usuario"){ // usuario.
		if(formulario[0].value.length == 0){
			error[0] = 'Nombre';
   			todoCorrecto = false;
   		}
   	}

   	if (formulario[1].name == "pass"){ // contraseña.
		if(formulario[1].value.length == 0){
			error[1] = 'Contraseña';
   			todoCorrecto = false;
   		}
   	}

	if (todoCorrecto == true){
		formulario.submit();
	}else{
		var str = 'Los siguientes campos no pueden estar vacios:\n';
		for(var i=0; i<error.length; i++){
			if(error[i] != null){
				str += error[i] + '\n';
			}
		}
		alert(str);
	}
}

function verificaFormularioReserva(){
	var error = [];
	var expresionRegular3 = /^[\w.-]*[a-z][a-z][a-z]$/i;

	if (!expresionRegular3.test(document.getElementById('nombre').value)){ // nombre.
		error[0] = 'El Nombre ha de ser al menos de 3 letras y no contener numeros';
		todoCorrecto = false;
   	}

   	var numeroTelefono = document.getElementById('telefono');
	var expresionRegular1=/^([0-9]+){9}$/;//<--- con esto vamos a validar el numero
	var expresionRegular2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco
	 
	if(numeroTelefono.value=='' || expresionRegular2.test(numeroTelefono.value) || !expresionRegular1.test(numeroTelefono.value)){
		error[1] = 'Verifique el campo Telefono.';
   		todoCorrecto = false;
	}
	  
   	var expresion = /^[a-z]+[a-z]+[a-z]+@[a-z]+[a-z]+[a-z]+\.[\w.-]*[a-z][a-z]$/i;
   	//alert(document.getElementById('direccion').value);

   	if (!expresion.test(document.getElementById('direccion').value)){ // email.
		error[2] = 'El E-mail ha de seguir la siguiente estructura: (xyz@xyz.co).';
		todoCorrecto = false;
   	}

   	if (validarFechaMenorActual(document.getElementById('fecha').value)){ // fecha.
		error[3] = 'La fecha ha de ser posterior a la fecha de hoy.';
		todoCorrecto = false;
   	}

   	if (document.getElementById('comensales').value <= 0){ // comensales.
		error[4] = 'Debe haber al menos 1 comensal para efectuar la reserva.';
   		todoCorrecto = false;
   	}

	if (todoCorrecto == true){
		formulario.submit();
	}else{
		var str = 'Error en los siguiente elementos:\n';
		for(var i=0; i<error.length; i++){
			if(error[i] != null){
				str += error[i] + '\n';
			}
		}
		alert(str);
	}
}

function validarFechaMenorActual(date){
	var x = new Date();
	var fecha = date.split("-");
	x.setFullYear(fecha[0],fecha[1]-1,fecha[2]);
	var today = new Date();

	if (x > today)
		return false;
	else
		return true;
}

function verificaFormularioPedido(){
	var formulario = document.FormularioPedido;
	var error = [];

	if (formulario[0].name == "busqueda"){ // busqueda.
		if(formulario[0].value.length == 0){
			error[0] = formulario[0].name;
   			todoCorrecto = false;
   		}
   	}

	if (todoCorrecto == true){
		formulario.submit();
	}else{
		alert('Los siguientes campos no pueden estar vacios:\nBusqueda de Pedido.\n');
	}
}