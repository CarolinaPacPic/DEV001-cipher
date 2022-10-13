window.addEventListener("load",Inicio,true)

function Inicio() {
    document.getElementById("mensaje").addEventListener("keyup",
    function () {
        this.value = this.value.toUpperCase()
    },
    true
    );
    document.getElementById("cifrar").addEventListener("click",
    function () {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensajeCifrado").value = cifrar(texto, desplazamiento);
        
    },
    true)

}
function cifrar(texto,desplazamiento){
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
}