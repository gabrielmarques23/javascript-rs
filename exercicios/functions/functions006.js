// Callback function

function sayMyName(name) {
    console.log('Antes de executar a callback')

    name() 

    console.log('Depois e executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)



//Basicamente, callback significar que eu vou chamar uma função normal, e vou chamar outra função de volta (callback).