const formulario = document.getElementById("formulario");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

formulario.addEventListener("submit", function(e){

e.preventDefault();

const producto = {

id: Date.now(),

nombre: document.getElementById("nombre").value,

precio: Number(document.getElementById("precio").value),

categoria: document.getElementById("categoria").value,

imagen: document.getElementById("imagen").value,

stock: true,

nuevo: true

};

productos.push(producto);

localStorage.setItem("productos", JSON.stringify(productos));

alert("Producto agregado correctamente.");

formulario.reset();

});
