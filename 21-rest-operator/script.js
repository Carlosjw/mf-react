let newDiv = document.createElement('div');

// REST OPERATOR: Usado em funções
function convidados(...nomes){
    // nomes = um array de dados
    let newUl = document.createElement('ul');
    
    nomes.forEach((nome, index) => {
        let newLi = document.createElement('li');
        newLi.innerHTML = `${index+1}: ${nome}`;
        newUl.appendChild(newLi);
    })

    newDiv.append(newUl);
    document.body.append(newDiv)

}

convidados('Solange', 'Saymon', 'Carlos', 'Livia', 'Asafe');

let newDivAgain = document.createElement('div');

// gerdor de números
function randomNumbers(...numbers){
    // acessando número aleatório com base nos números fornecidos no parâmetro da função.
    const numberGenerated = Math.floor(Math.random() * numbers.length);
    // Math.floor() => garante que o número randônico gerado será um inteiro.
    newDivAgain.innerHTML = `Número gerado: ${numbers[numberGenerated]}`;

    document.body.appendChild(newDivAgain)
}

// let numbersRamdon = [];

// for(let number = 0; number < 100; number++){
//     numbersRamdon.push(number);
// }

randomNumbers(1, 4, 5, 6, 2, 9, 10)