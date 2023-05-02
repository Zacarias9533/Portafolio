import * as funcion from "./Funcionalidades.js";

var e = document.getElementById("boton-encriptar");
var de = document.getElementById("boton-desencriptar");
var c = document.getElementById("boton-copiar");

e.addEventListener("click", funcion.encriptar);

de.addEventListener("click", funcion.desencriptar);

c.addEventListener("click", funcion.copiar);
