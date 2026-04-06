let valores = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30];
let valoresImpares = [];

for (let i = 0; i < valores.length; i++) {
    let resto = valores[i] % 2;
    if (resto != 0) {
        valoresImpares.push(valores[i])
    }
}

console.log(valores);
console.log(valoresImpares);