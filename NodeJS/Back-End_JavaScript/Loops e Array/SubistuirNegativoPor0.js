let valores = [-113, 27, -85, 142, 6, 54, 91, -19, 128, -30];
console.log(valores);

for(let i = 0; i < valores.length; i++){
    if(valores[i] < 0){
        valores[i] = 0;
    }
}

console.log(valores);