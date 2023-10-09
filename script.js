const display= document.getElementById("display");
const agregar= document.getElementById("agregar");
const quitar= document.getElementById("quitar");
const reiniciar = document.getElementById("reiniciar");

let contadorValor= 0;

function actualizarContador(){
    display.textContent = contadorValor;

}
agregar.addEventListener("click", function(){
    contadorValor++;
    actualizarContador();
});

quitar.addEventListener("click", function(){
    contadorValor--;
    actualizarContador();
});

reiniciar.addEventListener("click", function(){
    contadorValor =0;
    actualizarContador();
});

actualizarContador();
   
