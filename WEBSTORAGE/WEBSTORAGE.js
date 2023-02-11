function comenzar(){
    var boton =document.getElementById("grabar");
    boton.addEventListener("click",itemNuevo,false);
}
function itemNuevo(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;

    sessionStorage.setItem(clave,valor);
    leermostrar(clave);
    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";

}
function leermostrar(clave){
var zona_datos = document.getElementById("zona_datos");
var el_valor= sessionStorage.getItem(clave);
zona_datos.innerHTML="";
for(i=0;i<sessionStorage.length;i++){
    var clave = sessionStorage.key(i);
    var el_valor = sessionStorage.getItem(clave);
    zona_datos.innerHTML += "<div>Clave: " + clave + "<br>" + "Valor : " + " " + el_valor + "</div>";

}
}


window.addEventListener("load",comenzar,false);
