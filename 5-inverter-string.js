// 5) Escreva um programa que inverta os caracteres de um string. 

// IMPORTANTE: 
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente
//  definida no código; 
// b) Evite usar funções prontas, como, por exemplo, reverse; 

const palavra = "Target"
const letrasInvertida = []

const palavraToArray = palavra.split("")

for(let i = palavra.length; i >= 0; i--) [
    letrasInvertida.push(palavra[i])
]

const palavraInvertida = letrasInvertida.join("")
console.log(`Palavra ${palavra}`)
console.log(`Palavra Invertida ${palavraInvertida}`)