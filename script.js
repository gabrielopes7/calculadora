let operador = "";

let visor = document.getElementById("visor");
let soma = document.getElementsByClassName("buttons")[11];
let sub = document.getElementsByClassName("buttons")[7];
let mult = document.getElementsByClassName("buttons")[3];

// Pega o número para ser mostrado no visor e adiciona o números na variavel operador.
function getNumbers(n) {
  visor.value += String(n);
  operador += String(n);
}

// Essa função está direcionando as operaçoes à variavel operador.
function contas(op) {
  if (op == soma) {
    operador += `+`;
  } else if (op == sub) {
    operador += `-`;
  } else if (op == mult) {
    operador += `*`;
  } else {
    operador += `/`;
  }
  visor.value = "";
}

// Essa função está testando os arrays, para saber qual resultado será mostrado a seguir.

function resultado() {
  if (visor.value == "") {
    alert("Por favor, selecione uma operação!");
  } else {
    operador = eval(operador);
    visor.value = operador;
  }
}

// Essa função está limpando toda a calculadora.

function limpar() {
  visor.value = "";
  operador = "";
}
