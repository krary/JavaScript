function mensaje(){
    Parametros = {enableHighAccuracy:true, timeout:10000, maximumage:600000000000000000000000000000};
    navigator.geolocation.getCurrentPosition(mostrar,Errores,Parametros);
}
function comenzar(){
    var variable=document.getElementById("Dame_ubicacion");
    variable.addEventListener("click",mensaje,false);
   }
   function mostrar(posicion){
var hh  = document.getElementById("ubicacion");
/*var objeto_ubica = "";
objeto_ubica += "Latitud : " + posicion.coords.latitude + "<br>";
objeto_ubica += "Longitud : " + posicion.coords.longitude + "<br>";
objeto_ubica += "Exactitud : " + posicion.coords.accuracy + "<br>";
*/
var mimapa= "http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;
ubicacion.innerHTML = "<img src='" + mimapa + "'>";

}
function Errores(ee){
    alert("Ha habido un error" + ee.code + " " + ee.message);

}



    window.addEventListener("load",comenzar,false);




