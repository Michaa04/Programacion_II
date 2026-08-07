function iteracion_num() {
    for (let i = 0; i <= 10; i++) {
    alert(i);
}
}

function iteracion_num1() {
    var frutas = ["manzana", "banana", "cereza", "durazno"];
    for (let i = 0; i < frutas.length; i++)
        alert(frutas[i]);
}
    
function iteracion_while() {
    var frutas = ["manzana", "banana", "cereza", "durazno"]
    let i = 0;
//    while (condicion) {}
    while (i < frutas.length) {
        alert(frutas[i]);
        if(frutas[i] == "cereza") {
            break;
        }
        i++;
    }
}