/* Function() constructor

    > expressão new
    > criar um novo objeto 
    > this keyword
*/

function Person(name) {
    this.name = name
}

const gaab = new Person('Gabriel')
const joao = new Person('João')
console.log(gaab)



//O poder de uma função construtora é basicamente criar objetos.

