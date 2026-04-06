let numeros = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30];
let numero = parseFloat(prompt('Digite o numero qual quer saber:'));
let condicao = false;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === numero){
        condicao = true
    }
}

let palavra = condicao === false ? 'não' : '';
console.log(`O numero ${numero} ${palavra} está presente no array`);

