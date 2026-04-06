let numeroSecreto = 42; // O número que precisa ser encontrado
let tentativa = 0;      // Começo as tentativas do zero

// Enquanto a tentativa não for igual ao número secreto, continuo tentando
while (tentativa !== numeroSecreto) {
  tentativa++; // Incremento a tentativa em 1
}

// Quando o loop para, significa que acertei
console.log(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);