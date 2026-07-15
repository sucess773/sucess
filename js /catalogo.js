let productos = JSON.parse(localStorage.getItem("productos"));

if (!productos) {
  productos = [
    {
      id: 1,
      nombre: "Panini Mundial 2026",
      categoria: "Panini",
      stock: true,
      nuevo: true,
      precio: 2,
      imagen: "assets/productos/panini1.jpg"
    },
    {
      id: 2,
      nombre: "Panini Qatar",
      categoria: "Panini",
      stock: true,
      nuevo: false,
      precio: 2,
      imagen: "assets/productos/panini2.jpg"
    },
    {
      id: 3,
      nombre: "Tres Reyes Liga 1",
      categoria: "Tres Reyes",
      stock: true,
      nuevo: false,
      precio: 1.5,
      imagen: "assets/productos/tresreyes1.jpg"
    },
    {
      id: 4,
      nombre: "Tres Reyes Copa América",
      categoria: "Tres Reyes",
      stock: false,
      nuevo: false,
      precio: 2,
      imagen: "assets/productos/tresreyes2.jpg"
    }
  ];

  localStorage.setItem("productos", JSON.stringify(productos));
}

const contenedor = document.getElementById("productos");
let productosActuales = [...productos];

function mostrar(lista) {

  contenedor.innerHTML = "";

  lista.forEach(p => {

    contenedor.innerHTML += `
      <div class="producto">

        <img src="${p.imagen}" alt="${p.nombre}">

        <div class="info">

          <h3>${p.nombre}</h3>

          <p class="categoria">${p.categoria}</p>

          <p class="${p.stock ? "disponible" : "agotado"}">
            ${p.stock ? "✅ Disponible" : "❌ Agotado"}
          </p>

          ${p.nuevo ? '<span class="nuevo">NUEVO</span>' : ""}

          <div class="precio">
            S/ ${Number(p.precio).toFixed(2)}
          </div>

          <button onclick="location.href='producto.html'">
            Ver detalles
          </button>

          <button onclick="agregarAlCarrito('${p.nombre}',${p.precio},'${p.imagen}')">
            Agregar al carrito
          </button>

        </div>

      </div>
    `;

  });

}

mostrar(productosActuales);

const buscador = document.getElementById("buscador");

if (buscador) {

  buscador.addEventListener("keyup", e => {

    const texto = e.target.value.toLowerCase();

    const resultado = productosActuales.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );

    mostrar(resultado);

  });

}

const filtros = document.querySelectorAll(".filtro");

filtros.forEach(boton => {

  boton.addEventListener("click", () => {

    filtros.forEach(b => b.classList.remove("activo"));

    boton.classList.add("activo");

    const categoria = boton.dataset.categoria;

    if (categoria === "Todos") {

      productosActuales = [...productos];

    } else {

      productosActuales = productos.filter(p => p.categoria === categoria);

    }

    if (buscador) buscador.value = "";

    mostrar(productosActuales);

  });

});
