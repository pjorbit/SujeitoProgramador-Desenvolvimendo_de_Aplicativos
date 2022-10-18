//MAP = Percorre por todo um array

let arrayTeste = ['rafa', 'pedro', 'duda', 'weslley'];

arrayTeste.map((item, indice) => {
    console.log(`O nome agora é: ${item}`)
})

//REDUCE = busca resuzir o array a alguma coisa

let arrayReduzir = [5, 4, 9, 1, 8, 3];

let arrayReduzido = arrayReduzir.reduce((acumulador, numero, indice, original ) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array de origem`);
    console.log('=============')

    return acumulador += numero;
})