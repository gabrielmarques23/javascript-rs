//throw

function sayMyName (name = '') {
    if (name === ''){
        throw new Error('Nome é obrigatório!')
    }
    
    console.log ('Depois do erro')
    
}

//try...catch
try{
    sayMyName('Gabriel')
} catch(e) {
    console.log(e)
}

console.log('Após ao try/catch')