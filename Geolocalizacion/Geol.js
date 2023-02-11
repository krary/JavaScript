function mensaje(){
    navigator.geolocation.getCurrentPosition(mostrar);
}
function comenzar(){
    var variable=document.getElementById("Dame_ubicacion");
    variable.addEventListener("click",mensaje,false);
   }
   function mostrar(posicion){
var hh  = document.getElementById("ubicacion");
var latitud = "Latitud" + posicion.coords.latitude;
ubicacion.innerHTML=latitud;
   }



    window.addEventListener("load",comenzar,false);




