import cipher from './cipher.js';
window.addEventListener("load",Inicio,true)
// DOM
function Inicio() {
    document.getElementById("mensaje").addEventListener("keyup",
    function () {
        this.value = this.value.toUpperCase()
    },
    true
    );
    
    document.getElementById("encode").addEventListener("click",
    function () {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensajeCifrado").value = cipher.encode(desplazamiento, texto);
        
    },
    true);

    document.getElementById("decode").addEventListener("click",
    function (){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensajeCifrado").value = cipher.decode(desplazamiento, texto);
    },
    true)
}






 
