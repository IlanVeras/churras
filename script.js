let inputAdulto = document.getElementById('adultos')
let inputCrianca = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

let vegano = document.getElementById('vegan')

function calcular(){
    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let horas = inputDuracao.value

    let qtdTotalCarne = carnePP(horas) * adultos + (carnePP(horas)/2 * criancas)
    let qtdTotalCerveja = cervejaPP(horas) * adultos
    let qtdTotalBebida = bebidasBB(horas) * adultos + (bebidasBB(horas)/2 * criancas)
    resultado.style.padding = '20px'
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne 🥩</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latinhas de Cerveja 🍺</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 1000)} garrafinhas de 1 l 🥤</p>`
}

function carnePP(horas){
    if (horas >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(horas){
    if (horas >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasBB(horas){
    if (horas >= 6){
        return 1500;
    } else {
        return 1000;
    }
}
