
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoServicios = document.querySelector("#carrito-servicio");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll("#carrito-servicio-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

function cargarServiciosCarrito() {
  if (serviciosEnCarrito && serviciosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoServicios.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoServicios.innerHTML = "";

    serviciosEnCarrito.forEach((servicios) => {
      const div = document.createElement("div");
      div.classList.add("carrito-servicio");
      div.innerHTML = `
        <img class="carrito-servicio-imagen" src="${servicios.imagen}" alt="${servicios.titulo}">
        <div class="carrito-servicio-titulo">
          <small>Título</small>
          <h3>${servicios.titulo}</h3>
        </div>
        <div class="carrito-servicio-cantidad">
          <small>Cantidad</small>
          <p>${servicios.cantidad}</p>
        </div>
        <div class="carrito-servicio-precio">
          <small>Precio</small>
          <p>$${servicios.precio}</p>
        </div>
        <div class="carrito-servicio-subtotal">
          <small>Subtotal</small>
          <p>$${servicios.precio * servicios.cantidad}</p>
        </div>
        <button class="carrito-servicio-eliminar" id="${servicios.id}"><i class="bi bi-trash-fill"></i></button>
      `;
      contenedorCarritoServicios.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoServicios.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }
  actualizarBotonesEliminar();
  actualizarTotal();
}

function actualizarBotonesEliminar() {
  botonEliminar = document.querySelectorAll(".carrito-servicios-eliminar");
  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = serviciosEnCarrito.findIndex((servicio) => servicio.id === idBoton);
  serviciosEnCarrito.splice(index, 1);
  cargarServiciosCarrito();
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
}

function vaciarCarrito() {
  serviciosEnCarrito.length = 0;
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
  cargarServiciosCarrito();
}

function actualizarTotal() {
  const totalCalculo = serviciosEnCarrito.reduce((acc, servicio) => acc + servicio.precio * servicio.cantidad, 0);
  contenedorTotal.innerText = `$${totalCalculo}`;
}

const botonComprar = document.querySelector("#boton-comprar");
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
  serviciosEnCarrito.length = 0;
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));

  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoServicios.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
}

cargarServiciosCarrito();