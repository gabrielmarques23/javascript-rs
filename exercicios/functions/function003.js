//function scope

let subject = 'create video'

function createThink(subject) {
subject = 'study'
return subject
}

console.log(createThink(subject));
console.log(subject);

//O "subject que está dentro do escopo da function, é um 'outro tipo' de variável, pois mudamos o valor dele dentro do escopo."

//Toda function sem nenhum retorno, retornará undefined