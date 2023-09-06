let number1 = Number(prompt(`Digite o Primeiro número:`))
let number2 = Number(prompt(`Digite o Segundo numero:`))

const sum = number1 + number2
const sub = number1 - number2
const multi = number1 * number2
const div = number1 / number2
const restDiv = number1 % number2

alert(`A soma é: ${sum}`)
alert(`A subtração é: ${sub}`)
alert(`A multiplicação é: ${multi}`)
alert(`A divisão é: ${div}`)
alert(`O resto da divisao é: ${restDiv}`)


let checkPair = sum /2
if(sum%2 == 0){
    alert(`A soma dos dois numeros é par: ${sum}`)
} 
else {
    alert(`A soma dos dois numeros é impar: ${sum}`)
}

if(number1 === number2){
    alert(`Os numeros inseridos são iguais.`)
}
else{
    alert(`Os numeros inseridos são diferentes.`)
}