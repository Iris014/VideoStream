// ========================================
// 1. SUMAR "ME GUSTA"
// ========================================
const btnLike = document.getElementById("btnLike");
const txtLike = document.getElementById("txtLike");
let likeActivo = false;

if (btnLike && txtLike) {
    btnLike.addEventListener("click", function () {
        likeActivo = !likeActivo;

        if (likeActivo) {
            txtLike.textContent = "4,9 K";
            btnLike.className = "btn-accion like-activo";
        } else {
            txtLike.textContent = "4,8 K";
            btnLike.className = "btn-accion";
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

function mostrarAlerta() {
    if (alertaCola) {
        alertaCola.classList.add("mostrar");
        
        clearTimeout(timeoutAlerta);
        
        timeoutAlerta = setTimeout(function() {
            alertaCola.classList.remove("mostrar");
        }, 3000);
    }
}

if (btnCerrarAlerta) {
    btnCerrarAlerta.addEventListener("click", function() {
        alertaCola.classList.remove("mostrar");
    });
}

botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const itemRecomendado = boton.closest(".item-recomendado");
        const listaCola = document.getElementById("listaCola");

        if (itemRecomendado && listaCola) {
            const nuevoItem = itemRecomendado.cloneNode(true);
            nuevoItem.classList.remove("item-recomendado");

            const btnAccion = nuevoItem.querySelector(".btn-agregar");
            btnAccion.image.src = "static/icons/icon-6.png";
            btnAccion.className = "btn-eliminar";

            btnAccion.addEventListener("click", function () {
                nuevoItem.style.display = "none";
            });

            listaCola.appendChild(nuevoItem);
            mostrarAlerta();
        }
    });
});


// ========================================
// 4. REPRODUCIR AL PASAR EL MOUSE (onmouseover / onmouseout)
// ========================================
const miniaturas = document.querySelectorAll(".miniatura-placeholder, .miniatura-sidebar");

miniaturas.forEach(function (miniatura) {
    const video = miniatura.querySelector("video");

    // Asignación directa del evento onmouseover
    miniatura.onmouseover = function () {
        miniatura.classList.add("reproduciendo");
        if (video) {
            video.play();
        }
    };

    // Asignación directa del evento onmouseout
    miniatura.onmouseout = function () {
        miniatura.classList.remove("reproduciendo");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };
});