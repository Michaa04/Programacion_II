var progresoGuardado = localStorage.getItem("progresoLectura");
if (progresoGuardado !== null) {
    document.getElementById("progreso-lectura").textContent = progresoGuardado;
}

function guardarProgreso() {
    var progresoIngresado = document.getElementById("input-porcentaje").value;
    localStorage.setItem("progresoLectura", progresoIngresado);
    document.getElementById("progreso-lectura").textContent = progresoIngresado;
}