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
nombre:"Tres Reyes Liga 1",
precio:1.5,
imagen:"assets/productos/tresreyes1.jpg"
},
{
nombre:"Tres Reyes Copa América",
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
<div class="precio">S/ ${p.precio}</div>

<button onclick="agregarAlCarrito('${p.nombre}', ${p.precio}, '${p.imagen}')">
Agregar al carrito
</button>

</div>
</div>
`;

});

}

mostrar(productos);

document.getElementById("buscador").addEventListener("keyup",function(e){

const texto=e.target.value.toLowerCase();

mostrar(productos.filter(function(p){

return p.nombre.toLowerCase().includes(texto);

}));

});
