let texto = "Programação Web";
let vogais = "aeiouAEIOU"; // String contendo todas as vogais possíveis para comparação

// Uso o for...of para pegar cada letra do texto diretamente
for (let letra of texto) {
    // Se a lista de vogais incluir a letra atual, é porque é uma vogal
    if (vogais.includes(letra)) {
        console.log(letra); // Então eu imprimo
    }
}