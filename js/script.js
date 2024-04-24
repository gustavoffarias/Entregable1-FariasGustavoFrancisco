import{productos, carritoProds} from './modules/varibles.js';

let inicioCompra = '';   
let listadoProductos = '';

import{agregarAlCarrito, agregarProducto, validadorProducto} from './modules/functions.js';

inicioCompra = confirm('Encontra lo que necesitas!');

if(inicioCompra == true){
    const carrito = ()=>{
        let loopCarrito = confirm("¿Desea agregar productos al carrito?");
        while(loopCarrito){
            const producto = prompt("Ingrese el nombre del producto a comprar tipiando tal cual esta cargado el producto\r" + productos.join("\r"));
            
            if(validadorProducto(producto)){
                agregarAlCarrito(producto);
                const mostrarProd = carritoProds.join("\r");
                alert(mostrarProd);
            } else {
                alert("Ingrese un dato correcto");
            }
            loopCarrito = confirm("¿Desea agregar otro producto?");
        }
    
        let titulo = document.querySelector("#titulo");
        titulo.innerHTML = `
            <h1>Te esperamos nuevamente en</h2>
        `;
        let subtitulo = document.querySelector("#subtitulo");
        subtitulo.innerHTML = `
            <h2>CAR MARKET</h2>
        `;   
    }

    carrito();

}else{
    let propietario = '0147'
    propietario = prompt('Para administrar la pagina, ingresa la clave');

    if(propietario == '0147'){

const admin = ()=>{
    alert("Bienvenido al sistema de gestion de la tienda");
    let loopProd = confirm("¿Desea agregar productos?");
    while(loopProd){
        const producto = prompt("Ingrese el nombre del producto a agregar, teniendo en cuenta el siguiente formato: 1 Caratecter para la categoria, punto, 4 caracteres para el codigo, espacio, el nombre. Por ejemplo 0.0001 Aceite Sintetico");

        if(validadorProducto(producto)){
            agregarProducto(producto);
            const mostrarProductos = productos.join("\r");
            alert(mostrarProductos);
        } else {
            alert("Ingrese un dato correcto");
        }
        loopProd = confirm("¿Desea agregar otro producto?");
    }

    let titulo = document.querySelector("#titulo");
    titulo.innerHTML = `
        <h1>Te esperamos nuevamente en</h2>
    `;
    let subtitulo = document.querySelector("#subtitulo");
    subtitulo.innerHTML = `
        <h2>CAR MARKET</h2>
    `;   
}
        admin();

    }else{
        let titulo = document.querySelector("#titulo");
        titulo.innerHTML = `
            <h1>Te esperamos nuevamente en</h2>
        `;
        let subtitulo = document.querySelector("#subtitulo");
        subtitulo.innerHTML = `
            <h2>CAR MARKET</h2>
        `;    
    }
}