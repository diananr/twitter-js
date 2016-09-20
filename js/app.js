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
	});

	cajaTexto.addEventListener("keyup", function(){
			deshabilitarBoton(cajaTexto);
			contadorCaracteres(cajaTexto);

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
		else if(cText.value.length > 139 || cText.value.length == 0){
			enviarTweet.disabled = true;
		}
	}
	function contadorCaracteres(texto){
		var caracteres = texto.value.length;
		conta.innerText = 140 - caracteres;
	}
});
