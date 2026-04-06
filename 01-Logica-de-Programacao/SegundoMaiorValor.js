let valores = [10, 5, 35, 20, 35, 15];
let maior = valores[0];
let segundoMaior = valores[0];   

for (let i = 0; i < valores.length; i++) {
    if (valores[i] > maior) {
        segundoMaior = maior;
        maior = valores[i];
    } else if (valores[i] > segundoMaior && valores[i] !== maior) {
        segundoMaior = valores[i];
    }
}


console.log(`O segundo maior valor é: ${segundoMaior}`);
