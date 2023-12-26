/*
Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

E para cada operação, mostrar um alerta com o resultado.
*/

window.alert('Iremos fazer algumas contas')

let numb1 = Number(window.prompt('Primeiramente, digite um número...'));
let numb2 = Number(window.prompt('Agora, digite outro número'))

const sum = numb1 + numb2;
const sub = numb1 - numb2;
const mul = numb1 * numb2;
const div = numb1 / numb2;
const per = numb1 % numb2;

window.alert(`A soma dos dois números: ${sum}`)
window.alert(`A subtração dos dois números: ${sub}`)
window.alert(`A multiplicação dos dois números: ${mul}`)
window.alert(`A divisão dos dois números: ${div}`)
window.alert(`O resto da divisão dos dois números: ${per}`)

