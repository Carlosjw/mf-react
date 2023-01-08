// Map => Percorrer todo um array
let lista = ['Solange', 'Saymon', 'Carlos', 'Livia']

lista.map((item, index) => {
    let li = document.createElement('li')
    li.innerHTML = `Passando: ${index}: ${item}`
   document.body.appendChild(li)    
})

// Reduce: busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - Total até o momento.`)
    console.log(`${numero} - Total até o momento. - valor atual.`)
    console.log(`${indice} - índice atual.`)
    console.log(`${original} - Array original.`)
    console.log('=======================')

    return acumulador += numero; // pegando o número e somando com o resultado
})

console.log(`TOTAL DO REDUCE: ${total}`)