
const inputTarefa = document.querySelector(`.input-tarefa`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefas = document.querySelector(`.tarefas`);

function criaLi() {
    const li = document.createElement(`li`);
    return li;
}

inputTarefa.addEventListener(`keypress`, (e) => {
    if (e.keyCode === 13) {
        // console.log(`Enter apertado!`);
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = ``;
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ` `;
    const botaoApagar = document.createElement(`button`);
    botaoApagar.innerText = `Apagar`;
    // botaoApagar.classList.add(`apagar`);
    botaoApagar.setAttribute(`class`, `apagar`);
    botaoApagar.setAttribute(`title`, `Apagar esta tarefa`);
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener(`click`, () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener(`click`, (e) => {
    const el = e.target;

    if (el.classList.contains(`apagar`)) {
        // console.log (`apagar clicado`);
        // console.log (el.parentElement);

        el.parentElement.remove();
        salvarTarefas();
    }
    // console.log(el);
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll(`li`);
    // console.log(liTarefas)

    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        // console.log(tarefa.innerText);
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace(`Apagar`, ``).trim(); // substitui a palavra apagar para `nada`// o `.trimm()` remove os espaços que sobraram no final.
        // console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // converte para uma String
    localStorage.setItem(`tarefas`, tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem(`tarefas`);
    const listaDeTarefas = JSON.parse(tarefas); //coverte de volta de String para um Array
    // console.log(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

function checkedFalse() {
    document.addEventListener(`click`, (e) => {
        const el = e.target;

        if (el.classList.contains(`mark-unchecked`)) {
            console.log(`Nice, you clicked on the invisible checkbox!`);
            function turnCheckedFalse() {
                const checkbox = document.querySelector(`#close-menu`);
                checkbox.checked = false;
            }
            turnCheckedFalse();
        }
    });
}
checkedFalse();