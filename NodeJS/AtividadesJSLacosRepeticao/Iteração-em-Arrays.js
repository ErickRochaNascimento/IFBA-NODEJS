// Criei minha lista de cores para testar
let cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Roxo'];

// Percorro o array inteiro, do índice 0 até o final
for (let i = 0; i < cores.length; i++) {
  // Verifico se o nome da cor tem 5 ou mais letras
  if (cores[i].length >= 5) {
    // Se tiver, eu imprimo no console
    console.log(cores[i]);
  }
}
