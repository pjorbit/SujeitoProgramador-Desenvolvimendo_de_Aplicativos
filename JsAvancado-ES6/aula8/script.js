// URL https://sujeitoprogramador.com/rn-api/?api=posts

let listElements = document.querySelector('#app');

let posts = [];

const nutriApp = () => {
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;
        
        posts.map((item) => {
            let liElement = document.createElement('li');
            let titleElement = document.createElement('h1');
            let imgElement = document.createElement('img');
            let descriptionElement = document.createElement('p');
            let titleText = document.createTextNode(item.titulo)
            let descriptionText = document.createTextNode(item.subtitulo);

            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            listElements.appendChild(liElement);
        })
    })
    .catch(() => {
        console.log('EROOOOOOOOOO');
    })
}

nutriApp();