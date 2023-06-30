function relogio() {
    const relogio = document.querySelector(`.relogio`);

    document.addEventListener(`click`, (e) => { // adicionar o escutador direto no documento
        //console.log(e.target); // mostra onde está sendo clicado

        const el = e.target;

        if (el.classList.contains(`zerar`)) {
            console.log(`Você clicou em zerar!`);

            clearInterval(timer),
                relogio.innerHTML = `00:00:00`,
                segundos = 0,
                relogio.classList.remove(`pausado`);
        }

        if (el.classList.contains(`pausar`)) {
            console.log(`Você clicou em pausar!`);

            clearInterval(timer),
                relogio.classList.add(`pausado`);
        }

        if (el.classList.contains(`iniciar`)) {
            console.log(`Você clicou em iniciar!`);

            clearInterval(timer),
                iniciaRelogio(),
                relogio.classList.remove(`pausado`);
        }
    })

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000); // multiplicar por mil para obter os milésimos de segundos
        return data.toLocaleTimeString(`pt-BR`, {
            hour12: false,
            timeZone: `GMT` // também poderia ser `UTC`
        });
    }

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
}

relogio();

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