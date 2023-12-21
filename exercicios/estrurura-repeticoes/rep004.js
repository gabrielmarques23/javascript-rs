// for..... in

let person = {
    name: 'Gabriel',
    age: 21,
    weight: 65.7
}

for (let property in person) {
    console.log(person[property])  
}

//Basicamente, cria um loop usando propriadades de objetos. 