 /*FÓRMULA E INDICACIONES PARA CIFRAR*/
 const cipher ={
  encode :(offset, string)=>{
  let resultado = "";
  let mensaje = "";
  for (let i=0; i<string.length;i++){
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      mensaje = ((string.charCodeAt(i)-65+parseInt(offset))%26)+65;
      mensaje = String.fromCharCode(mensaje);
      
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      mensaje = ((string.charCodeAt(i)-97+ parseInt(offset))%26)+97;
      mensaje = String.fromCharCode(mensaje);
      }
      resultado += mensaje;
      }
      return resultado;
      },
      
/*FÓRMULA E INDICACIONES PARA DESCIFRAR*/
  decode :(offset, string)=>{
  let resultado = "";
  let mensaje = "";
  for (let i=0; i<string.length;i++){
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      mensaje = ((string.charCodeAt(i)-65-parseInt(offset))%26)+65;
      mensaje = String.fromCharCode(mensaje);
      
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      mensaje = ((string.charCodeAt(i)-97-parseInt(offset))%26)+97;
      mensaje = String.fromCharCode(mensaje);
      }
      resultado += mensaje;
      }
      return resultado;

   }
}




export default cipher;
