function funcion1(){
    var variable = document.getElementById("section2");
    var boton = document.getElementById("boton1");
    boton.addEventListener("change",funcion2,false);
}
function funcion2(e){

    var archivos = e.target.files;
    var miarchivos = archivos[0];
    var lector = new FileReader();
    lector.readAsText(miarchivos);
    lector.addEventListener("load",funcion3,false);
}
function funcion3(e){
var resultado = e.target.result;
variable.innerHTML = resultado;
}




window.addEventListener("load",funcion1,false);
