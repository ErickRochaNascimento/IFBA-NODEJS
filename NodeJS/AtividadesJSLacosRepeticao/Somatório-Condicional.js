let soma = 0;
let numero = 1;
let contador = 0; // Para saber quantos números precisei somar

// Enquanto a soma for menor que 150, o loop continua rodando
while (soma < 150) {
  soma += numero; // Adiciono o número atual à soma
  numero++;       // Passo para o próximo número
  contador++;     // Conto que somei mais um número
}

// Mostro os resultados finais
console.log(`Soma final: ${soma}`);
console.log(`Quantidade de números somados: ${contador}`);