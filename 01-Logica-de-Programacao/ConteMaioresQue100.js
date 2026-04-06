let numeros = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30]
let quantidadeMaior100 = 0;

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > 100){
        quantidadeMaior100 += 1;
    }
}

console.log(`Numeros maior que 100: ${quantidadeMaior100}`);