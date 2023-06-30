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

function calculaIMC() {

    const button = document.querySelector(`.formulario`);
    button.addEventListener(`submit`, recebeEventoForm);

    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(`Evento barrado`);
        printResultado();
    }

    function calculo() {
        const inputPeso = document.querySelector(`#peso`);
        const inputAltura = document.querySelector(`#altura`);

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            calculo(`Peso inválido`);
            return;
        }

        if (!altura) {
            calculo(`Altura inválida`);
            return;
        }

        const calculoResultado = (peso / (altura ** 2));

        return calculoResultado.toFixed(2);
    }

    function printResultado() {
        const resultadoIMC = document.querySelector(`.resultadoIMC`);
        const resultado = calculo();

        if (resultado < 18.5) {
            resultadoIMC.innerHTML = `<p>O seu IMC é ${resultado}, ou seja, está abaixo do peso</p>`;
        }
        else if (resultado >= 18.5 && resultado < 24.9) {
            resultadoIMC.innerHTML = `<p>O seu IMC é ${resultado}, ou seja, está com o peso normal</p>`;
        }
        else if (resultado >= 25 && resultado < 29.9) {
            resultadoIMC.innerHTML = `<p>O seu IMC é ${resultado}, ou seja, está com sobrepeso</p>`;
        }
        else if (resultado >= 30 && resultado < 34.9) {
            resultadoIMC.innerHTML = `<p>O seu IMC é ${resultado}, ou seja, está com obesidade grau 1</p>`;
        }
        else if (resultado >= 35 && resultado < 39.9) {
            resultadoIMC.innerHTML = `<p>O seu IMC é ${resultado}, ou seja, está com obesidade grau 2</p>`;
        }
        else if (resultado > 40 && resultado < 100) {
            resultadoIMC.innerHTML = `<p>O seu IMC é ${resultado}, ou seja, está com obesidade grau 2</p>`;
        }
        else {
            resultadoIMC.innerHTML = `${resultado}`;
        }
    }

}

calculaIMC();