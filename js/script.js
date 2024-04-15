let inicioCompra = '';   

const productos = [
    '0.0001 Aceite Sintetico', 
    '0.0002 Aceite SemiSintetico', 
    '0.0003 Aceite Mineral', 
    '1.0001 Filtro de Aire Auto', 
    '2.0001 Cubiertas Auto'];

let listadoProductos = "";

function mostrarProductos(){
    for(let i=0; i<productos.length; i++){
        listadoProductos += `\n ${productos[i]}`;
    };

    let categoriaProductos = prompt("Ingrese el nombre del producto a comprar, tipiando tal cual esta cargado el producto"+listadoProductos);
}

const agregarAlCarrito = (prod)=>{
    const arrayAgPr = productos.includes(prod);
    if(arrayAgPr){
        productos.push(prod)
        alert("Producto agregado");
    } else {
        alert("El producto no existe");
    }    
};

const agregarProducto = (prod)=>{
    const arrayAgPr = productos.includes(prod);
    if(arrayAgPr){
        alert("El producto ya existe");
    } else {
        productos.push(prod)
        alert("Producto agregado");
    }
}

const validadorProducto = (prod)=>{
    const transformar = Number(prod);
    const validacionNumero = isNaN(transformar);
    const validacionVacio = prod !== "";
    const validacionString = typeof prod === "string";
    return validacionNumero && validacionVacio && validacionString;
}

inicioCompra = confirm('Encontra lo que necesitas!');


if(inicioCompra == true){
    const carrito = ()=>{
        let loopCarrito = confirm("¿Desea agregar productos al carrito?");
        while(loopCarrito){
            const producto = prompt(mostrarProductos());
            
            if(validadorProducto(producto)){
                agregarProducto(producto)
                const mostrarProd = productos.join("\r")
                alert(mostrarProd)
            } else {
                alert("Ingrese un dato correcto")
            }
            loopCarrito = confirm("¿Desea agregar otro producto?")
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

const app = ()=>{
    alert("Bienvenido al sistema de gestion de la tienda");
    let loopProd = confirm("¿Desea agregar productos?")
    while(loopProd){
        const producto = prompt("Ingrese el nombre del producto a agregar, teniendo en cuenta el siguiente formato: 1 Caratecter para la categoria, punto, 4 caracteres para el codigo, espacio, el nombre. Por ejemplo 0.0001 Aceite Sintetico")
        if(validadorProducto(producto)){
            agregarProducto(producto)
            const mostrarProductos = productos.join("\r")
            alert(mostrarProductos)
        } else {
            alert("Ingrese un dato correcto")
        }
        loopProd = confirm("¿Desea agregar otro producto?")
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
        app()

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