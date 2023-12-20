// Switch

function calcular(num1, operator, num2) {
    let result

    switch (operator) {
        case '+':
        result = num1 + num2
            break
        
        case '-':
        result = num1 - num2
            break

        case '*':
        result = num1 * num2
            break

        case '/':
        result = num1 / num2
            break

        default:
            console.log('Não implementado')
            break

    }
    return result
}

console.log (calcular(4, '*', 16))






/*
Maneira mais simplificada de uma switch
______________________________________________

switch (expression) {
    case 'a':
        //código para expressão a    
        console.log('a')
        break
    case 'b':
        //código da expressão b
        console.log('b')
        break
    default:
        console.log('default')
        break
}
*/