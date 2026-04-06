let numeros = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30];
let quantidadeMultiplosDe3 = 0;
for(let i = 0; i < numeros.length; i++){
    let resto = numeros[i] % 3;
    if(resto === 0){
        quantidadeMultiplosDe3 += 1;
        console.log(`${numeros[i]}`)
    }
}

console.log(`O array possoui ${quantidadeMultiplosDe3} numeros multiplo de 3`)