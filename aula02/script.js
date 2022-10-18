
// setInterval

const temporizador = () => {
    document.write(`Executando timeout..<br>`);
}

/*setInterval(temporizador, 5000);


setInterval(() => {
    document.write(`Função anonima..<br>`)
}, 3000)*/

setTimeout(temporizador, 5000);

setTimeout(() => {
    document.write(`Executando timeout em função anonima<br>`);
}, 6000)