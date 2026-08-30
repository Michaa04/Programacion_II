 var mensajeGuardado = localStorage.getItem("mensajeGuardado"); 

if (mensajeGuardado !== null) {
    document.getElementById("mensajeBienvenida").textContent = mensajeGuardado;
}

function guardarMensaje() {
    var textoIngresado = document.getElementById("textareaInput").value; 
    localStorage.setItem("mensajeGuardado", textoIngresado);    
    document.getElementById("mensaje").textContent = textoIngresado;
}
