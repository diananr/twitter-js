window.addEventListener("load", function(){
	
	var enviarTweet = document.getElementById("btn");
	var cajaTexto = document.getElementById("msj");
	var conta = document.getElementById("contador");

	enviarTweet.addEventListener("click", function(e){
		e.preventDefault();
		agregarTweet(cajaTexto.value);
		cajaTexto.value = "";
		conta.textContent = "140";
		enviarTweet.disabled = true;

		conta.classList.remove("amarillo");
		conta.classList.remove("anaranjado");
		conta.classList.remove("rojo");
	});

	cajaTexto.addEventListener("keyup", function(e){
			deshabilitarBoton(cajaTexto);
			contadorCaracteres(cajaTexto);
			var tecla = e.keyCode;
			calcularEnters(tecla);
	});
	function agregarTweet(texto){
		var newTweet = document.createElement("div");
		newTweet.innerText = texto;

		var contenedorTwets = document.getElementById("contenedor");
		contenedorTwets.insertBefore(newTweet, contenedorTwets.childNodes[0]);

		newTweet.classList.add("tweets");
	}
	function deshabilitarBoton(cText){
		if(cText.value.length > 0){
			enviarTweet.disabled = false;
		}
		else if(cText.value.length > 140 || cText.value.length == 0){
			enviarTweet.disabled = true;
		}
	}
	function contadorCaracteres(texto){
		var caracteres = texto.value.length;
		conta.innerText = 140 - caracteres;

		if(caracteres >= 120 && caracteres < 130){
			conta.classList.add("amarillo");
			conta.classList.remove("anaranjado");
			conta.classList.remove("rojo");
		}
		else if(caracteres >=130 && caracteres < 141){
			conta.classList.add("anaranjado");
			conta.classList.remove("amarillo");
			conta.classList.remove("rojo");
		}
		else if (caracteres >140) {
			conta.classList.remove("amarillo");
			conta.classList.remove("anaranjado");
			conta.classList.add("rojo");
		}
		else{
			conta.classList.remove("amarillo");
			conta.classList.remove("anaranjado");
			conta.classList.remove("rojo");
		}
	}
	function calcularEnters(tecla){
		if(tecla == 13){
			cajaTexto.rows +=1;
		}
		if(tecla == 8){
			cajaTexto.rows -=1;
			if(cajaTexto.rows < 3)
			cajaTexto.rows = 2;
		}
	}
});

