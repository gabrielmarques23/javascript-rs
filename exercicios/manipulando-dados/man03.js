// Manipulação Strings e Números 

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

let number = Number.parseFloat(1239.355);

console.log(number.toFixed(2).replace(".", ","));
