const serviciosEnCarrito = JSON.parse(localStorage.getItem("servicios-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoServicios = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

if (serviciosEnCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoServicios.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    serviciosEnCarrito.forEach(servicios => {
            const div = document.createElement("div");
            div.classList.add("carrito-servicios");
            div.innerHTML = `
            <img class="carrito-servicios-imagen" src="${servicios.imagen}" alt="${servicios.titulo}">
            <div class="carrito-servicios-titulo">
                <small>Título</small>
                <h3>${servicios.titulo}</h3>
            </div>
            <div class="carrito-servicios-cantidad">
                <small>Cantidad</small>
                <p>${servicios.cantidad}</p>
            </div>
            <div class="carrito-servicios-precio">
                <small>Precio</small>
                <p>$${servicios.precio}</p>
            </div>
            <div class="carrito-servicios-subtotal">
                <small>Subtotal</small>
                <p>$${servicios.precio * servicios.cantidad}</p>
            </div>
            <button class="carrito-servicios-eliminar" id="${servicios.id}"><i class="bi bi-trash-fill"></i></button>
        `;

        contenedorCarritoServicios.append(div);
    })
}