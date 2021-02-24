//FÓRMULA E INDICACIONES PARA CIFRAR
const cipher = {
  encode: (offset, string,) => {
    let resultado = "";
    let mensaje = "";
    for (let i = 0; i < string.length; i++) {
      //Fórmula letras mayúsculas
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        mensaje = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65;
      }

      //Fórmula letras minúsculas
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        mensaje = ((string.charCodeAt(i) - 97 + parseInt(offset)) % 26) + 97;
      }

      //Espacio en el Número 32 del Código ASCII
      else if (string.charCodeAt(i) === 32) {
        mensaje = 32;
      }

      resultado += String.fromCharCode(mensaje);
    }

    return resultado;

  },


  //FÓRMULA E INDICACIONES PARA DESCIFRAR
  decode: (offset, string) => {
    let resultado = "";
    let mensaje = "";
    for (let i = 0; i < string.length; i++) {
      //Fórmula letras mayúsculas
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        mensaje = ((string.charCodeAt(i) - 90 - parseInt(offset)) % 26) + 90;
      }

      //Fórmula letras minúsculas
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        mensaje = ((string.charCodeAt(i) - 122 - parseInt(offset)) % 26) + 122;
      }

      //Espacio en el Número 32 del Código ASCII
      else if (string.charCodeAt(i) === 32) {
        mensaje = 32;
      }

      /*Dar alerta de que no pueden usarse números
      else if (string.charCodeAt(i) == 48) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 49) {
        alert("No puede ser un número");
      }           
      else if (string.charCodeAt(i) == 50) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 51) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 52) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 53) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 54) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 55) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 56) {
        alert("No puede ser un número");
      } 
      else if (string.charCodeAt(i) == 57) {
        alert("No puede ser un número");
      } 
    */

      resultado += String.fromCharCode(mensaje);
    }

    return resultado;

  }
}

export default cipher;
