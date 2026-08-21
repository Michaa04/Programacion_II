function guardarNota() {
    var nota = document.getElementById("input-nota").value;
    if (nota === "") return;
    var notasGuardadas = localStorage.getItem("lista-notas");
    var notas; 
    if (notasGuardadas === null) {
        notas = [];
    } else {
        notas = JSON.parse(notasGuardadas);
    }
    notas.push(nota);
    localStorage.setItem("lista-notas", JSON.stringify(notas));
    document.getElementById("input-nota").value = "";
    mostrarNotas();
}

function mostrarNotas() {
    var lista = document.getElementById("lista-notas");
    lista.innerHTML = "";
    var notasGuardadas = localStorage.getItem("lista-notas");
    if (notasGuardadas != null) {
        var notas = JSON.parse(notasGuardadas);
        for(var i = 0; i < notas.length; i++) {
            var li = document.createElement("li");
            li.textContent = notas[i];
            lista.appendChild(li);
        }
    }
}