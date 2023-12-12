//var do exercicio 4
let student = {
    name: 'Carlos',
    age: 12,
    weight: 69.5,
    isSubscribed: true
}

/*
1. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []
//console.log(students);

/*
2. Reatribua valor para a variável do exercício 5, colocando dentro dela o objeto student do exercício. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [
    student
]


/*
3.Coloque no console o valor da posição zero do Array acima
*/

// R://console.log(students[0]);

/*
4. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
    name: "Leandro",
    age: 30,
    weight: 50.5,
    isSubscribed: true,
}

students[1] = john
console.log(students);

/* 
5. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

R: Undefined, pois a variável "a" foi definida depois de pedirmos o comando 'console.log'. O JavaScript leu o código com elevação (hoisting).

E a variável for do tipo let, irá dar um erro de referência.
*/

console.log(a)
var a = 1
