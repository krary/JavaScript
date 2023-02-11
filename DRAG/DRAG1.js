
var variable;
var destino;
var codigo;
function funcion(e)

{  //Primer paso Identificar el elemento que queremos trabajar
      //(Llevando implicito la funcion que nos va a recoger los datos de dicho elemento)
     variable=document.getElementById("imagen");
    variable.addEventListener("dragstart",arrastrar,false);

    //IDENTIFICANDO NUESTRA SONA DE DESCARGA
    destino=document.getElementById("section2" );
    destino.addEventListener("dragenter",function(e){
        e.preventDefault();
    },false);
    destino.addEventListener("dragover",function(e){
        e.preventDefault();
    },false);
    destino.addEventListener("drop",soltar,false);
    variable.addEventListener("dragend",borrar,false);
}
    function  arrastrar(e){
     codigo="<img src='" +variable.getAttribute("src") +"'>";
     e.dataTransfer.setData("Text",codigo);
    }
    function soltar(e){
       e.preventDefault();
       destino.innerHTML=e.dataTransfer.getData("Text");
    }
    function borrar(e){
        var elemt=e.target();
        elemt.style.visibility="hidden";
      }
      

window.addEventListener("load",funcion,false);