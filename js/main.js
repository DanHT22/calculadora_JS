// ********* CALCULADORA *************

// Traer elementos
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnDiv = document.getElementById("btnDiv");
let btnMultiplica = document.getElementById("btnMultiplica");

let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
let btnClear = document.getElementById("btnClear");

let txtResultado = document.getElementById("txtResultado");


//deaclarar variables
let operador = " ";
let resultado = "";


// EVENTOS a los botones 
btnClear.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value = " ";
});

btnSuma.addEventListener("click", function (e) {
    e.preventDefault();
    operador = txtResultado.value;
    formula = "+";
    txtResultado.value = "+";
});

btnResta.addEventListener("click", function (e) {
    e.preventDefault();
    operador = txtResultado.value;
    formula = "-";
    txtResultado.value = "-";
});

btnDiv.addEventListener("click", function (e) {
    e.preventDefault();
    operador = txtResultado.value;
    formula = "/";
    txtResultado.value = "/";
});

btnMultiplica.addEventListener("click", function (e) {
    e.preventDefault();
    operador = txtResultado.value;
    formula = "*";
    txtResultado.value = "X";
});

btn9.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "9";
});

btn8.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "8";
});

btn7.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "7";
});

btn6.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "6";
});

btn5.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "5";
});

btn4.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "4";
});

btn3.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "3";
});

btn2.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "2";
});

btn1.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "1";
});

btn0.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += "0";
});

btnPunto.addEventListener("click", function (e) {
    e.preventDefault();
    txtResultado.value += ".";
});

//Evento para realizar las operaciones
btnIgual.addEventListener("click", function (e) {
    e.preventDefault();
    let segundoOperador = txtResultado.value.substring(1);
    switch (formula) {
        case "+":
            resultado = parseFloat(operador) + parseFloat(segundoOperador);
            break;
        case "-":
            resultado = parseFloat(operador) - parseFloat(segundoOperador);
            break;
        case "*":
            resultado = parseFloat(operador) * parseFloat(segundoOperador);
            break;
        case "/":
            resultado = parseFloat(operador) / parseFloat(segundoOperador);
            break;
    }
    txtResultado.value = resultado;
});


