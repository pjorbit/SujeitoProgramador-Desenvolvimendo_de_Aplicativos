//REST Operator
//usado quando eu não sei o numero de argumentos que vão ser me dados ao invocar a função


const convidados = (nomes) => {
    console.log('SEJAM BEM VINDOS!');
    console.log(nomes);
}
convidados('Rafael', 'Pedro', 'Duda');
//método errado ^
//dessa maneira apenas o primeiro argumento será passado



const pessoasParaFesta = (...convidado) => {
    console.log('Sejam todos bem vindos!!');
    console.log(convidado);
}
pessoasParaFesta('Rafael', 'Pedro', 'Duda');
//método correto ^
//dessa forma o numero de argumentos passados é irrelevante, será tudo transformado em um array



//função para gerar um numero aleatorio
//com base nos argumentos passados
const numerosPassados = (...numeros) => {
    console.log(numeros);
    let numeroAleatorio = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroAleatorio]);
}
numerosPassados(2, 6, 4, 9, 8, 6, 12, 34, 61, 72, 24, 14)