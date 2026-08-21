function agregarTarea() {
    var tarea = document.getElementById("input-tarea").value;
    if (tarea === "") return;
    var tareasGuardadas = localStorage.getItem("lista-tareas");
    var tareas;
    if (tareasGuardadas === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(tareasGuardadas);
    }
tareas.push(tarea);
localStorage.setItem("lista-tareas", JSON.stringify(tareas));
document.getElementById("input-tarea").value = "";
mostrarTareas();
}

function mostrarTareas() {
    var lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    var tareasGuardadas = localStorage.getItem("lista-tareas");
    if (tareasGuardadas !== null) {
        var tareas = JSON.parse(tareasGuardadas);
        for (var i = 0; i < tareas.length; i++) {
            var li = document.createElement("li");
            li.textContent = tareas[i];
            lista.appendChild(li);
        }
    }
}