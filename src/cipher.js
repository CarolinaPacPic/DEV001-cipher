const cipher = {
encode: function(desplazamiento, texto){
    // agregado 
    if(texto === undefined || offset === undefined){
        throw new typeError ("NO funciona puem")
        }else if (texto === typeof 0 || offset === 0 ){
        throw new typeError ("NO funciona puem")
        }


        let resultado = "";
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        desplazamiento = (desplazamiento % 26 +26)%26;
        if(texto){
            for(let i = 0; i<texto.length; i++){
               if(letras.indexOf(texto[i])!=-1){
                let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
                resultado += letras[posicion];
               }  
               else
               resultado += texto[i];
            }
        }
        return resultado;      
    },

decode: function(desplazamiento, texto){
     // agregado 
    if(texto === undefined || offset === undefined){
        throw new typeError ("NO funciona puem")
        }else if (texto === typeof 0 || offset === 0 ){
        throw new typeError ("NO funciona puem")
        }


    if(!texto)
    return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento % 26 - 26)%26;
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]); 
  } 
    
};
export default cipher;
