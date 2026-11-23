// ==================================
// SPORT STYLE - CARRITO DE COMPRAS
// ==================================

// Obtener los botones de los productos
const botones = document.querySelectorAll(".agregar-carrito");

// Obtener el carrito guardado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos
botones.forEach(boton => {

    boton.addEventListener("click", function() {

        // Obtener información del producto
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        // Buscar si el producto ya existe
        const productoExistente = carrito.find(
            producto => producto.nombre === nombre
        );

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({
                nombre: nombre,
                precio: precio,
                cantidad: 1
            });
        }

        // Guardar carrito
        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert(nombre + " agregado al carrito");

    });

});

// ==================================
// MOSTRAR PRODUCTOS EN EL CARRITO
// ==================================

const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");

function mostrarCarrito() {

    if (!listaCarrito) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    listaCarrito.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    carrito.forEach((producto, indice) => {

        total += producto.precio * producto.cantidad;

        const articulo = document.createElement("article");

        articulo.classList.add("producto");

        articulo.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio} MXN</p>
            <p>Cantidad: ${producto.cantidad}</p>

            <button onclick="cambiarCantidad(${indice}, -1)">
                -
            </button>

            <button onclick="cambiarCantidad(${indice}, 1)">
                +
            </button>

            <button onclick="eliminarProducto(${indice})">
                Eliminar
            </button>
        `;

        listaCarrito.appendChild(articulo);

    });

    totalCarrito.textContent = "$" + total + " MXN";

}

// CAMBIAR CANTIDADES

function cambiarCantidad(indice, cambio) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito[indice].cantidad += cambio;

    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

}

// ELIMINAR PRODUCTOS

function eliminarProducto(indice) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(indice, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

}

// MOSTRAR CARRITO AL ABRIR LA PÁGINA

mostrarCarrito();
