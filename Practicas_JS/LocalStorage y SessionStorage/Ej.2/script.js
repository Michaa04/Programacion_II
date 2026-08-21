function contarVisitas() {
    var visitas = localStorage.getItem("visitas");
    if (visitas === null) {
        visitas = 0;
    }
    visitas = parseInt(visitas) + 1;
    localStorage.setItem("visitas", visitas);
    document.getElementById("contador").textContent = visitas;
    }

     

