var colorGuardado = localStorage.getItem("colorFondo");
if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
    document.getElementById("color-select").value = colorGuardado;
}

function guardarColor() {
    var colorSeleccionado = document.getElementById("color-select").value;
    document.body.style.backgroundColor = colorSeleccionado;
    localStorage.setItem("colorFondo", colorSeleccionado);
}
