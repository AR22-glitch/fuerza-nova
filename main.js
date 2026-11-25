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


// ========================================
// VALIDACION COMPLETA DEL FORMULARIO
// SPORT STYLE
// ========================================

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const mensaje = document.getElementById("mensaje");

        // Eliminar mensajes anteriores
        formulario.querySelectorAll(".mensaje-error").forEach(error => {
            error.remove();
        });

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const formatoTelefono = /^[0-9]{10}$/;

        let formularioValido = true;

        // Funcion para mostrar errores
        function mostrarError(campo, texto) {

            const error = document.createElement("small");

            error.className = "mensaje-error";
            error.textContent = texto;

            campo.insertAdjacentElement("afterend", error);

            campo.classList.add("campo-invalido");

            formularioValido = false;
        }

        // Validar nombre
        if (nombre.value.trim() === "") {
            mostrarError(nombre, "El nombre es obligatorio.");
        }

        // Validar correo
        if (correo.value.trim() === "") {
            mostrarError(correo, "El correo es obligatorio.");
        } 
        else if (!formatoCorreo.test(correo.value.trim())) {
            mostrarError(correo, "Escribe un correo válido.");
        }

        // Validar telefono
        if (telefono.value.trim() === "") {
            mostrarError(telefono, "El teléfono es obligatorio.");
        } 
        else if (!formatoTelefono.test(telefono.value.trim())) {
            mostrarError(telefono, "Escribe exactamente 10 dígitos.");
        }

        // Validar mensaje
        if (mensaje.value.trim() === "") {
            mostrarError(mensaje, "El mensaje es obligatorio.");
        }

        // Si existen errores
        if (!formularioValido) {
            alert("Por favor, revisa los campos marcados en rojo.");
            return;
        }

        // Si todo esta correcto
        alert("¡Formulario validado correctamente! Gracias por contactar a Sport Style.");

        formulario.reset();

    });

}
