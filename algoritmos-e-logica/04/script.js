/*
Solicitar o nome do aluno e as 3 notas de bimestre, calcular a média daquele aluno.

-A média positiva deverá ser maior que 6

Se o aluno passou no bimestre, dar os  parabéns.

Se o aluno não passou no bimestre,  motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota 
 */

let nome = String(window.prompt('Olá, sejá bem vindo! Qual o seu nome?'));


let n1 = Number.parseInt(window.prompt('Qual a sua nota do 1º bimestre?'))
let n2 = Number.parseInt(window.prompt('Qual a sua nota do 2º bimestre?'))
let n3 = Number.parseInt(window.prompt('Qual a sua nota do 3º bimestre?'))


let media = Number(n1 + n2 + n3) / 3
media = media.toFixed(1)

if (nome.length === 0 || ! isNaN(nome)) {
    alert('[ERRO] Você não preencheu os dados corretamente, tente novamente.')
} else if (media > 10) {
    alert('Desculpe. Dectamos um erro, insira os dados novamente!')
} else if (media == 8 || media > 8) {
    window.alert(`Parabéns ${nome}, sua média foi: ${media}, e você está aprovadíssimo!`)
} else if (media >= 6) {
    window.alert(`Isso aí ${nome}, sua média é: ${media}, e você está aprovado!`)
} else {
    window.alert(`Poxa ${nome}, sua média foi: ${media}, e você está reprovado. Tente ir melhor na prova de recuperação`)
}

