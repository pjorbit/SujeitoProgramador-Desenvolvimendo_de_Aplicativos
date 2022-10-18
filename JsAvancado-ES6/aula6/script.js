//FUNÇÕES ANONIMAS = 
//usado para passar pequenos comandos sem precisar criar uma função do zero

function exemplo(valor1, valor2) {
    return valor1 + valor2;
}
console.log(`Resultado de uma função normal: ${exemplo(5,5)}`);
//função escrita da forma classica ^

let funcaoSeta = (valor1, valor2) => valor1 + valor2;
console.log(`Resultado de uma função de seta: ${funcaoSeta(5,5)}`);
//função de seta ^

let arrayExemplo = [5, 3, 4];
arrayExemplo.map((item)=>{
    return console.log(`Exemplo de função anonima: ${item}`)
})
//função anonima ^ usada quando não quero me dar ao trabalho de criar uma função exclusiva só
//para aquilo, como nesse exemplo para utilizar o 'map'