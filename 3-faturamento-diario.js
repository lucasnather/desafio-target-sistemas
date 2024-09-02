// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na
// linguagem que desejar, que calcule e retorne: 
// • O menor valor de faturamento ocorrido em um dia do mês; 
// • O maior valor de faturamento ocorrido em um dia do mês; 
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

const faturamentoDiario = []
const faturamentoAcimaDaMedia = []
let somaFaturamento = 0

function geraValoresDoMes() {
    
    for(let i = 0; i < 30; i++) {
        const gerandoValorAleatorioMensal = Math.ceil(Math.random() * 2000) 
        faturamentoDiario.push(gerandoValorAleatorioMensal)
    }
}

geraValoresDoMes()

const menorValor = Math.min(...faturamentoDiario)
const maiorValor = Math.max(...faturamentoDiario)

for(let i = 0; i < faturamentoDiario.length; i++) {
    somaFaturamento += faturamentoDiario[i]
}

const mediaFaturamento = somaFaturamento / faturamentoDiario.length

for(let j = 0; j < faturamentoDiario.length; j ++) {

    if(faturamentoDiario[j] > mediaFaturamento) {
        faturamentoAcimaDaMedia.push(faturamentoDiario[j])
    }
}


console.log("Lista de Faturamento", faturamentoDiario)
console.log("Menor Faturamento", menorValor)
console.log("Maior Faturamento", maiorValor)
console.log("Media faturamento", mediaFaturamento)
console.log("Lista de Faturamento Acima Da média", faturamentoAcimaDaMedia)
