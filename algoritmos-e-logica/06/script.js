/*
    ** Jogo da adivinhação **
    Apresente a mensagem ao usuário:
    "Adivinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente"

    Caso o usuário acerte o número, apresentar a mensagem: 
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas

*/

let result = Number(prompt("Adivinhe o número que estou pensando? Está entre 0 e 10"))

const randomNumber = Math.round(Math.random()*10)

let xAtempts = 1

while(result != randomNumber){
    result = prompt("Erro, tente novamente")
    xAtempts++
}

if(randomNumber == 1){
alert(`Parabéns! Você adivinhou o número em ${xAtempts} tentativa`)
} else{
alert(`Parabéns! Você adivinhou o número em ${xAtempts} tentativas`)
}


/*
let usuaryNumber = Number(prompt('Adivinhe o número que estou pensando? Está entre 0 e 10'))

const randomNumber = Math.round(Math.random() * 10)

let xAtempts = 1;

while (usuaryNumber != randomNumber) {

    usuaryNumber = prompt("Erro, tente novamente")
    xAtempts++
}

if (xAtempts == 1){
    alert(`Parabéns! Você adivinhou o número em ${xAtempts} tentativa`)
}else{
    alert(`Parabéns! Você adivinhou o número em ${xAtempts} tentativas`)
}
*/