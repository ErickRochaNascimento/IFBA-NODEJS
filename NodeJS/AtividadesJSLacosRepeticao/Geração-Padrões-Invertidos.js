// O loop externo controla as linhas, começando de 5 e diminuindo até 1
for (let i = 5; i >= 1; i--) {
  let linha = ""; // Reinicio a string da linha a cada iteração

  // O loop interno preenche a linha com '#'
  // A quantidade de '#' é igual ao número da linha atual (i)
  for (let j = 1; j <= i; j++) {
    linha += "#";
  }

  // Imprimo a linha pronta
  console.log(linha);
}