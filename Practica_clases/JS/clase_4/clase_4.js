function numero_mayor() {
  let a = 5;
  let b = 7;
  let c = 3;

  if (a > b) {
    alert("El mayor es: " + a);
  } else if (b > a) {
    alert("El mayor es: " + b);
  } else {
    alert("Son iguales");
  }
}

function par_impar() {
    let numero = Number(document.getElementById("input_number").value);
    if (numero % 0) {
      alert("Numero Par");
    } else {
      alert("Numero impar")
    }
}

function edad_comprobante() {
  let edad = Number(document.getElementById("input_edad").value);

  if (isNaN(edad)) {
    alert("Ingrese un número válido");
  } else if (edad >= 18) {
    alert("Es mayor de edad");
  } else {
    alert("Es menor de edad");
  }
}

function dia_semana_actual() {
  let now = new Date();
  let numday = now.getDay();

  switch (numday) {
    case 0: alert("domingo"); break;
    case 1: alert("lunes"); break;
    case 2: alert("martes"); break;
    case 3: alert("miércoles"); break;
    case 4: alert("jueves"); break;
    case 5: alert("viernes"); break;
    case 6: alert("sábado"); break;
    default: alert("error");
  }
}

function calcular() {
  let num1 = Number(document.getElementById("inputnumber1").value);
  let num2 = Number(document.getElementById("inputnumber2").value);
  let op = document.getElementById("inputoperacion").value;
  switch (op) {
    case "+": resultado = num1 + num2; break;
    case "-": resultado = num1 - num2; break;
    case "*": resultado = num1 * num2; break;
    case "/": resultado = num1 / num2; break
    default: resultado = "operación no valida";
  }
  alert("El resultado es: " + resultado)
}

// Operador Ternario
function descuento() {
  let num = 10500;
  let resultado = num >= 10000 ? num * 0.80 : num;
  alert("Total a pagar:" + resultado);
}

//function mayor(){ 
function mayor() {
  let a = 8;
  let b = 3;
  let c = 2;
  let mayor = a > b ? (a > c ? a : c) : (b > c ? b : c);
  alert("El numero mayor es: " + mayor)
}