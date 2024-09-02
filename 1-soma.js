// 1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA); 
// Ao final do processamento, qual será o valor da variável SOMA? 

const indice = 13
let soma = 0
let k = 0

function imprimir(indice, soma, iterador) {
    
    while( iterador < indice) {

        iterador++
        soma += iterador
    
    }

    return soma
    
}

const resultadoSoma = imprimir(indice, soma, k)

console.log(`O valor da SOMA é ${resultadoSoma}`)