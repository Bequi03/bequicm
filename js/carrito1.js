
// LISTADO DE PRODUCTOS  
const servicios = [
    {
        id: "contenidoEstrategico-1",
        titulo: "contenidoEstrategico1",
        imagen: "../imagenes/servicios/redes/1.png",
        categoria: {
            nombre: "CONTENIDO ESTRATÉGICO",
            id: "contenidoEstrategico",
        },
        precio: 10101,
    },
    {
        id: "auditorias-1",
        titulo: "auditorias1",
        imagen: "../imagenes/servicios/redes/2.png",
        categoria: {
            nombre: "AUDITORÍAS",
            id: "auditorias",
        },
        precio: 2344,
    },
    {
        id: "asesoria-1",
        titulo: "asesoria1",
        imagen: "../imagenes/servicios/redes/2.png",
        categoria: {
            nombre: "ASESORÍA",
            id: "asesoria",
        },
        precio: 232,
    },
    {
        id: "planificacionDeContenido-1",
        titulo: "planificacionDeContenido1",
        imagen: "../imagenes/servicios/redes/2.png",
        categoria: {
            nombre: "PLANIFICACIÓN DE CONTENIDO",
            id: "planificacionDeContenido",
        },
        precio: 24440,
    },
];


const contenedorServicios = document.querySelector("#contenedor-servicios");
const botonCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const totalCarrito = document.querySelector("#totalCarrito");
const botonesAgregar = document.querySelectorAll(".servicios-agregar");
const numerito = document.querySelector("#numerito");

function cargarServicios(serviciosElegidos) {
    contenedorServicios.innerHTML = "";

    serviciosElegidos.forEach(servicio => {
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

botonCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todosLosServicios") {
            const serviciosCategoria = servicios.filter(servicios => servicios.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = serviciosCategoria[0].categoria.nombre;

            const serviciosBoton = servicios.filter(servicio => servicio.categoria.id === e.currentTarget.id);
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

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// cantidades en el carrito 
const serviciosEnCarrito = []

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const servicioAgregado = servicios.find(servicios => servicios.id === idBoton);



    if (serviciosEnCarrito.some(servicios => servicios.id === idBoton)) {
        const index = serviciosEnCarrito.findIndex(servicios => servicios.id === idBoton);
        serviciosEnCarrito[index].cantidad++;
        
      } else {
        servicioAgregado.cantidad = 1;
        serviciosEnCarrito.push(servicioAgregado);
      }
      

  localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
  
  actualizarNumerito();
    }
    function actualizarNumerito() {
        let nuevoNumerito = serviciosEnCarrito.reduce((acc, servicios) => acc + servicios.cantidad, 0);
        numerito.innerText = nuevoNumerito;
  
    }
    
    
    

