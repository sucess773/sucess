let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio, imagen) {

    carrito.push({
        nombre,
        precio,
        imagen
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");
}

function obtenerCarrito() {
    return carrito;
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
}
