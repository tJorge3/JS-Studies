// Não podemos criar constantes com palavras reservadas
// Crie constantes com nomes entendíveis / intuitivos
// Nome da constante não pode começar com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize VAR, utlize const
// Ao criar uma constante, é obrigatório que contenha um valor

const nome = "Thiago"
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const conta = primeiroNumero * segundoNumero
const resultadoDuplicado = conta * 2

console.log("O primeiro número é:", primeiroNumero, "multiplicando com o segundo número", segundoNumero, "\nresultamos no valor:", conta, "e o dobro desse resultado é:", resultadoDuplicado)

console.log(typeof(primeiroNumero))