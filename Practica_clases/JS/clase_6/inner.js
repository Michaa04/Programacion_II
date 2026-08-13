// x= windows innerwith
// y= windows innerheigth

//location.href assing("url")
//windows.history.go(-1, 1)

//cookies: recauda información 
//cookies: localstorage, seccionstorage y indexedDB, cookies
//Ejemplos:

//Guardar informacion
//localStorage.setItem("Pepa", "holamundo")
//
//localStorage.getItem("Pepa")
localStorage.removeItem("pepe")
localStorage.clear("pepa")

sessionStorage.setItem("micha", "hola micha");

// Funciones localstorage
function probarStorage_guardar() {
    localStorage.setItem("micha", "hola micha");
    alert("Guardado micha");
}

function probarStorage_remove() {
    localStorage.removeItem("micha");
    alert("Eliminado pepa");
}

function probarStorage_clear() {
    localStorage.clear();
    alert("Eliminado todos");
}
//Ejemplo de uso
function guardarEmail() {
    let email = 
    localStorage.setItem()
}


//Asincronismo 
//Callbacks: Se le pasa una funcion
function greet(name) {
    alert("nombre: " + name);
}

function processAccess(Callbacks) {
    var name = prompt("Ingrese_nombre");
    Callbacks(name);
}

processAccess(greet);
  