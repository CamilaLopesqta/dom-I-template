let clickInicial = 0;
// aparece o contador no console
function contarCliques() {
  clickInicial += 1;
  console.log(clickInicial);
}

let cliqueInicialTela = 0;
// aparece o contador na tela
function aparecerContadorNaTela() {
  clickInicial += 1;
  const contadorElemento = document.getElementById("contador");
  contadorElemento.innerHTML = clickInicial;
}
