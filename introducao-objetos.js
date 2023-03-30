// Assim como o array que aprendemos nesta semana...
// O objeto é um tipo de variável que podemos utilizar,
// e o intuito é armazenar mais de uma informação em uma variável.
// A diferença que irão notar é apenas que no array não entitulamos
// as nossas posições, elas são números, ou seja:

let frutas = ['banana', 'maçã', 'laranja'];
// De modo que ao percorrer esse array frutas com algum loop
// nos deparamos com:
// Posição: 0 - Índice: 'banana'
// Posição: 1 - Índice: 'maçã'
// Posição: 2 - Índice: 'laranja'

// Como ilustrado abaixo:

// For de I
// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Posição: ${i} - Índice: ${frutas[i]}`)
// }

// For...Of
// for (const fruta of frutas) {
//     console.log(fruta)
// }

// E com objeto conseguimos fazer de uma maneira diferente, de modo que conseguimos
// atribuir um valor para a posição, notem abaixo:

let carro = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: 2020
}

// Quando necessitamos obter alguma propriedade dentro de um objeto,
// podemos implementar a seguinte sintaxe:

// console.log(carro.marca)
// console.log(carro.modelo)
// console.log(carro.ano)

let carros = [
    {
        marca: 'Volkswagen',
        modelo: 'Gol',
        ano: 2020
    },
    {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 2020
    }
]

// console.log(carros[0].modelo);
// console.log(carros[0].marca);
// console.log(carros[0].ano);
// console.log(carros[0]);
// for (let carro of carros) {
//     console.log(`Marca: ${carro.marca}`)
//     console.log(`Modelo: ${carro.modelo}`)
//     console.log(`Ano: ${carro.ano}`)
// }


let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
let resultado = [];
for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] + numeros2[i])
}

// console.log(resultado)