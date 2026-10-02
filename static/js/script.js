// ========================================
// BOTONES "VER MÁS"
// ========================================

const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

botonesVerMas.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const card = boton.closest(".destino-card");

        const informacion = card.querySelector(".extra-info");

        if (informacion.classList.contains("oculto")) {

            informacion.classList.remove("oculto");

            boton.textContent = "Ver menos";

        } else {

            informacion.classList.add("oculto");

            boton.textContent = "Ver más";
        }

    });

});


// ========================================
// BUSCADOR
// ========================================

const inputBuscar = document.getElementById("buscarDestino");
const botonBuscar = document.getElementById("btnBuscar");

const mensajeBusqueda = document.getElementById("mensajeBusqueda");

const tarjetas = document.querySelectorAll(".destino-card");


botonBuscar.addEventListener("click", function () {

    const texto = inputBuscar.value.trim().toLowerCase();

    let encontrados = 0;


    tarjetas.forEach(function (tarjeta) {

        const titulo = tarjeta
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const pais = tarjeta
            .querySelector(".pais")
            .textContent
            .toLowerCase();


        if (
            texto === "" ||
            titulo.includes(texto) ||
            pais.includes(texto)
        ) {

            tarjeta.style.display = "flex";

            encontrados++;

        } else {

            tarjeta.style.display = "none";

        }

    });


    if (texto === "") {

        mensajeBusqueda.textContent =
            "Mostrando todos los destinos.";

    } else {

        mensajeBusqueda.textContent =
            `Destinos encontrados: ${encontrados}`;

    }

});


// ========================================
// BUSCAR AL PRESIONAR ENTER
// ========================================

inputBuscar.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        botonBuscar.click();

    }

});