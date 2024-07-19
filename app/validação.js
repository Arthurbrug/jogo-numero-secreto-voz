function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute

    if (Number.isNaN (numero)) {
        elementoChute.innerHTML +=  '<div>Valor Invalido </div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor invalido: fale um valor entre ${menorValor} e ${maiorValor}`
        return
    }

    if (numero ===  numeroSecreto) {
        document.body.innerHTML = `
        <h2> VOCÊ ACERTOU! <h2>
        <h3> o numero secreto era ${numeroSecreto} </h3>

        <button id="btn-reiniciar" class="btn-jogar"> Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto e menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto e maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}


function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'btn-reiniciar') {
        window. location.reload()
    }
})