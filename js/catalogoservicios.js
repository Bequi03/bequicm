const serviciosArray = [
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
}

cargarServicios(serviciosArray);

botonCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const serviciosCategoria = serviciosArray.filter(servicio => servicio.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = serviciosCategoria[0].categoria.nombre;

            const serviciosBoton = serviciosArray.filter( servicios.categoria.id === e.currentTarget.id);
            cargarServicios(serviciosBoton);
            
        } else {
            tituloPrincipal.innerText = "NUESTROS SERVICIOS";
            cargarServicios(serviciosArray);
        }
    });
});
