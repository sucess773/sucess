let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
window.addEventListener("load",()=>{

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

});
function agregarAlCarrito(nombre, precio, imagen) {

    carrito.push({
        nombre,
        precio,
        imagen
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
    alert("Producto agregado al carrito");
}

function obtenerCarrito() {
    return carrito;
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
}
function actualizarContador(){

const contador = document.getElementById("contador");

if(contador){

contador.textContent = carrito.length;

}

}

actualizarContador();
