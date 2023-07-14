
//SALUDO DE REGISTRO//
let nombre = "Bequi";
let apellido = "Cm";
let nombreUsuario = prompt("Ingrese su Nombre");
let apellidoUsuario = prompt("Ingrese su Apellido");

if (nombreUsuario == nombre || apellidoUsuario == apellido) {
    alert("Hola " + nombreUsuario + apellidoUsuario + " te doy la bienvenida a Bequi.Cm");
} else {
    alert("Nombre de usuario incorrecto.");
}

console.log(nombreUsuario)
console.log(apellidoUsuario)


//CALCULADORA DE POSTEOS//

function calcularDiasDePosteo() {
    var numMeses = parseInt(prompt("Cuantos meses queres contabilizar?"));
    console.log(numMeses);
  
    if (isNaN(numMeses)) {
      console.log("Ups! No pudimos calcular tus posts. Inténtalo de nuevo.");
      alert("Ups! No pudimos calcular tus posts. Inténtalo de nuevo.");
      return;
    }
  
    var numDiasPorMes = parseInt(prompt("Ingresa la cantidad de días del mes/meses"));
    console.log(numDiasPorMes);
  
    if (isNaN(numDiasPorMes)) {
      console.log("Ups! No pudimos calcular tus posts. Inténtalo de nuevo.");
      alert("Ups! No pudimos calcular tus posts. Inténtalo de nuevo.");
      return;
    }
  
    var numPostPorDia = parseInt(prompt("Cuantos post promedios querés hacer al día?"));
    console.log(numPostPorDia);
  
    if (isNaN(numPostPorDia)) {
      console.log("Ups! No pudimos calcular tus posts. Inténtalo de nuevo.");
      alert("Ups! No pudimos calcular tus posts. Inténtalo de nuevo.");
      return;
    }
  
    var diasDePosteo = 0;
  
    for (var i = 1; i <= numMeses; i++) {
      for (var j = 1; j <= numDiasPorMes; j++) {
        switch (j % 7) {
          case 1: // Lunes
          case 2: // Martes
          case 3: // Miércoles
          case 4: // Jueves
          case 5: // Viernes
            diasDePosteo += numPostPorDia;
            break;
          default:
            break;
        }
      }
    }
  
    return diasDePosteo;
  }
  
  var diasDePosteo = calcularDiasDePosteo();
  
  if (diasDePosteo) {
    alert("Necesitasm armar " + diasDePosteo + "posteos al mes!");
    console.log(diasDePosteo);
  }

  //CALCULADORA DE PRODUCTOS//

  // Variables globales
var carrito = [];
var total = 0;

// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
  carrito.push({ nombre, precio });
}

// Función para calcular el total del carrito
function calcularTotal() {
  total = 0;

  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
}

// Función principal
function calcularProductos() {
  var opcion;

  do {
    console.log("1. Agregar producto");
    console.log("2. Calcular total");
    console.log("3. Salir");

    opcion = parseInt(prompt("Ingrese una opción:"));

    switch (opcion) {
      case 1:
        var nombre = prompt("Ingrese el nombre del producto:");
        var precio = parseFloat(prompt("Ingrese el precio del producto:"));
        agregarProducto(nombre, precio);
        break;
      case 2:
        calcularTotal();
        console.log("El total del carrito es: " + total);
        break;
      case 3:
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida. Inténtelo de nuevo.");
        break;
    }
  } while (opcion !== 3);
}

// Ejecutar la función principal
calcularProductos();

// CARRITO
var carrito = [];

// LISTADO DE PRODUCTO Y PRECIO
var productos = [
  { nombre: "Producto 1", precio: 1000 },
  { nombre: "Producto 2", precio: 1500 },
  { nombre: "Producto 3", precio: 2000 }
];

// AGREGAR PRODUCTO AL CARRITO 
function agregarProducto() {


  // Mostrar los productos disponibles
  console.log("Productos disponibles:");
  for (var i = 0; i < productos.length; i++) {
    console.log(i + 1 + ". " + productos[i].nombre + " - $" + productos[i].precio);
  }

  var opcion = parseInt(prompt("Selecciona tu producto"));


  var unidades = parseInt(prompt("Unidades de tu producto"));

  // VALIDACION
  if (opcion < 1 || opcion > productos.length) {
    alert("Opción inválida. Inténtelo de nuevo.");
    return;
  }

  // PRODUCTO SELECCIONADO
  var producto = productos[opcion - 1];

  // TOTAL PRODUCTO + UNIDADES 
  var totalProducto = producto.precio * unidades;

  // AGREGAR PRODUCTO AL CARRITO
  carrito.push({ producto: producto.nombre, precio: producto.precio, unidades: unidades, total: totalProducto });

  alert("Producto agregado al carrito!");
}

// TOTAL DEL CARRITO 
function calcularTotal() {
  var total = 0;

  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].total;
  }

  return total;
}

// FUNCIONES
function gestionarCarrito() {
  var opcion;

  do {
    opcion = parseInt(prompt("Seleccione una opción:\n1. Agregar producto\n2. Calcular total\n3. Mostrar carrito\n4. Salir"));

    switch (opcion) {
      case 1:
        agregarProducto();
        break;
      case 2:
        var totalCarrito = calcularTotal();
        alert("El total del carrito es: $" + totalCarrito.toFixed(2));
        break;
      case 3:
        mostrarCarrito();
        break;
      case 4:
        console.log("Saliendo...");
        break;
      default:
        alert("Opción inválida. Inténtelo de nuevo.");
        break;
    }
  } while (opcion !== 4);
}

// CARRITO DE COMPRAS MOSTRAR 
function mostrarCarrito() {
  console.log("=== Carrito de compras ===");

  for (var i = 0; i < carrito.length; i++) {
    console.log("Producto: " + carrito[i].producto);
    console.log("Precio: $" + carrito[i].precio.toFixed(2));
    console.log("Unidades: " + carrito[i].unidades);
    console.log("Total: $" + carrito[i].total.toFixed(2));
    console.log("------------------------");
  }

  console.log("==========================");
}

// Ejecutar la función principal
gestionarCarrito();
















// LISTADO DE PRODUCTOS //

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["CONTENIDO ESTRATÉGICO", "AUDITORÍAS", "ASESORÍA", "PLANIFICACIÓN DE CONTENIDO"];
const productos = [
    { nombre: "CONTENIDO ESTRATÉGICO", precio: 2000 },
    { nombre: "AUDITORÍAS", precio: 2500 },
    { nombre: "ASESORÍA", precio: 4500 },
    { nombre: "PLANIFICACIÓN DE CONTENIDO", precio: 3000 }
];


// LISTADO DE PRODUCTOS //

// LISTADO 1 //

let lista = document.createElement("ul");
lista.classList.add("lista");
lista.innerHTML = "<li class='lista-item'>" + productos[0] + "</li>";
lista.innerHTML += "<li class='lista-item'>" + productos[1] + "</li>";
lista.innerHTML += `<li class="lista-item">${productos[2]}</li>`;
lista.innerHTML += `<p>Este es el ítem 4: ${productos[3]}</p>`
for (producto of productos) {
    lista.innerHTML += `<li class="lista-item">${producto}</li>`
}

box4.append(lista);





// PARA LOS AUMENTOS //

 const nombres = productos.map((producto) => producto.nombre);
 console.log(nombres);

 const preciosActualizados = productos.map((producto) => {
    return {
         nombre: producto.nombre,
         precio: producto.precio * 1.5
     }
 });
 console.log(productos);
 console.log(preciosActualizados);


// TOTAL DEL CARRITO //
 const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);
