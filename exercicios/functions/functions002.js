//function expression//function anonymous

//parâmetros da função//paramenters
const sum = function(number1, number2){
let total = number1 + number2
return total //nunca deicar de definir uma variável
}

let number1 = 20
let number2 = 30

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`); 


/*
//Simplificando funções!!!

||Funções é um liquidificador||
-----------------------------------------------
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2

} ||É como se fosse uma caixa mágica que retorna algum valor(depende da configuração da função).
------------------------------------------------
const copo = fazerSuco('banana', 'abacaxi');
------------------------------------------------
console.log(copo);
//Irá retornar "bananaabacaxi" no console
*/
