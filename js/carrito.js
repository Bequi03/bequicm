const serviciosEnCarrito = JSON.parse(localStorage.getItem("servicios-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoServicios = document.querySelector("#carrito-servicio");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");



function cargarServiciosCarrito() {
  if (serviciosEnCarrito  && serviciosEnCarrito .length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoServicios.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoServicios.innerHTML = "";

    serviciosEnCarrito .forEach(servicio => {
      const div = document.createElement("div");
      div.classList.add("carrito-servicio");
      div.innerHTML = `
        <img class="carrito-servicio-imagen" src="${servicio.imagen}" alt="${servicio.titulo}">
        <div class="carrito-servicio-titulo">
          <small>Título</small>
          <h3>${servicio.titulo}</h3>
        </div>
        <div class="carrito-servicio-cantidad">
          <small>Cantidad</small>
          <p>${servicio.cantidad}</p>
        </div>
        <div class="carrito-servicio-precio">
          <small>Precio</small>
          <p>$${servicio.precio}</p>
        </div>
        <div class="carrito-servicio-subtotal">
          <small>Subtotal</small>
          <p>$${servicio.precio * servicio.cantidad}</p>
        </div>
        <button class="carrito-servicio-eliminar" id="${servicio.id}"><i class="bi bi-trash-fill"></i></button>
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


cargarServiciosCarrito();


function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-servicio-eliminar");

  botonesEliminar.forEach(boton => {
      boton.addEventListener("click", eliminarDelCarrito);
  });
}


function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = serviciosEnCarrito.findIndex(servicio => servicio.id === idBoton);

  serviciosEnCarrito.splice(index, 1);
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
  cargarServiciosCarrito();

  if (serviciosEnCarrito.length === 0) {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoServicios.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
  }
}

function vaciarCarrito() {
  serviciosEnCarrito.length = 0;
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
  cargarServiciosCarrito();

  // Eliminar todos los servicios del contenedor desde vaciar carrito
  const serviciosEnCarritoHTML = document.querySelectorAll(".carrito-servicio");
  serviciosEnCarritoHTML.forEach(servicio => servicio.remove());

  contenedorCarritoVacio.classList.remove("disabled");
  contenedorCarritoServicios.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
}

function actualizarTotal() {
  const totalCalculo = serviciosEnCarrito.reduce((acc, servicio) => acc + (servicio.precio * servicio.cantidad), 0);
  contenedorTotal.innerText = `$${totalCalculo}`;
}

if (botonComprar) {
  botonComprar.addEventListener("click", comprarCarrito);
}

function comprarCarrito() {
  serviciosEnCarrito.length = 0;
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));

  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoServicios.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
}

cargarServiciosCarrito();

if (botonVaciar) {
  botonVaciar.addEventListener("click", vaciarCarrito);
}