var vocales = ["e", "i", "a", "o", "u"];
var encriptado = ["enter", "imes", "ai", "ober", "ufat"];

export function encriptar(cadena) {

  for (let i = 0; i < cadena.length; i++) {
    var cadena2 = cadena.replaceAll(vocales[i], encriptado[i]);
    cadena = cadena2;
  }
  return cadena;
}

export function desencriptar (cadena){
  for (let i = 0; i < cadena.length; i++) {
    var cadena2 = cadena.replaceAll(encriptado[i], vocales[i]);
    cadena = cadena2;
  }
  return cadena;
}

