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
  resultado.setAttribute("onclick", `resultado(${visor.value})`); // Essa função pega o número digitado dos botões colocando os dentro do "visor da calculadora" e distribuindo eles para as funções soma/subtrai
}

function somar(add) {
  somando.push(add); // Essa função adiciona os números no array e no visor
  visor.value = "";
}

function subtrair(sub) {
  subtraindo.push(sub);
  visor.value = "";
}

function limpar() {
  visor.value = "";
  somando = []; // Essa função "zera" tudo , o visor, e os arrays.
  subtraindo = [];
}

function resultado() {
  if (visor.value != "") {
    alert("Primeiro selecione a operação"); // Essa função testa se contém algo no visor, e dá os resultados das contas, pegando o que tem dentro do array e reduzindo em 1 array somado , ou subtraido.
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
