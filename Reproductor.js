var variable;
function mensaje(){
    if((variable.paused==false) && (variable.ended==false)){
             variable.pause();
    }
    else{
        variable.play();
    }
}

        function contenedor(){
            variable=document.getElementsByTagName("button")[0];
            variable.addEventListener("click",mensaje,false);
        }
        
    window.addEventListener("load",contenedor,false);
    
    