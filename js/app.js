window.addEventListener("load", function(){
	
	var boton = document.getElementById("btn");
	boton.addEventListener("click", function(){

		var texto = document.getElementById("msj").value;
		var cuadroGrande = document.getElementById("contenedor");

		var hermano = document.createElement("div");
		hermano.innerText = texto;

		if(!cuadroGrande.childNodes[0]){
			cuadroGrande.appendChild(hermano);
		}
		else{
			cuadroGrande.insertBefore(hermano, cuadroGrande.childNodes[0]);
		}

		hermano.classList.add("tweets");
	});
});