let notas = [8.5, 7.0, 9.2, 6.8, 10.0];
let soma = 0;

// Percorro cada nota dentro do array de notas
for (let nota of notas) {
  soma += nota; // Somo a nota atual ao total
}

// Calculo a média dividindo a soma total pelo número de notas
console.log(`Média: ${soma / notas.length}`);