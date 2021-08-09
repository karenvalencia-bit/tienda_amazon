//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreConsola
let precioConsola
let pesoConsola
let fotoConsola

//boton del formulario 
let boton=document.getElementById("boton");
console.log(boton);

//identificar cuando da click boton

boton.addEventListener("click", capturarDatos);//calback

//3.CREAR FUNCION PROPIA QUE SE LLAMO 2
function capturarDatos(){
    
    //4. capturar los valores del formulario

    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);
    
    let cantidad=document.getElementById("cantidad").value;
    console.log(cantidad);

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    console.log(pildora.textContent);
    pildora.classList.remove("invisible")
    pildora.classList.add("visible")

    let direccion=document.getElementById("comentarios").value;
    console.log(direccion);

    let fotoCarrito=document.getElementById("fotocarrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`costo unitario $${precioConsola} USD`

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`peso de la consola ${pesoConsola}LB...`

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total de la compra: ${pesoConsola*cantidad} Lb`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoConsola,cantidad)} USD`;
}
 
function seleccionarConsola(opcion){
let consolas={ 
    nombres:Array("PS5","XBOX Serie X", "Nintendo Switch"),
     precios:Array(750,700,409), 
     pesos:Array(14.2,13.1,4.75),
     fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true")
     }

     
     if(opcion==1){

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];

    }else if(opcion==2){

        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];

    }else if(opcion==3){

        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];

    }else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null


    }


}

function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;

    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;
    }

    else{

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2)
    }

    return costoCasillero;
}
