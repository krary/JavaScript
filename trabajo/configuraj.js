
    var mensajem;
    var foto;
    function mensaje(){
        alert("Este es un mensaje cualquiera");
    }
    function t(){
        foto.width=300;
    }
    function s(){
        foto.width=200;
    }
    function call(){
         mensajem=document.getElementsByTagName("button")[0];
         mensajem.addEventListener("mouseover",mensaje,false);
         foto=document.getElementsByTagName("img")[0];
         foto.addEventListener("mouseover",t,false);
         foto.addEventListener("mouseout",s,false);

    }
    window.addEventListener("load",call,false);
    //window.onload=(call);
