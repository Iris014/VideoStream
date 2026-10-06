// ========================================
// 1. SUMAR "ME GUSTA"
// ========================================
const btnLike = document.getElementById("btnLike");
const txtLike = document.getElementById("txtLike");
let likeActivo = false;

if (btnLike && txtLike) {
    btnLike.addEventListener("click", function () {
        likeActivo = !likeActivo; // Alternar estado

        if (likeActivo) {
            txtLike.textContent = "4,9 K";
            btnLike.className = "btn-accion like-activo"; // Reemplazo de classList
        } else {
            txtLike.textContent = "4,8 K";
            btnLike.className = "btn-accion"; // Reemplazo de classList
        }
    });
}


// ========================================
// 2. BOTÓN SUSCRIBIRSE
// ========================================
const btnSuscribirse = document.getElementById("btnSuscribirse");
const txtSuscriptores = document.getElementById("txtSuscriptores");
let estaSuscrito = false;

if (btnSuscribirse && txtSuscriptores) {
    btnSuscribirse.addEventListener("click", function () {
        estaSuscrito = !estaSuscrito;

        if (estaSuscrito) {
            btnSuscribirse.textContent = "Suscrito";
            btnSuscribirse.classList.add("suscrito");
            txtSuscriptores.textContent = "1,2 M de suscriptores";
        } else {
            btnSuscribirse.textContent = "Suscribirse";
            btnSuscribirse.classList.remove("suscrito");
            txtSuscriptores.textContent = "1,3 M de suscriptores";
        }
    });
}


// ========================================
// 3. AÑADIR A LA COLA DE REPRODUCCIÓN
// ========================================
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const alertaCola = document.getElementById("alerta-cola");
const btnCerrarAlerta = document.getElementById("btnCerrarAlerta");
let timeoutAlerta;

// Función para mostrar la alerta
function mostrarAlerta() {
    if (alertaCola) {
        alertaCola.classList.add("mostrar");
        
        // Limpiar timeout anterior si se clica rápido varias veces
        clearTimeout(timeoutAlerta);
        
        // Ocultar alerta después de 3 segundos
        timeoutAlerta = setTimeout(function() {
            alertaCola.classList.remove("mostrar");
        }, 3000);
    }
}

// Cerrar alerta manual
if (btnCerrarAlerta) {
    btnCerrarAlerta.addEventListener("click", function() {
        alertaCola.classList.remove("mostrar");
    });
}

// Logica de añadir items
botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const itemRecomendado = boton.closest(".item-recomendado");
        const listaCola = document.getElementById("listaCola");

        if (itemRecomendado && listaCola) {
            // Clonar el nodo
            const nuevoItem = itemRecomendado.cloneNode(true);
            nuevoItem.classList.remove("item-recomendado");

            // Cambiar el botón de agregar por el de eliminar
            const btnAccion = nuevoItem.querySelector(".btn-agregar");
            btnAccion.textContent = "✕";
            btnAccion.className = "btn-eliminar";

            // Evento para poder eliminar este nuevo nodo después
            btnAccion.addEventListener("click", function () {
                nuevoItem.style.display = "none";
            });

            // Insertar en la lista y mostrar mensaje
            listaCola.appendChild(nuevoItem);
            mostrarAlerta();
        }
    });
});


// ========================================
// 4. REPRODUCIR AL PASAR EL MOUSE (HOVER)
// ========================================
const miniaturas = document.querySelectorAll(".miniatura-placeholder, .miniatura-sidebar");

miniaturas.forEach(function (miniatura) {
    miniatura.addEventListener("onmouseover", function () {
        // Agrega una clase que mediante CSS oculta la trama gris y muestra un icono de play
        miniatura.classList.add("reproduciendo"); 
    });

    miniatura.addEventListener("onmouseout", function () {
        // Retira la clase para "pausar"
        miniatura.classList.remove("reproduciendo");
    });
});