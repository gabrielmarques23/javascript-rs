// If...Else

let temperature = 35

/*
Se quisermos, também podemos formar variáveis com os mesmos dados dos "if" e "else". Exemplo:

    let mediumTemperature = temperature < 37.5 && temperature >= 37
    let hightTemperature = temperature >= 37.5 
    ...
*/

if (temperature >= 37.5) {
    console.log('Está com febre')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderável')
} else {
    console.log('Está saudável')
}