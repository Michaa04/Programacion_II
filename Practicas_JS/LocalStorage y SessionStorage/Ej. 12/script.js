function guardarDatos() {
    var datos = {
        name: document.getElementById("input-name").value,
        surname: document.getElementById("input-surname").value,
        age: document.getElementById("input-age").value
    };
    localStorage.setItem("datosGuardados", JSON.stringify(datos));
    alert("Datos guardados");
}

function mostrarDatos() {
    datosGuardados = localStorage.getItem("datosGuardados");
    if (datosGuardados !== null) {
        datosFormulario = JSON.parse(datosGuardados);
        document.getElementById("input.name").value = datosFormulario.name;
        document.getElementById("input-surname").value = datosFormulario.surname;
        document.getElementById("input-age").value = datosFormulario.age;
    }
}

document.addEventListener("DOMContentLoaded", mostrarDatos);