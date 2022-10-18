//FIND = usado para encontrar algo

let arrayTeste = [5, 9, 'Garrafa de café', 16, 'Rafa'];
let arraybusca = arrayTeste.find((item) => {
    if(item === 9) {
        return console.log('Item encontrado')
    }
})
console.log(arraybusca)


//FILTER = usado para filtrar coisas

let arraySemFiltro = ['Ana', 'Rafael', 'Maiquele', 'Pedro'];

let arrayFiltro = arraySemFiltro.filter((item) => {
    return item.length<9
})

console.log(arrayFiltro)