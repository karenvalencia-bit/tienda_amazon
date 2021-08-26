///[arreglo],{objetos}
let pedidos=[

    {
        id:1,
        nombre:"PS5",
        precio:750,
        peso:14.2,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:2,
        nombre:"Xbox",
        precio:700,
        peso:13.1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true"
    }
];

console.log(pedidos);

let contenedorPadre=document.getElementById("padre");

pedidos.forEach(function(pedido){

    let columna=document.createElement("div");
    columna.classList.add("col");

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card");
    cuerpo.classList.add("h-100");
    
    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.src=pedido.foto;

    let titulo=document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent=`producto: ${pedido.nombre}`;
    
    let precio=document.createElement("p");
    precio.classList.add("card-text");
    precio.textContent=`precio: ${pedido.precio}`;

    let peso=document.createElement("p");
    peso.classList.add("card-text");
    peso.textContent=`peso del producto: ${pedido.peso}`;

    let cantidad=document.createElement("p");
    cantidad.classList.add("card-text");
    cantidad.textContent=`cantidad: ${pedido.cantidad}`

    cuerpo.appendChild(imagen);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(precio);
    cuerpo.appendChild(peso);
    cuerpo.appendChild(cantidad);
    

    columna.appendChild(cuerpo);
    contenedorPadre.appendChild(columna);

});