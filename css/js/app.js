document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.querySelector(".cards");

    if (!contenedor || typeof productos === "undefined") return;

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="precio">S/ ${producto.precio.toFixed(2)}</p>

                <button onclick="agregarCarrito('${producto.nombre}')">
                    Agregar al carrito
                </button>

            </div>
        `;

    });

});

function agregarCarrito(nombre){

    alert(nombre + " agregado al carrito.");

}
