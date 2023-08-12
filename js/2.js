const papa = {
    producto: "papa",
    precio: 200,
    categoria: "verduleria"
}
const manzana = {
    producto: "manzana",
    precio: 100,
    categoria: "verduleria"
}
const banana = {
    producto: "banana",
    precio: 50,
    categoria: "verduleria"
}
const naranja = {
    producto: "naranja",
    precio: 200,
    categoria: "verduleria"
}
let listaProductos= [papa, manzana, banana, naranja]
let productos = document.getElementById("productos").innerHTML= "Listas de productos "+ listaProductos 



for (let i = 0; i < listaProductos.length; i++) {
    console.log(`${i + 1}. ${listaProductos[i].producto} - Precio: ${listaProductos[i].precio}`);
}

// Pedir al usuario que seleccione productos y sumar el total
let totalPedido = 0;
while (true) {
    const seleccion = prompt("Seleccione un producto por su número (0 para finalizar):");
    const seleccionNumero = parseInt(seleccion);
    
    if (seleccionNumero === 0) {
        break;
    }
    
    if (seleccionNumero >= 1 && seleccionNumero <= listaProductos.length) {
        const productoSeleccionado = listaProductos[seleccionNumero - 1];
        totalPedido += productoSeleccionado.
        totalPedido += productoSeleccionado
precio;
        console.log(`Producto agregado: ${productoSeleccionado.producto} - Precio: ${productoSeleccionado.precio}`);
    } else {
        console.log("Selección inválida. Intente nuevamente.");
    }
}

console.log(`Total del pedido: ${totalPedido}`);