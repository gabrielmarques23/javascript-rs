
/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente x possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC desse paciente 

Crie uma função para fazer o cálculo de IMC
*/

/*
Abaixo do peso: IMC menor que 18,5
Peso normal: IMC entre 18,5 e 24,9
Sobrepeso: IMC entre 25 e 29,9
Obeso: IMC igual ou maior que 30
*/

/*
 Dados de entrada do usuário:
    -Lista de pacientes
    -IMC de cada paciente
    
 Variáveis:
    -Pacientes 
    -Peso de cada paciente
*/

const patients = [
    {
        name: 'Gabriel',
        age: 21,
        weight: 67,
        height: 176,
    },
    {
        name: 'Julio',
        age: 10,
        weight: 40,
        height: 155
    },
    {
        name: 'Gabrielly',
        age: 19,
        weight: 49,
        height: 159,
    }
]


function printPatientIMC(patient) {
    alert (`
    Paciente ${patient.name} possui o IMC de: ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
    `)
}

for (let patient of patients) {
    printPatientIMC(patient)
}



