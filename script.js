let somando = [];
let subtraindo = [];
let multiplicando = [];
let dividindo = [];


let visor = document.getElementById("visor");
let soma = document.getElementsByClassName("buttons")[11];
let sub = document.getElementsByClassName("buttons")[7];
let mult = document.getElementsByClassName("buttons")[3];

// Pega o número para ser mostrado no visor.
function getNumbers(n) {
  visor.value += String(n);
}


// Essa função está direcionando os números para seus respectivos arrays.
function contas(op){
  if ( op == soma){
    somando.push(Number(visor.value));
  } else if (op == sub){
    subtraindo.push(Number(visor.value));
  } else if (op == mult){
    multiplicando.push(Number(visor.value));
  } else{
    dividindo.push(Number(visor.value));
  }
  visor.value = ""
}

// Essa função está testando os arrays, para saber qual resultado será mostrado a seguir.

function resultado() {
  if (visor.value != "") {
    alert("Por favor, selecione uma operação!");
  } else{
    if (somando != "") {
      let soma = somando.reduce((soma, somando) => soma + somando);
      visor.value = soma;
    }
  
    if (subtraindo != "") {
      let subtrai = subtraindo.reduce(
        (subtrai, subtraindo) => subtrai - subtraindo
      );
      visor.value = subtrai;
    }

    if (multiplicando != ""){
      let multiplica = multiplicando.reduce(
        (multiplica, multiplicando) => multiplica * multiplicando
        );
        visor.value = multiplica;
    }

    if (dividindo != ""){
      let dividi = dividindo.reduce(
        (dividi, dividindo) => dividi / dividindo
      );
      visor.value = dividi;
    }
  };
}

// Essa função está limpando toda a calculadora.

function limpar() {
  visor.value = "";
  subtraindo = [];
  somando = [];
  multiplicando = [];
  dividindo = [];
}
