let servicios = [];

const url = "/js/servicios.json";

fetch(url)
  .then(res => res.json())
  .then(data => {
    servicios = data;
    cargarServicios(servicios);
  });

const contenedorServicios = document.querySelector("#contenedor-servicios");
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarServicios(serviciosElegidos) {
  contenedorServicios.innerHTML = "";

  serviciosElegidos.forEach((servicio) => {
    const div = document.createElement("div");
    div.classList.add("servicios");
    div.innerHTML = `
      <img class="carrito-servicios-imagen" src="${servicio.imagen}" alt="${servicio.titulo}">
      <div class="servicios-detalles">
          <h3 class="carrito-servicios-titulo">${servicio.titulo}</h3>
          <p class="servicios-precio">$${servicio.precio}</p>
          <button class="servicios-agregar" id="${servicio.id}">Agregar</button>
      </div>`;

    contenedorServicios.append(div);
  });

  actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
  const botonesAgregar = document.querySelectorAll(".servicios-agregar");
  botonesAgregar.forEach(btn => {
    btn.addEventListener("click", (e) => agregarAlCarrito(e, servicios));
  });
}

function agregarAlCarrito(e, serviciosData) {
  const idServicio = e.target.id;
  const servicioElegido = serviciosData.find(servicio => servicio.id === idServicio);
  console.log(servicioElegido);
}

botonCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonCategorias.forEach((btn) => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id !== "todosLosServicios") {
      const serviciosCategoria = servicios.filter(
        (servicio) => servicio.categoria.id === e.currentTarget.id
      );

      cargarServicios(serviciosCategoria);
      tituloPrincipal.innerText = serviciosCategoria[0].categoria.nombre;
    } else {
      cargarServicios(servicios);
      tituloPrincipal.innerText = "Todos los Servicios";
    }
  });
});

  // BOTONES AGREGAR
  
  function actualizarBotonesAgregar() {
    botonAgregar = document.querySelectorAll(".servicios-agregar");
  
    botonAgregar.forEach((boton) => {
      boton.addEventListener("click", agregarAlCarrito);
    });
  }
  
  // cantidades en el carrito
  let serviciosEnCarrito;

let serviciosEnCarritoLS = localStorage.getItem("servicios-en-carrito");

if (serviciosEnCarritoLS) {
  serviciosEnCarrito = JSON.parse(serviciosEnCarritoLS);
  actualizarNumerito();
} else {
  serviciosEnCarrito = [];
}
  
  function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const servicioAgregado = servicios.find((servicio) => servicio.id === idBoton);
  
    if (serviciosEnCarrito.some((servicio) => servicio.id === idBoton)) {
       index = serviciosEnCarrito.findIndex((servicio) => servicio.id === idBoton);
      serviciosEnCarrito[index].cantidad++;
    } else {
      servicioAgregado.cantidad = 1;
      serviciosEnCarrito.push(servicioAgregado);
    }
  
    localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
  
    actualizarNumerito();
  }
  
  function actualizarNumerito() {
    let nuevoNumerito = serviciosEnCarrito.reduce((acc, servicio) => acc + servicio.cantidad, 0);
    numerito.innerText = nuevoNumerito;
  }
  
    
    

