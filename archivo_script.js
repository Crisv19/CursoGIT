
function ejecuta(){


    var elementos=document.querySelectorAll("#principal p,span");

    for(var i=0;i<elementos.length;i++){

        

        elementos[i].onclick=saludo;
    }


   // var elementos=document.querySelectorAll("#principal p")[0].onclick=saludo;



    // document.querySelector("#principal p:last-child").onclick=saludo;

    // for(var i=0;i<3;i++){

    //     var z=document.getElementsByClassName("importante")[i].onclick=saludo;
    // }

    // for(var i=0;i<3;i++){

    //     document.getElementsByTagName("p")[i].onclick=saludo;
    // }




    //document.getElementsByTagName("p")[2].onclick=saludo; // instruncion para identificar las etiquetas que van ejecutar un evento

    // document.getElementById("importante").onclick=saludo;
    
}



function saludo(){

    alert("Que hay de nuevo");
}

 window.onload=ejecuta;  //ejecutar una funcionn de manera automatica cuando cargue la ventana o la pagina 


