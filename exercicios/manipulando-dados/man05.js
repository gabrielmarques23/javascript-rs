// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let text = "O rato roeu a roupa do Rei de Roma"
let myArray = text.split(" ")
let textWithUnderscore = myArray.join("_")

console.log(textWithUnderscore.toLowerCase())