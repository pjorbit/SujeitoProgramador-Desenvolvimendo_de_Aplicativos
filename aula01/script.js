/*
Abaixo de 17 - Muito abaixo do peso
Entre 17 e 18.49 - Abaixo do peso
Entre 18.5 e 24.99 - Peso normal
Entre 25 e 29.99 - Acima do peso
*/
let peso;
let altura;
let resposta;

function calcular(event) {
    event.preventDefault();

    peso = Number(document.getElementById('peso').value);
    altura = Number(document.getElementById('altura').value);
    resposta = document.getElementById('resposta');
    let imc = Number((peso/(altura*altura)).toFixed(2));

    if (imc<17) {
        resposta.innerHTML = `<h3>Seu IMC está muito abaixo do peso!</h3>`;
    } else if(imc<18.49) {
        resposta.innerHTML = `<h3>Seu IMC está abaixo do peso!</h3>`;
    } else if(imc<24.99) {
        resposta.innerHTML = `<h3>Seu IMC está normal!</h3>`;
    } else {
        resposta.innerHTML = `<h3>Seu IMC está muito acima do peso!</h3>`;
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}