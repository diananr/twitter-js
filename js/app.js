window.addEventListener("load", function(){
	
	var enviarTweet = document.getElementById("btn");
	var cajaTexto = document.getElementById("msj");
	var contenedorTwets = document.getElementById("contenedor");
	var conta = document.getElementById("contador");

	cajaTexto.addEventListener("click", function(){
		cajaTexto.rows = 3;
	});
	cajaTexto.addEventListener("keyup", function(e){
			deshabilitarBoton(cajaTexto);
			contadorCaracteres(cajaTexto);
			var tecla = e.keyCode;
			calcularEnters(tecla);
			tamañoContenedor(cajaTexto);
	});
	enviarTweet.addEventListener("click", function(e){
		e.preventDefault();

		if(cajaTexto.value.length <= 140 && cajaTexto.value.length > 0){
			agregarTweet(cajaTexto.value.trim());
			cajaTexto.value = "";
			conta.textContent = "140";
			conta.style.color = "black";
			cajaTexto.rows = 1;
		}

		enviarTweet.disabled = true;
	});

	function agregarTweet(texto){
		var newTweet = document.createElement("div");
		newTweet.innerText = texto;

		contenedorTwets.insertBefore(newTweet, contenedorTwets.childNodes[0]);

		newTweet.classList.add("tweets");

		var fecha = new Date();
		var hora = fecha.getHours();
		var min = fecha.getMinutes();
		var contenHora = document.createElement("div");
		contenHora.innerText = hora + ":" + min;
		newTweet.insertBefore(contenHora,newTweet.childNodes[0]);
	}
	function deshabilitarBoton(cText){
		if(cajaTexto.value.length <= 140 && cajaTexto.value.length > 0){
			enviarTweet.disabled = false;
		}
		else if(cText.value.trim().length > 140 || cText.value.trim().length === 0){
			enviarTweet.disabled = true;
		}
	}
	function contadorCaracteres(texto){
		var caracteres = texto.value.length;
		conta.innerText = 140 - caracteres;

		if(caracteres >= 120 && caracteres < 130){
			conta.style.color = "green";
		}
		else if(caracteres >=130 && caracteres < 141){
			conta.style.color = "orange";
		}
		else if (caracteres >140) {
			conta.style.color = "red";
		}
		else{
			conta.style.color = "black";
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
	function tamañoContenedor(cText){
		if(cText.rows * cText.cols < cText.value.length){
			cText.rows += 1;
		}
	}
});
