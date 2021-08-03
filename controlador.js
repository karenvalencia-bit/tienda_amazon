//boton del formulario 
let boton=document.getElementById("boton");
console.log(boton);

//identificar cuando da click boton

boton.addEventListener("click", capturarDatos);//calback

//3.CREAR FUNCION PROPIA QUE SE LLAMO 2
function capturardatos(){
    
    //4. capturar los valores del formulario

    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);
    console.log(nombreConsola);
    console.log(precioConsola);
    console.log(pesoConsola);

}
 
function seleccionarConsola(opcion){
let consolas={ 
    nombres:Array("PS5","XBOX Serie X", "Nintendo Switch"),
     precios:Array(750,700,409), 
     pesos:Array(14.2,13.1,4.75)
     }

     
     if(opcion==1){

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];

    }else if(opcion==2){

        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];

    }else if(opcion==3){

        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];

    }else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;

    }


}