let numeros = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30];
let numerostotal = 0;

for(let i = 0; i < numeros.length; i++){
    numerostotal += numeros[i];
}

let media = numerostotal/numeros.length;

let comparacao = media > 50 ? 'maior' : 'menor';

alert(`A média ${media} é ${comparacao} que 50`);