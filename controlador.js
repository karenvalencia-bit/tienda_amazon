//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreConsola
let precioConsola
let pesoConsola
let fotoConsola
let costoTotal

//boton del formulario 
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botonPesos=document.getElementById("botonPesos");


//identificar cuando da click boton

boton.addEventListener("click", capturarDatos);//calback
botonLimpiar.addEventListener("click", limpiarCarrito);
botonPesos.addEventListener("click", convertirPesos);

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

    let costoImpuestos=document.getElementById("costoImpuesto");
    costoImpuestos.textContent=`costo venta(impuestos): $${calcularImpuestos(precioConsola,cantidad)} USD`;
    
     costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total $${(calcularImpuestos(precioConsola,cantidad))+(calcularCostoCasillero(pesoConsola,cantidad))}USD`;

    let linea1=document.getElementById("linea1");
    linea1.classList.remove("invisible");
    linea1.classList.add("visible");

    let linea2=document.getElementById("linea2");
    linea2.classList.remove("invisible");
    linea2.classList.add("visible");




}
 
function seleccionarConsola(opcion){
let consolas={ 
    nombres:Array("PS5","XBOX Serie X", "Nintendo Switch","Vestidos Hawaianos"),
     precios:Array(750,700,409,23.99), 
     pesos:Array(14.2,13.1,4.75,1.56),
     fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true","https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/vestido2.PNG?raw=true")
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

    }
    else if(opcion==4){

        nombreConsola=consolas.nombres[3];
        precioConsola=consolas.precios[3];
        pesoConsola=consolas.pesos[3];
        fotoConsola=consolas.fotos[3];

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

function calcularImpuestos(precioConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=precioConsola*cantidad;
    let costoTotal=costoCompra+VALOR_SEGURO+IMPUESTO_PAIS

    return costoTotal;
}

function limpiarCarrito(){

    let fotocarrito=document.getElementById("fotocarrito");
    fotocarrito.src="img/fotoCarrito.png";

    let titulo=document.getElementById("titulo");
    titulo.textContent="Tu carrito amazon esta vacio";

    let titulocarrito=document.getElementById("tituloCarrito");
    titulocarrito.textContent="se han borrado los productos"

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent="";

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent="";

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent="";

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent="";

    let costoImpuestos=document.getElementById("costoImpuesto");
    costoImpuestos.textContent="";
    
    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent="";

    let linea1=document.getElementById("linea1");
    linea1.classList.remove("visible");
    linea1.classList.add("invisible");

    let linea2=document.getElementById("linea2");
    linea2.classList.remove("visible");
    linea2.classList.add("invisible");

    let pildora=document.getElementById("pildora");
    pildora.classList.remove("visible");
    pildora.classList.add("invisible");





}

function convertirPesos(cantidadDolares){

    const dolares=3.932;
    let conversion=dolares*cantidadDolares;
    return conversion;

    let convertiracop=document.getElementById("convertirCop");
    convertiracop.textContent=conversion;
}
