
//mediante querySelectorAll selecciono todos los botones que tengan clase "btnCargarCarrito"
const btnCarrito = document.querySelectorAll("btnCargarCarrito"); 
//Agrego evento click en cada uno 
btnCarrito.forEach(element => {
    element.addEventListener("click", clickEvent);
});

const contenedorCarrito = document.querySelector('container');

function clickEvent(event) {
    const boton = event.target;   
    buttom.closest(".card");

    const itemcardTittle = item.querySelectorAll('.card').textContent;

    const itemcardPrice = item.querySelectorAll(".card");
    
    const itemImg = item.querySelectorAll(".card-img-top");

 agregarItem(itemcardTittle, itemcardPrice, itemImg);
};

function agregarItem(itemcardTittle, itemcardPrice, itemImg){
    console.log(itemcardTittle, itemcardPrice, itemImg);
    const carritoRow = documen.createElement("div");
 
}
