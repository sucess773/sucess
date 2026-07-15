const productos = [
{
id:1,
nombre:"Panini Mundial 2026",
categoria:"Panini",
precio:2,
imagen:"assets/productos/panini1.jpg"
},
{
id:2,
nombre:"Panini Qatar",
categoria:"Panini",
precio:2,
imagen:"assets/productos/panini2.jpg"
},
{
id:3,
nombre:"Tres Reyes Liga 1",
categoria:"Tres Reyes",
precio:1.5,
imagen:"assets/productos/tresreyes1.jpg"
},
{
id:4,
nombre:"Tres Reyes Copa América",
categoria:"Tres Reyes",
precio:2,
imagen:"assets/productos/tresreyes2.jpg"
}
];

const contenedor = document.getElementById("productos");

function mostrar(lista){

contenedor.innerHTML="";

lista.forEach(p=>{

contenedor.innerHTML += `
<div class="producto">
<img src="${p.imagen}" alt="${p.nombre}">
<div class="info">
<h3>${p.nombre}</h3>
<p class="categoria">${p.categoria}</p>
<div class="precio">S/ ${p.precio}</div>

<button onclick="agregarAlCarrito('${p.nombre}', ${p.precio}, '${p.imagen}')">
Agregar al carrito
</button>

</div>
</div>
`;

});

}

let productosActuales = productos;

mostrar(productosActuales);

document.getElementById("buscador").addEventListener("keyup",function(e){

const texto=e.target.value.toLowerCase();

mostrar(productos.filter(function(p){

return p.nombre.toLowerCase().includes(texto);

}));

});
const filtros = document.querySelectorAll(".filtro");

filtros.forEach(boton => {

boton.addEventListener("click", () => {
filtros.forEach(b=>b.classList.remove("activo"));

boton.classList.add("activo");
const categoria = boton.dataset.categoria;

if(categoria==="Todos"){

mostrar(productos);

}else{

mostrar(productos.filter(p=>p.categoria===categoria));

}

});

});
