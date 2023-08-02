const serviciosEnCarrito = JSON.parse(localStorage.getItem("servicios-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoServicios = document.querySelector("#carrito-servicio");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

const contenedorTotal = document.querySelector("#total");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
let botonesEliminar;

function cargarServiciosCarrito() {
  if (serviciosEnCarrito && serviciosEnCarrito.length > 0) {
    contenedorCarritoVacio.style.display = "none";
    contenedorCarritoServicios.style.display = "block";
    contenedorCarritoAcciones.style.display = "block";
    contenedorCarritoComprado.style.display = "none";

    contenedorCarritoServicios.innerHTML = "";

    serviciosEnCarrito.forEach(servicio => {
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
    contenedorCarritoVacio.style.display = "block";
    contenedorCarritoServicios.style.display = "none";
    contenedorCarritoAcciones.style.display = "none";
    contenedorCarritoComprado.style.display = "none";
  }

  actualizarTotal();
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = serviciosEnCarrito.findIndex(servicio => servicio.id === idBoton);

  serviciosEnCarrito.splice(index, 1);
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));

  // Eliminar el servicio del contenedor actual
  const servicioEliminado = document.querySelector(`#${idBoton}`);
  servicioEliminado.parentElement.remove();

  if (serviciosEnCarrito.length === 0) {
    contenedorCarritoVacio.style.display = "block";
    contenedorCarritoServicios.style.display = "none";
    contenedorCarritoAcciones.style.display = "none";
  }

  actualizarTotal();
}

function vaciarCarrito() {
  serviciosEnCarrito.length = 0;
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
  cargarServiciosCarrito();

  // Eliminar todos los servicios del contenedor desde vaciar carrito
  const serviciosEnCarritoHTML = document.querySelectorAll(".carrito-servicio");
  serviciosEnCarritoHTML.forEach(servicio => servicio.remove());

  contenedorCarritoVacio.style.display = "block";
  contenedorCarritoServicios.style.display = "none";
  contenedorCarritoAcciones.style.display = "none";
}

function actualizarTotal() {
  const totalCalculo = serviciosEnCarrito.reduce((acc, servicio) => acc + (servicio.precio * servicio.cantidad), 0);
  contenedorTotal.innerText = `$${totalCalculo}`;
}

cargarServiciosCarrito();

function comprarCarrito() {
  serviciosEnCarrito.length = 0;
  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));

  contenedorCarritoVacio.style.display = "none";
  contenedorCarritoServicios.style.display = "none";
  contenedorCarritoAcciones.style.display = "none";
  contenedorCarritoComprado.style.display = "block";
}

if (botonComprar) {
  botonComprar.addEventListener("click", comprarCarrito);
}

if (botonVaciar) {
  botonVaciar.addEventListener("click", vaciarCarrito);
}

// Evento de eliminación directo en los botones de eliminar
botonesEliminar = document.querySelectorAll(".carrito-servicio-eliminar");
botonesEliminar.forEach(boton => {
  boton.addEventListener("click", eliminarDelCarrito);
});
