let valores = [1, 2, 3, 2, 4, 3, 5, 1, 6];
let valoresUnicos = [];

for (let i = 0; i < valores.length; i++) {
    if (!valoresUnicos.includes(valores[i])) {
        valoresUnicos.push(valores[i]);
    }
}
console.log("Array original:", valores);
console.log(valoresUnicos);