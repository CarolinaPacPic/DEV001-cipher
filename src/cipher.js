const cipher = {
    encode: function (desplazamiento, texto) {
        // agregado 
        if (texto === undefined || desplazamiento === undefined) {
            throw new TypeError("NO funciona puem")
        } else if (texto === typeof 0 || desplazamiento === 0) {
            throw new TypeError("NO funciona puem")
        } else if (texto === null || desplazamiento === null){
            throw new TypeError("nulo")
        }


        let resultado = "";
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        desplazamiento = (desplazamiento % 26 + 26) % 26;
        //if (texto) {
            for (let i = 0; i < texto.length; i++) {
                if (letras.indexOf(texto[i]) != -1) {
                    let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
                    resultado += letras[posicion];
                }else{
                  resultado += texto[i];  
                }
                
            }
        //}
        return resultado;
    },

    decode: function (desplazamiento, texto) {
        // agregado 
        if (texto === undefined || desplazamiento === undefined) {
            throw new TypeError("NO funciona puem")
        } else if (texto === typeof 0 || desplazamiento === 0) {
            throw new TypeError("NO funciona puem")
        }
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        desplazamiento = (desplazamiento % 26 - 26) % 26;
        return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
    }

};
export default cipher;
