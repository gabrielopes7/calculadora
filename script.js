let visor = document.getElementById("inputVisor");
let somando = [];
let subtraindo = [];

function getNumber(n) {
  visor.value += String(n);

  let soma = document.getElementById("soma");
  let subtrai = document.getElementById("subtrai");
  let resultado = document.getElementById("resultado");

  soma.setAttribute("onclick", `somar (${visor.value})`);
  subtrai.setAttribute("onclick", `subtrair(${visor.value})`);
  resultado.setAttribute("onclick", `resultado(${visor.value})`);
}

function somar(add) {
  somando.push(add);
  visor.value = "";
  console.log(somando);
}

function subtrair(sub) {
  subtraindo.push(sub);
  subtraindo.sort(function (b, a) {
    return a - b;
  });
  visor.value = "";
  console.log(subtraindo);
}

function limpar(){
    visor.value = "";
    somando = [];
    subtraindo = [];
}

function resultado() {
  if (visor.value != "") {
    alert("Primeiro selecione a operação");
  }

  if (somando != "") {
    let resultadoSoma = somando.reduce(
      (resultadoSoma, somando) => resultadoSoma + somando
    );
    visor.value = resultadoSoma;
  } else if (subtraindo != "") {
    let resultadoSub = subtraindo.reduce(
      (resultadoSub, subtraindo) => resultadoSub - subtraindo
    );
    visor.value = resultadoSub;
  }
}
