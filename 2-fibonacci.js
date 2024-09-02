// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma
//  dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
//  linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e 
//  retorne uma mensagem avisando se o número informado pertence ou não a sequência. 


const primeiroNumeroSequencia = 0
const segundoNUmeroSequencia = 1
const numeroInformado = 34

const fibonacci = [primeiroNumeroSequencia, segundoNUmeroSequencia]

for(let i = 0; i < numeroInformado; i++) {

    const somaDoNumeroESeuAnterior = fibonacci[i] + fibonacci[i + 1]
    fibonacci.push(somaDoNumeroESeuAnterior)

    if(somaDoNumeroESeuAnterior > numeroInformado) break
}

console.log(`Lista fibonacci ${fibonacci}`)

if(fibonacci.includes(numeroInformado)) {
    console.log(`Número ${numeroInformado} pertence a sequência fibonnaci`)
} else {
    console.log(`Número ${numeroInformado} não pertence a sequência fibonnaci`)

}


