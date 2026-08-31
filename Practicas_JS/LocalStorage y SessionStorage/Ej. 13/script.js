var puntos = 0;

function mostrarPuntaje() {
    var puntajeGuardado = localStorage.getItem("puntajeJuego");
    if (puntajeGuardado !== null) {
        puntos = parseInt(puntajeGuardado);   
    }
    document.getElementById("puntaje").textContent = puntos;   
}

function sumarPuntos() {
    puntos += 10;
    document.getElementById("puntaje").textContent = puntos;
    localStorage.setItem("puntajeJuego", puntos);
}

document.addEventListener("DOMContentLoaded", mostrarPuntaje); 

function reiniciarJuego() {
    puntos = 0;
    localStorage.removeItem("puntajeJuego");
    document.getElementById("puntaje").textContent = puntos;
}