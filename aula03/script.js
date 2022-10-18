let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

const renderList = () => {
    listElement.innerHTML = '';
    tarefas.map((todo) => {

        let liElement = document.createElement('li');
        let textElement = document.createTextNode(todo);

        let deleteElement = document.createElement('a');
        deleteElement.setAttribute('href', '#');
        let deleteElementText = document.createTextNode('Excluir');
        let posicao = tarefas.indexOf(todo);
        deleteElement.setAttribute('onclick', `deletarTarefa(${posicao})`);

        
        
        deleteElement.appendChild(deleteElementText);
        liElement.appendChild(textElement);
        liElement.appendChild(deleteElement);
        listElement.appendChild(liElement);
    })
}

renderList();

const adicionarTarefas = () => {
    if(inputElement.value==='') {
        alert('Digite uma tarefa');
        return false;
    } else {
        let novaTarefa = inputElement.value;
        inputElement.value = '';
        tarefas.push(novaTarefa);
        renderList();
        salvarTarefa();
    }
}

const deletarTarefa = (posicao) => {
    tarefas.splice(posicao, 1);
    renderList();
    salvarTarefa();
}

const salvarTarefa = () => {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}