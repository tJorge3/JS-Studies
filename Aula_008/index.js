/* Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio Miranda, nasceu em 1992 */

const nome = "Luiz Otávio"
const sobrenome = "Miranda"
const idade = 30
const peso = 84
const altura = 1.80

let imc; //peso / (altura * altura)
let anoNascimento;

anoNascimento = 2022 - idade
imc = peso / (altura * altura)

console.log(`O IMC de ${nome}, é igual a: ${imc}`)
console.log("O ano de nascimento de", nome, "é", anoNascimento)