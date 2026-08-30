var fechaGuardada = localStorage.getItem("ultimaFecha");
var horaGuardada = localStorage.getItem("ultimaHora");

if (fechaGuardada !== null && horaGuardada !== null) {
    document.getElementById("fecha-ingresada").textContent = fechaGuardada;
    document.getElementById("hora-ingresada").textContent = horaGuardada;
} 

var actualidad = new Date();
localStorage.setItem("ultimaFecha", actualidad.toLocaleDateString());
localStorage.setItem("ultimaHora", actualidad.toLocaleTimeString());