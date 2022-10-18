// desconstruindo objetos

const pessoa = {
    nome: 'Rafael Soares',
    idade: 22,
    cargo: 'Desenvolvedor FrontEnd',
    empresa: 'Amazon'
}

let nome = 'Pedro';

let { nome:nomePessoa, idade, cargo, empresa } = pessoa;

/*console.log(nomePessoa);
console.log(empresa);

console.log(nome);*/

//------------------------
//Desconstruindo arrays


let meusAmigos = ['Pedro', 'Duda', 'Vito', 'Weslley'];

console.log(`Método normal: ${meusAmigos[0]}`);

let { 0:primeiroAmigo } = meusAmigos;

let [melhorAmigo, outroMelhorAmigo] = meusAmigos;

console.log(`Método desconstruido entre {}: ${primeiroAmigo}`);

console.log(`Método desconstruido entre []: ${melhorAmigo}`);
console.log(`Método desconstruido entre []: ${outroMelhorAmigo }`);