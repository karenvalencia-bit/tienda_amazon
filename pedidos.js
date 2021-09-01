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
    },
    {
        id:3,
        nombre:"Nintendi Switch",
        precio:409,
        peso:4.75,
        cantidad:8,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true"
    },
    {
        id:4,
        nombre:"Vestido Hawaiano",
        precio:23.99,
        peso:1.56,
        cantidad:4,
        foto:"https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/vestido2.PNG?raw=true"
    },
    {
        id:5,
        nombre:"Oculus Quest-Virtual Reality",
        precio:299.00,
        peso:128,
        cantidad:10,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/virtual.PNG?raw=true"
    },
    {
        id:6,
        nombre:"Sandalia Tacon",
        precio:23.99,
        peso:0,
        cantidad:1,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/tacon.PNG?raw=true"
    },
    {
        id:7,
        nombre:"Bolsas-Mochilas",
        precio:21.34,
        peso:1.6,
        cantidad:2,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/bolso.PNG?raw=true"
    },
    {
        id:8,
        nombre:"Accesorios",
        precio:8.55,
        peso:1.56,
        cantidad:0,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/accesorios.png?raw=true"
    },
    {
        id:9,
        nombre:"LASHVIEW Kit de elevación de pestañas",
        precio:20.39,
        peso:1.54,
        cantidad:5,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/lift.PNG?raw=true"
    },
    {
        id:10,
        nombre:"Led Usto",
        precio:14.44,
        peso:1.2,
        cantidad:3,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/led.PNG?raw=true"
    },
    {
        id:11,
        nombre:"Selfie Anillo De Luz",
        precio:65.66,
        peso:2.65,
        cantidad:2,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/anilloluz.PNG?raw=true"
    },
    {
        id:12,
        nombre:"Cepillo Ionico Alisador",
        precio:82.56,
        peso:0.56,
        cantidad:4,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/ceppillo.PNG?raw=true"
    },
    {
        id:13,
        nombre:"Carro Hummer",
        precio:19050.595,
        peso:48.58,
        cantidad:7,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/carroP.jpg?raw=true"
    },
    {
        id:14,
        nombre:"Tablet Lenovo + Teclado + Lápiz 11 Grey",
        precio: 464.47,
        peso:13.65,
        cantidad:6,
        foto:"https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/compu.JPG?raw=true"
    },
    {
        id:15,
        nombre:"Bicicleta RMX",
        precio:258.09,
        peso:1.56,
        cantidad:800,
        foto:"https://github.com/karenvalencia-bit/imagenes/blob/main/img/bici.jpg?raw=true"
    },

    {
        id:16,
        nombre:"Conjunto Deportivo Licra",
        precio:12.903,
        peso:0.54,
        cantidad:8,
        foto:"https://github.com/karenvalencia-bit/tienda_amazon/blob/main/img/conjunto.JPG?raw=true"
    },

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
    imagen.classList.add("w-100");
    imagen.classList.add("h-75");
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

    let botoneli=document.createElement("button");
    botoneli.classList.add("btn")
    botoneli.classList.add("btn-danger")
    let icono=document.createElement("i");
    icono.classList.add("fas");
    icono.classList.add("fa-trash-alt")
    botoneli.textContent="eliminar ";


    let botonactu=document.createElement("button");
    botonactu.classList.add("btn")
    botonactu.classList.add("btn-warning")
    let icono2=document.createElement("i");
    icono2.classList.add("fas");
    icono2.classList.add("fa-vote-yea")
    botonactu.classList.add("mt-2");
    botonactu.textContent="actuaizar ";

    botonactu.appendChild(icono2);
    botoneli.appendChild(icono);

    cuerpo.appendChild(imagen);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(precio);
    cuerpo.appendChild(peso);
    cuerpo.appendChild(cantidad);
    cuerpo.appendChild(botoneli);
    cuerpo.classList.add("mt-5");
    cuerpo.appendChild(botonactu);
    
    
    

    columna.appendChild(cuerpo);
    contenedorPadre.appendChild(columna);

});