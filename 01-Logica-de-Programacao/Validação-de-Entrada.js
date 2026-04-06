let codigoCorreto = "P-500";
let codigo;

// Faço isso pelo menos uma vez
do {
  codigo = "P-500"; // Aqui simulo a entrada do código pelo usuário
} while (codigo !== codigoCorreto); // Se o código estiver errado, repete o processo

console.log("Código correto! Produto validado.");