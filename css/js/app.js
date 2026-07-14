const buscador=document.getElementById("buscar");

buscador.addEventListener("keyup",()=>{

let texto=buscador.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let nombre=card.innerText.toLowerCase();

if(nombre.includes(texto)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});
