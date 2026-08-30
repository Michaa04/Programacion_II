var myCheckbox = document.getElementById("my-checkbox"); 
var estadoGuardado = localStorage.getItem("estadoCheckbox");

if (estadoGuardado !== null) {
    myCheckbox.checked = (estadoGuardado === "true");
}

myCheckbox.addEventListener("change", function() {
    localStorage.setItem("estadoCheckbox", myCheckbox.checked);
})