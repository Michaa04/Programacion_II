const app = document.getElementById("app");

const palabras = ["JavaScript", "Python", "HTML", "JAVA"];

const ranking = [];

let nameJugador = ""; 

//Inicio 
function mostrarInicio() {
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");

    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    titulo.textContent = "El Ahorcado";
    contenedor.appendChild(titulo);

    const wrapper = document.createElement("div");
    wrapper.classList.add("campo");

    const label = document.createElement("label");
    label.classList.add("label");
    label.textContent = "Ingresa tu nombre:";

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("input");

    wrapper.appendChild(label);
    wrapper.appendChild(input);

    contenedor.appendChild(wrapper);

    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Comenzar Juego"; 
    contenedor.appendChild(button);

    app.appendChild(contenedor)
}
 mostrarInicio()

