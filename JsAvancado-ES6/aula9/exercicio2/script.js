
//Crie uma lista de apenas numeros 1,3,5,7,0,9​
let lista = [1, 3, 5, 7, 0, 9]
//Ordene essa lista do menor para o maior.
console.log(lista.sort())
//Retire o primeiro numero desta lista.
lista.shift();
console.log(lista)
//Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
console.log(lista.reverse())

//Crie uma string que contenha o dia de hoje, exemplo: let hoje = '20/07/2019';
let hoje = new Date();
console.log(hoje)
//Separe essa data em variaveis
//  dia onde contenha apenas o dia
let hojeDia = hoje.getDate();
console.log(hojeDia)
//  mes onde contenha apenas o mes
let hojeMes = hoje.getMonth();
console.log(hojeMes)
//  ano onde contenha apenas o ano.
let hojeAno = hoje.getFullYear();
console.log(hojeAno)

let today = `${hojeDia}/${hojeMes}/${hojeAno}`;
console.log(today)