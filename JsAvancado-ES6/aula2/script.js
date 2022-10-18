//Spread operator
//unir dois ou mais array sem colocar o array em si no array de destino
//coloca apenas os valores do array

let primeiroArray = [1 , 2, 3];
let segundoArray = [primeiroArray, 4, 5, 12, 15];
console.log(segundoArray)
//método errado ^

let arrayTeste = [2, 6, 8];
let arrayCerto = [...arrayTeste, 10, 15, 18];
console.log(arrayCerto);
//método correto utilizando o spread(...)



//O MESMO SERVE PARA OBJETOS
//*CUIDADO* Keys iguais vão se sobrepor

const primeiraPessoa = {
    nome: 'Rafael',
    profissao: 'Web Developer',
    idade: 22
}
const infoComplementares = {
    ...primeiraPessoa,
    status: 'ATIVO',
    salario: 2000
}
console.log(infoComplementares);


//utilizando uma função que pede um parametro
const novoUsuario = (info) => {
    let dados = {
        ...info,
        status: 'ATIVO',
        salario: 5000
    }

    console.log(dados);
}
//passando os dados ao chamar a função
novoUsuario({
    nome: 'Joao',
    profissao: 'Game developer',
    idade: 24
})