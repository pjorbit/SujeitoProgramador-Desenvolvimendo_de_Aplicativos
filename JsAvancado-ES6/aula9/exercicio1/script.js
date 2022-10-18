/*
1 - A lista produtos deve conter os seguintes produtos: 
Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.*/
let listaProdutos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
console.log(listaProdutos);

//2 - Mostre no console quantos produtos tem nessa lista.
console.log(listaProdutos.length);

//3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
listaProdutos.splice(2,1);
console.log(listaProdutos)

/*4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador 
e caso exista esse produto na sua lista exiba um console falando que este produto existe
e mostre tambem o nome deste produto. Caso não exista mostre uma mensagem avisando 
que o produto não foi encontrado. */
let procurarProduto = (item) => {
    listaProdutos.includes(item) ? 
        console.log('O computador existe na lista') : 
        console.log('O computador não existe na lista')
}
console.log(procurarProduto('Computador'));

//5 - Remova o segundo item da sua lista
let removerItem = (indice, quantidadeItems) => {
    listaProdutos.splice(indice, quantidadeItems);
    return listaProdutos;
}
console.log(removerItem(1,1));