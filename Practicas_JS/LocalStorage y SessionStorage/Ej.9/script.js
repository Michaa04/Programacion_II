function agregarProducto() {
    var producto = document.getElementById("input-producto").value;
    var listaGuardada = localStorage.getItem("listaCompra");
    if (listaGuardada === null) {
        listaCompra = []
    } else {
        listaCompra = JSON.parse(listaGuardada);
    }
    listaCompra.push(producto);
    localStorage.setItem("listaCompra", JSON.stringify(listaCompra));
    mostrarLista();
}

function mostrarLista() {
    var listaProducto = document.getElementById("lista-compras");
    listaProducto.innerHTML = "";
    var listaGuardada = localStorage.getItem("listaCompra");
    if (listaGuardada !== null) {
        listaCompra = JSON.parse(listaGuardada);
        for (var i = 0; i < listaCompra.length; i++) {
            var li = document.createElement("li");
            li.textContent = listaCompra[i];
            listaProducto.appendChild(li);
        }
    }
}
document.addEventListener("DOMContentLoaded", mostrarLista);

