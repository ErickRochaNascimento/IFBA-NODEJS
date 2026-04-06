let valores = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30];
let resultado = 0;

console.log(valores);

for(let i = 0; i < valores.length; i++){
    resultado = valores[i] * 2;
    valores[i] = resultado;
}

console.log(valores);