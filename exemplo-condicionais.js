// Estamos trabalhando na validação de uma fila, onde, só deixaremos
// pessoas maiores de idade (com idade maior que 18 anos) comprarem ingresso
// para nosso evento, em caso contrário, iremos barrar a compra

// Para resolver essa situação podemos implementar uma condição, que, 
// caso o usuário da plataforma tenha 18 anos ou mais, iremos exibir
// a seguinte mensagem "Você será redirecionado para a compra dos ingressos",
// caso contrário, retornaremos a seguinte mensagem
// "Você não pode adquirir ingressos para este evento devido ser somente para maiores de idade"

// let idade = 17;

// if (idade >= 18) {
//     console.log('Você será redirecionado para a compra dos ingressos')
// } else {
//     console.log('Você não pode adquirir ingressos para este evento devido ser somente para maiores de idade')
// }

// um if pode existir sem else, já o else só existi quando tem um if antes

// Vamos adicionar complexidade a situação acima, e, imaginar uma situação
// onde, daremos um desconto para mulheres, portanto, se o gênero do usuário
// for feminino e for maior de idade iremos retornar uma mensagem,
// "você possui 10% de desconto na compra dos ingressos", mas, em caso de ser masculino, retornamos,
// a mensagem anterior para maiores de 18 anos.

// let idade = 18;
// let genero = "M";

// if (idade >= 18) {
//     if (genero == "F") {
//         console.log('Você possui 10% de desconto na compra dos ingressos')   
//     } else {
//         console.log('Você será redirecionado para a compra dos ingressos')
//     }
// } else {
//     console.log('Você não pode adquirir ingressos para este evento devido ser somente para maiores de idade')
// }

// mensagem -> 0 a 2 - está nas fraldas
// mensagem - 3 a 5 - não estuda ainda
// mensagem - 6 a 8 - está estudando

let idade = 60;

if (idade <= 2) {
    console.log('está nas fraldas')
} else if (idade > 2 && idade <= 5) {
    console.log('não estuda ainda')
} else if (idade > 5 && idade <= 8){
   console.log('está estudando')
}