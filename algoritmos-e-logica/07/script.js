/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista 
2. Mostrar itens cadastrados
3. Sair do programa
____________________________

O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista 

Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existem itens cadastrados"

Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
/*Dados de entrada do usuário:
1. número desejado
2. item da lista

Variáveis:
1. número da opção desejada
2. lista de itens

*/

let lista = []
let opcoes = Number(window.prompt(`Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista 
2. Mostrar itens cadastrados
3. Sair do programa`));

/*
//Usando o switch para fazer a mesma função do "while"

switch (option) {
        case 1:
            let item = prompt('Digite o nome do item')
            items.push(item)
            break
            case 2:
            if (items.length == 0) {
                window.alert("[ERRO] Não existem itens cadastrados")
            } else {
                window.alert(items)
            }
            break
            case 3:
                window.alert("Tchau")
                break
                default:
                    alert("Opção inválida. Tente novamente")
                    // caminho padrão quando não é um dos casos acima
    }
    
*/


let option;
let items = [];

while (option != 3) {

    option = Number(window.prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista 
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))

    if (option == 1) {
        let item = prompt('Digite o nome do item')
        items.push(item)
    } else if (option == 2) {
        if (items.length == 0) {
            window.alert("[ERRO] Não existem itens cadastrados")
        } else {
            window.alert(items)
        }
    } else {
        window.alert("Tchau")
    }

}
