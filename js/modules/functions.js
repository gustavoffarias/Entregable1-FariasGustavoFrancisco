
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
