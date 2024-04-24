import{productos, carritoProds} from './varibles.js'

export const agregarAlCarrito = (prod)=>{
    const arrayAgCr = productos.includes(prod);
    if(arrayAgCr){
        carritoProds.push(prod);
        alert("Producto agregado");
    } else {
        alert("El producto no existe");
    }    
};

export const agregarProducto = (prod)=>{
    const arrayAgPr = productos.includes(prod);
    if(arrayAgPr){
        alert("El producto ya existe");
    } else {
        productos.push(prod)
        alert("Producto agregado");
    }
}

export const validadorProducto = (prod)=>{
    const transformar = Number(prod);
    const validacionNumero = isNaN(transformar);
    const validacionVacio = prod !== "";
    const validacionString = typeof prod === "string";
    return validacionNumero && validacionVacio && validacionString;
}