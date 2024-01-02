/*
Crie uma lista de pacientes 

Cada paciente dentro da lista deverá conter 

    nome
    idade
    peso 
    altura

Escreva uma lista contendo o nome dos pacientes
*/


const patients = [
    {
        name: 'Thomas',
        age: 10,
        weight: 45,
        height: 157,
    },
    {
        name: 'Julio',
        age: 10,
        weight: 43,
        height: 154,
    },
    {
        name: 'Gaby',
        age: 19,
        weight: 48,
        height: 159,
    },
]

const patientNames = []
for(let patient of patients) {
    patientNames.push(patient.name)
}

const patientAge = []
for(let patient of patients)



alert(`
Nome do 1º paciente: ${patients[0].name}
Idade: ${patients[0].age}
Peso: ${patients[0].weight}
Altura: ${patients[0].height}

Nome do 2º paciente: ${patients[1].name}
Idade: ${patients[1].age}
Peso: ${patients[1].weight}
Altura: ${patients[1].height}

Nome do 3º paciente: ${patients[2].name}
Idade: ${patients[2].age}
Peso: ${patients[2].weight}
Altura: ${patients[2].height}
`)

/*
Sintaxe do "For" mais antiga

for (let index = 0; index < patients.length; index++) {
    patientNames [index] = patients[index].name

}*/




