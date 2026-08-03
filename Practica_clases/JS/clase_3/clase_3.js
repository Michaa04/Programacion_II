// Array 
let arrPrueba; 
arrayProfesiones = document.getElementById("txtareaComentario")
arrayProfesiones = ["Profesor", "Policia", "Enfermero", "Desarrollador web"]

function mostrar_profesion() {
    alert(arrayProfesiones[2])
}

//function mostrar_array() {
//    for (i:0 ; arrayProfesiones.longth; i ++)
//        alert(arrayProfesiones[i])
//}

// Objetos
var objPersona;
objPersona = {
    "Nombre": "Michael",
    "Apellido": "Zarza",
    "Edad": 21,
    "Profesiones": ["Jardinero", "Desarrollador web"]
}

function mostrar_obj() {
    alert(objPersona.Nombre)
}

function imprimir() {
    
} 


var saludo = function (){
    return ("Hola mundo");
}

function mostrar_saludo(){
    alert(saludo());
    alert(typeof saludo)
    //console.log()
}

let myFuntion = function(){}
let myString = "Hola mundo";
let myNumber = 21;
let myDate= new Date()

function mostrar_typeof() {
    alert(typeof myFuntion);
    alert(typeof myString);
    alert(typeof myNumber);
    alert(typeof myDate)
}


