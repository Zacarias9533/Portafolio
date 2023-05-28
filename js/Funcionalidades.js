var vocales = ["e", "i", "a", "o", "u"];
var encriptado = ["enter", "imes", "ai", "ober", "ufat"];

//************FUNCIONES EXPORTADAS********************************

export function encriptar() {
  var cadena = capturarTexto();
  document.getElementById("boton-copiar").style.display = "block";

  validar(cadena);

  for (let i = 0; i < cadena.length; i++) {
    var cadena2 = cadena.replaceAll(vocales[i], encriptado[i]);
    cadena = cadena2;
  }
  escribirTexto(cadena);
}

export function desencriptar(cadena) {
  var cadena = capturarTexto();
  document.getElementById("boton-copiar").style.display = "block";

  validar(cadena);

  for (let i = 0; i < cadena.length; i++) {
    var cadena2 = cadena.replaceAll(encriptado[i], vocales[i]);
    cadena = cadena2;
  }
  escribirTexto(cadena);
}

export function copiar() {
  var cEncriptada = document.getElementById("area-resultado");
  var boton = document.getElementById("boton-copiar");

  navigator.clipboard.writeText(cEncriptada.value);

  boton.textContent = "¡Texto Copiado!";

  cEncriptada.value = "";

  setTimeout(() => {
    boton.textContent = "¡Copiar!";
  }, 2000);
}

export function vista() {
  var ae = document.getElementById("area-encriptado");

  if (ae.value.length != 0) {
    vistaInput();
  } else {
    vistaDefault();
  }
}

//********************************FUNCIONES DE AYUDA**********************/

function validar(cadena) {
  if (!cadena) {
    alert("Por favor, ingrese un texto.");
  }
  return;
}

function escribirTexto(cadena) {
  document.getElementById("area-resultado").value = cadena;
}

function capturarTexto() {
  let cadena = document.getElementById("area-encriptado").value;
  return cadena;
}

function vistaDefault() {
  document.getElementById("txt-ini").style.display = "block";
  document.getElementById("img-aside").style.display = "block";
  document.getElementById("texto-img-resultado").style.display = "block";
  document.getElementById("texto-img-blanco").style.display = "block";
  document.getElementById("boton-copiar").style.display = "none";
  document.getElementById("area-resultado").style.display = "none";

  var s2 = document.getElementById("area-resultado");

  s2.value = "";
}

function vistaInput() {
  document.getElementById("txt-ini").style.display = "none";
  document.getElementById("img-aside").style.display = "none";
  document.getElementById("texto-img-blanco").style.display = "none";
  document.getElementById("texto-img-resultado").style.display = "none";
  document.getElementById("area-resultado").style.display = "block";
}
