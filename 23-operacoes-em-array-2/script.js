// FIND: retorna apenas o primeiro item que satisfaz a condição

let listagem = [5, 3, 'Solange', 2, 'Saymon']

let newDiv = document.createElement('div');

let search = listagem.find((item) => {

    if(item === 'Pedro'){
        return console.log(`Item ${item} encontrado com sucesso`)
    }

})

console.log(search);

// FILTER: retorna um array com todos o itens que satisfazem a condição
let words = ['melancia', 'pera', 'melancia', 'abobora', 'jaca'];

let result = listagem.filter(item => {
    return typeof item === 'number';
});

console.log(result)

let sum = result.reduce((acumulator, number) => {
    console.log('========================')
    return acumulator **= number;
})

console.log(sum);

