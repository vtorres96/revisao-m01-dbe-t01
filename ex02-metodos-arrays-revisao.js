const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaDeAtendimento(lista, operacao, nomeDoPaciente) {
    if (operacao === 'agendar') {
        lista.push(nomeDoPaciente);
    }

    if (operacao === 'atender') {
        lista.shift();
    }

    console.log(lista.join(','));
}

filaDeAtendimento(pacientes, 'atender');
filaDeAtendimento(pacientes, 'agendar', 'Victor');