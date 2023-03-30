// O que é uma função ?
//     Conjunto de sequência de passos que utilizamos / implementamos
//     para resolver determinada situação

// Quando devemos criar uma função ?
//     Quando notamos que um bloco de código específico, está se repetindo muitas vezes
//     logo, é o momento de criar uma função
//     Resumindo... A idéia da função é aplicar o conceito de reutilização de código

/* função sem parâmetros - não tem retorno dinâmico, sempre será o mesmo retorno
, ou seja, retorno estático */
function cumprimentarSemParametro() {
    return 'Olá';
}
/*
    nao retorna nada no console do terminal
    pois estamos implementando return, e para isso devemos atribuir
    o retorno da função a uma variável e dar console.log() na variável,
    ou, até mesmo, aplicar console.log(), envolvendo a função
*/
cumprimentarSemParametro() 

/* atribuir a uma variável e dar console.log() na variável */
let retorno = cumprimentarSemParametro()
// console.log(retorno)

/* aplicando console.log() acoplando a função */
// console.log(cumprimentarSemParametro());




/* função com parâmetro - tem retorno dinâmico, baseado nos parâmetros de entrada */
function cumprimentarComParametro(nome) {
    if (!nome) {
        return 'informe o parâmetro nome';
    }
    let cumprimentoEstatico = cumprimentarSemParametro()
    return `Olá ${nome} - ${cumprimentoEstatico}`;
}

let retorno2 = cumprimentarComParametro('Victor')
console.log(retorno2)

// let retorno3 = cumprimentarComParametro('Rhannah')
// console.log(retorno3)







/* função que possui parâmetro obrigatório e opcional */
function cumprimentarComParametroOpcional(nome, sobrenome = '') {
    if (nome === undefined) {
        return 'informe o parâmetro nome';
    }

    if (sobrenome !== undefined) {
        return `Olá ${nome} ${sobrenome}`;
    }

    return `Olá ${nome}`;
}

// console.log(cumprimentarComParametroOpcional());
// console.log(cumprimentarComParametroOpcional('Victor', 'Torres'));
// console.log(cumprimentarComParametroOpcional('Victor'));










/* objeto com propriedades e funções dentro dele */
function mostrarStatus() {
    // console.log('Mostrar Status fora do objeto carro');
}

let ligado = true;

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function() {
        if (this.ligado) {
            // console.log(`Este carro já está ligado.`);
        } else {
            this.ligado = true;
            this.mostrarStatus();
        }
    },
    desligar: function() {
        if (this.ligado){
            this.ligado = false;
            this.velocidade = 0;
            this.mostrarStatus();
        } else {
            // console.log(`Este carro já está desligado.`);
        }
    },
    acelerar: function() {
        if(!this.ligado){
            // console.log(`Não é possível acelerar um carro desligado.`);
        } else {            
            this.velocidade += 10;
            this.mostrarStatus();
        }
    },
    desacelerar: function() {
        if(!this.ligado){
            // console.log(`Não é possível desacelerar um carro desligado.`);
        } else {            
            this.velocidade -= 10;
            this.mostrarStatus();
        }
    },
    mostrarStatus(){
        const statusDoCarro = this.ligado ? 'ligado' : 'desligado';
        // console.log(`Carro ${statusDoCarro}. Velocidade: ${this.velocidade}.`)
    }
}

// mostrarStatus();
// carro.mostrarStatus();

const fabricarPessoa = (nome, sobrenome) => {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    const nomeCompleto = () => {
        let { nome, sobrenome } = pessoa;
        return `${nome} ${sobrenome}`;
    }

    pessoa.nomeCompleto = nomeCompleto;

    return pessoa;
}

const pessoaA = fabricarPessoa('Victor', 'Torres');
// console.log(pessoaA);
// console.log(pessoaA.nome);
// console.log(pessoaA.sobrenome);
// console.log(pessoaA.nomeCompleto());

/* arrow function com único parâmetro, lembre-se, que não precisamos
encapsular o parâmetro quando é único dentro de chaves (), e outro ponto,
não precisamos dar return em casos mais simples como o caso abaixo,
pois, ele fica subentendido como implícito */
// const ola = nome => nome ? `${nome}` : 'informe o parâmetro nome';
// console.log(ola());