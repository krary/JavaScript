/*los comentarios*/
function mensaje1(){

    //for(var i=0;i<5;i++){
   // document.getElementsByTagName("p")[i].onclick=mensaje;}
  //  document.getElementById("id5").onclick=mensaje;
       //Metod de documents query and queryselect all
//document.querySelector("#identificador p:last-child").onclick=mensaje;
var indentifi=document.querySelectorAll("#identificador");
for(var i=0,i<indentifi.length;i++){
      indentifi[i].onclick=mensaje;
}
}

function mensaje(){
alert("que hay de nuevo");
}
window.onload=mensaje1;
