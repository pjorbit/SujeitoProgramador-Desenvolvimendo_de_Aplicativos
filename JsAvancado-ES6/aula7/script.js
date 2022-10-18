//INCLUDES
//usado para saber se existe um certo valor dentro de algo
//retorna sempre um booleano(true ou false)
//case sensitive
let nomeInclusos = ['Rafael', 'Pedro', 'Duda'];
console.log(nomeInclusos.includes('Rafael'));
nomeInclusos.includes('Pedr') ? console.log('Incluso') : console.log('Não incluso');



//STARTWITH
//usado para descobrir se algo começa de determinada maneira
//retorna um booleano
//case sensitive
let nomeComeco = 'Rafael';
console.log(nomeComeco.startsWith('ra'));
nomeComeco.startsWith('Raf') ? console.log('Começa sim') : console.log('Começa não');



//ENDSWITH
//usado para descobrir se algo termina de uma determinada maneira
//retorna um booleano
//case sensitive
let nomeTermina = 'Rafael';
console.log(nomeTermina.endsWith('ela'));
nomeTermina.endsWith('el') ? console.log(`O nome ${nomeTermina} termina com 'el'`) : console.log(`O nome ${nomeTermina} não termina com 'el'`)

