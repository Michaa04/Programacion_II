//Funtion
function guardar_storage() {
    var name = document.getElementById("input-name").value;
    localStorage.setItem("usuario", name);
    alert(name + " Guardado");
}
