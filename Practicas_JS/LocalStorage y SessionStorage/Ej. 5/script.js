var segundos = sessionStorage.getItem("tiempo");
if (segundos === null) {
    var segundos = 0;
} else {
    segundos = parseInt(segundos);
}

document.getElementById("tiempo").textContent = segundos;

function temporizador() {
    segundos = segundos + 1;
    document.getElementById("tiempo").textContent = segundos;
    sessionStorage.setItem("tiempo", segundos); 
}

setInterval(temporizador, 1000);