let numeros = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30, 98, 67, 9];
let numeroMaior = numeros[0];
let numeroMenor = numeros[0];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < numeroMenor){
        numeroMenor = numeros[i];
    }
    if(numeros[i] > numeroMaior){
        numeroMaior = numeros[i];
    }
}

console.log(`O numero maior é ${numeroMaior}`);
console.log(`O numero menor é ${numeroMenor}`);