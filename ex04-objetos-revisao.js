const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

/* refatorar enunciado */
// a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.
// b. Se a pessoa tiver apenas um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.
// c. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Carlos e tenho 3 pets

/* 1ª forma */
for (let usuario of usuarios) {
    if (usuario.pets.length > 0) {
        if (usuario.pets.length > 1) {
            console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets.`);
        } else {
            console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pet.`);
        }
    } else {
        console.log(`Sou ${usuario.nome} e não tenho pets.`);
    }
}

/* 2ª forma */
for (let usuario of usuarios) {
    if (usuario.pets.length === 0) {
        console.log(`Sou ${usuario.nome} e não tenho pets.`);
    } else {
        if (usuario.pets.length > 1) {
            console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets.`);
        } else {
            console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pet.`);
        }
    }
}

/* 3ª forma */
for (let usuario of usuarios) {
    if (usuario.pets.length > 0) {
        console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} ${usuario.pets.length > 1 ? 'pets' : 'pet'}.`);
    } else {
        console.log(`Sou ${usuario.nome} e não tenho pets.`);
    }
}
