let valores = [113, 27, 85, 142, 6, 54, 91, 19, 128, 30];
let valoresEntre10e50 = 0;

for(let i = 0; i < valores.length; i++){
    if(valores[i] > 10 && valores[i] < 50){
        valoresEntre10e50 += 1;
    }
}

console.log(`São ${valoresEntre10e50} elementos entre 10 e 50`);