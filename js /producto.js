const detalle = document.getElementById("detalle");

detalle.innerHTML = `

<div class="producto">

<img src="assets/productos/panini1.jpg">

<div class="info">

<h2>Panini Mundial 2026</h2>

<p class="categoria">Panini</p>

<p class="disponible">✅ Disponible</p>

<div class="precio">S/ 2.00</div>

<p>
Figurita original en excelente estado.
</p>

<button onclick="agregarAlCarrito('Panini Mundial 2026',2,'assets/productos/panini1.jpg')">
Agregar al carrito
</button>

</div>

</div>

`;
