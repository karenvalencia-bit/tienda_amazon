//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreConsola
let precioConsola
let pesoConsola
let fotoConsola
let costoTotal
let moneda=true;

//boton del formulario 
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botonPesos=document.getElementById("botonPesos");


//identificar cuando da click boton

boton.addEventListener("click", capturarDatos);//calback
botonLimpiar.addEventListener("click", limpiarCarrito);
botonPesos.addEventListener("click",CambiarMoneda);

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
    pesoIndividual.textContent=`peso del producto ${pesoConsola}LB...`

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


    let botonPesos=document.getElementById("botonPesos");
    botonPesos.classList.remove("invisible");
    botonPesos.classList.add("visible");

    botonPesos.addEventListener("click",CambiarMoneda);




}
 
function seleccionarConsola(opcion){
let consolas={ 
    nombres:Array("PS5","XBOX Serie X", "Nintendo Switch","Vestidos Hawaianos","Oculus Quest-Virtual Reality","Sandalia Tacon","Bolsas-Mochilas","Accesorios","LASHVIEW Kit de elevaci??n de pesta??as","Led Usto","Selfie Anillo De Luz","Cepillo Ionico Alisador","Carro Hummer","Tablet Lenovo + Teclado + L??piz 11 Grey","Bicicleta RMX","Conjunto Deportivo Licra "),
     precios:Array(750,700,409,23.99,299.00, 23.99, 21.34, 8.55, 20.39, 14.44, 65.66, 82.56, 19050.595, 464.47, 258.09, 12.903 ), 
     pesos:Array(14.2,13.1,4.75,1.56,128,0, 1.6,0,1.54,1.2,2.65, 0.56, 48.58, 13.65, 800, 0.54),
     fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true","https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/vestido2.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/virtual.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/tacon.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/bolso.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/accesorios.png?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/lift.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/led.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/anilloluz.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/ceppillo.PNG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/carroP.jpg?raw=true","https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/compu.JPG?raw=true","https://github.com/karenvalencia-bit/imagenes/blob/main/img/bici.jpg?raw=true","https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/conjunto.JPG?raw=true")
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

    }
    else if(opcion==5){

        nombreConsola=consolas.nombres[4];
        precioConsola=consolas.precios[4];
        pesoConsola=consolas.pesos[4];
        fotoConsola=consolas.fotos[4];

    }
    else if(opcion==6){

        nombreConsola=consolas.nombres[5];
        precioConsola=consolas.precios[5];
        pesoConsola=consolas.pesos[5];
        fotoConsola=consolas.fotos[5];

    }
    else if(opcion==7){

        nombreConsola=consolas.nombres[6];
        precioConsola=consolas.precios[6];
        pesoConsola=consolas.pesos[6];
        fotoConsola=consolas.fotos[6];

    }
    else if(opcion==8){

        nombreConsola=consolas.nombres[7];
        precioConsola=consolas.precios[7];
        pesoConsola=consolas.pesos[7];
        fotoConsola=consolas.fotos[7];

    }
    else if(opcion==9){

        nombreConsola=consolas.nombres[8];
        precioConsola=consolas.precios[8];
        pesoConsola=consolas.pesos[8];
        fotoConsola=consolas.fotos[8];

    }
    else if(opcion==10){

        nombreConsola=consolas.nombres[9];
        precioConsola=consolas.precios[9];
        pesoConsola=consolas.pesos[9];
        fotoConsola=consolas.fotos[9];

    }
    else if(opcion==11){

        nombreConsola=consolas.nombres[10];
        precioConsola=consolas.precios[10];
        pesoConsola=consolas.pesos[10];
        fotoConsola=consolas.fotos[10];

    }
    else if(opcion==12){

        nombreConsola=consolas.nombres[11];
        precioConsola=consolas.precios[11];
        pesoConsola=consolas.pesos[11];
        fotoConsola=consolas.fotos[11];

    }
    else if(opcion==13){

        nombreConsola=consolas.nombres[12];
        precioConsola=consolas.precios[12];
        pesoConsola=consolas.pesos[12];
        fotoConsola=consolas.fotos[12];

    }
    else if(opcion==14){

        nombreConsola=consolas.nombres[13];
        precioConsola=consolas.precios[13];
        pesoConsola=consolas.pesos[13];
        fotoConsola=consolas.fotos[13];

    }
    else if(opcion==15){

        nombreConsola=consolas.nombres[14];
        precioConsola=consolas.precios[14];
        pesoConsola=consolas.pesos[14];
        fotoConsola=consolas.fotos[14];

    }
    else if(opcion==16){

        nombreConsola=consolas.nombres[15];
        precioConsola=consolas.precios[15];
        pesoConsola=consolas.pesos[15];
        fotoConsola=consolas.fotos[15];

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

    let botonPesos=document.getElementById("botonPesos");
    botonPesos.classList.remove("visible");
    botonPesos.classList.add("invisible");





}

function CambiarMoneda(){
    if(moneda){

        convertirFacturaCOP()

    }else{

        convertirFacturaDolares()
        console.log("voy para dolares");

    }
}

function convertirFacturaCOP(){

    moneda=false;
    let botonpesos=document.getElementById("botonPesos");
    let icono=document.createElement("i");
    icono.classList.add("fas");
    icono.classList.add("fa-money-check-alt");
    botonpesos.textContent="USD ";
    botonpesos.appendChild(icono);

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertiraPesos(precioConsola)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuesto");
    costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularImpuestos(precioConsola,cantidad))} COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${convertiraPesos((calcularCostoCasillero(pesoConsola,cantidad))+(calcularImpuestos(precioConsola,cantidad)))} COP`;

}

function convertirFacturaDolares(){

    moneda=true;

    let botonPesos=document.getElementById("botonPesos");
    let icono=document.createElement("i");
    icono.classList.add("fas");
    icono.classList.add("fa-coins");
    botonPesos.textContent="COP ";
    botonPesos.appendChild(icono);
    

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioConsola} USD`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoConsola,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuesto");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularImpuestos(precioConsola,cantidad)} USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularImpuestos(precioConsola,cantidad))} USD`;

}


function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}