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

        if(!texto)
        return "";
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        desplazamiento=(desplazamiento % 26 + 26) % 26;
        return texto.replace(/[A-Z]/ig, c=> letras [(letras.indexOf(c)+desplazamiento)%26]);
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
