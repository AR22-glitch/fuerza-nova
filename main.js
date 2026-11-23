// ==================================
// MENU HAMBURGUESA SPORT STYLE
// ==================================

const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function() {

        menu.classList.toggle("menu-activo");

        const abierto = menu.classList.contains("menu-activo");

        botonMenu.setAttribute("aria-expanded", abierto);

    });

}

// ==================================
// VALIDACION DEL FORMULARIO
// ==================================


const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        // OBTENER LOS DATOS DEL FORMULARIO
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // FORMATOS DE VALIDACION
        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const formatoTelefono = /^[0-9]{10}$/;

        // VALIDAR NOMBRE
        if (nombre === "") {
            alert("Por favor escribe tu nombre.");
            return;
        }

        // VALIDAR CORREO
        if (!formatoCorreo.test(correo)) {
            alert("Escribe un correo electrónico válido.");
            return;
        }

        // VALIDAR TELEFONO
        if (!formatoTelefono.test(telefono)) {
            alert("El teléfono debe tener exactamente 10 dígitos.");
            return;
        }

        // VALIDAR MENSAJE
        if (mensaje === "") {
            alert("Por favor escribe tu mensaje.");
            return;
        }

        // MENSAJE DE CONFIRMACION
        alert("¡Formulario validado correctamente! Gracias por contactar a Sport Style.");

        formulario.reset();

    });

}
