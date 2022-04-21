let inputAdulto = document.getElementById('adultos')
let inputCrianca = document.getElementById('criancas')
let duracao = document.getElementById('duracao').value
let inputVegano = document.getElementById('veganos')

let resultado = document.getElementById('resultado')


function calcular(){
    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let veganos = inputVegano.value
    let horas = duracao

    let qtdTotalCarne = carnePP(horas) * adultos + (carnePP(horas)/2 * criancas)
    let qtdTotalCerveja = cervejaPP(horas) * adultos
    let qtdTotalBebida = bebidasBB(horas) * adultos + (bebidasBB(horas)/2 * criancas)
    let qtdTotalvegan = paoAlho(horas) * veganos
    if(adultos > 0){
        resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne 🥩</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latinhas de Cerveja 🍺</p>`
        resultado.style.padding = '20px'
    }

    if(criancas > 0){
         resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 1000)} garrafinhas de 1 l 🥤</p>`
         resultado.style.padding = '20px'
    }

    if(veganos > 0){
         resultado.innerHTML += `<p>${Math.ceil(qtdTotalvegan)} unidades de pão de alho 🍞🧄</p>`
         document.body.style.background = 'linear-gradient(yellow, green)'
         //PROBLEMAS
    }
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

function paoAlho(horas){
    if (horas >= 6){
        return 18;
    } else {
        return 10;
    }
}