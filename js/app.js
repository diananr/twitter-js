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
		conta.style.color = "black";
		cajaTexto.rows = 2;
	});
	cajaTexto.addEventListener("keyup", function(e){
			deshabilitarBoton(cajaTexto);
			contadorCaracteres(cajaTexto);
			var tecla = e.keyCode;
			calcularEnters(tecla);
			tamañoContenedor(cajaTexto);
	});

	function agregarTweet(texto){
		var newTweet = document.createElement("div");
		newTweet.innerText = texto;

		var contenedorTwets = document.getElementById("contenedor");
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
			conta.style.color = "yellow";
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
/*

*/

