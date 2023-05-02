var vocales = ["e", "i", "a", "o", "u"];
var encriptado = ["enter", "imes", "ai", "ober", "ufat"];

//************FUNCIONES EXPORTADAS********************************

export function encriptar() {
  var cadena = capturarTexto();

  validar(cadena);

  for (let i = 0; i < cadena.length; i++) {
    var cadena2 = cadena.replaceAll(vocales[i], encriptado[i]);
    cadena = cadena2;
  }
  escribirTexto(cadena);
}

export function desencriptar(cadena) {
  var cadena = capturarTexto();
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

  navigator.clipboard.writeText(cEncriptada.textContent);

  boton.textContent = "Texto Copiado";

  setTimeout(() => {
    boton.textContent = "copiar";
  }, 2000);
}

//********************************FUNCIONES DE AYUDA**********************/

function validar(cadena) {
  if (!cadena) {
    alert("Por favor, ingrese un texto.");
  }
  return;
}

function escribirTexto(cadena) {
  document.getElementById("area-resultado").textContent = cadena;
}

function capturarTexto() {
  let cadena = document.getElementById("area-encriptado").value;
  return cadena;
}
