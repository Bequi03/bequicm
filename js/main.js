let serviciosEnCarrito;

const url = "/js/servicios.json";

fetch(url)
  .then(res => res.json())
  .then(data => cargarServicios(data));

const contenedorServicios = document.querySelector(`#contenedor-servicios`);

function cargarServicios(serviciosData) {
  servicios = serviciosData;

  servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.innerHTML = `<h2>${servicio.nombre}</h2> <img src="${servicio.img}" />
    <button class="btn-comprar" id="${servicio.id}">COMPRAR</button>`;

    contenedorServicios.appendChild(card);
  });

  const botonesComprar = document.querySelectorAll(`.btn-comprar`);
  botonesComprar.forEach(btn => {
    btn.addEventListener(`click`, (e) => agregarAlCarrito(e, servicios));
  });
}

function agregarAlCarrito(e, serviciosData) {
  const idServicio = e.target.id;
  const servicioElegido = serviciosData.find(servicio => servicio.id === idServicio);
  console.log(servicioElegido);
}

const botonCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const totalCarrito = document.querySelector("#totalCarrito");
const botonesAgregar = document.querySelectorAll(".servicios-agregar");
const numerito = document.querySelector("#numerito");
  
function cargarServicios(serviciosElegidos) {
  contenedorServicios.innerHTML = "";
  
  serviciosElegidos.forEach((servicio) => {
    const div = document.createElement("div");
    div.classList.add("servicios");
    div.innerHTML = `
      <img class="servicios-imagen" src="${servicio.imagen}" alt="${servicio.titulo}">
      <div class="servicios-detalles">
          <h3 class="servicios-titulo">${servicio.titulo}</h3>
          <p class="servicios-precio">$${servicio.precio}</p>
          <button class="servicios-agregar" id="${servicio.id}">Agregar</button>
      </div>`;
  
    contenedorServicios.append(div);
  });
  actualizarBotonesAgregar();
}

cargarServicios(servicios);

botonCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonCategoria.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
  
    if (e.currentTarget.id !== "todosLosServicios") {
      const serviciosCategoria = servicios.filter(
        (servicios) => servicios.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = serviciosCategoria[0].categoria.nombre;
  
      const serviciosBoton = servicios.filter(
        (servicio) => servicio.categoria.id === e.currentTarget.id
      );
      cargarServicios(serviciosBoton);
    } else {
      tituloPrincipal.innerText = "NUESTROS SERVICIOS";
      cargarServicios(servicios);
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
  
    
    

