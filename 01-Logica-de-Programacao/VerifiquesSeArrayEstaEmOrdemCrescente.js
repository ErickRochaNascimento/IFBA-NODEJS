let valores = [27, 31, 65, 50, 62, 75, 81, 90, 102, 115];
let estaEmOrdemCrescente = true;

for (let i = 0; i < valores.length - 1; i++) {
    if (valores[i] > valores[i + 1]) {
        estaEmOrdemCrescente = false;
        break;
    }       
}
console.log(valores);
console.log(estaEmOrdemCrescente);