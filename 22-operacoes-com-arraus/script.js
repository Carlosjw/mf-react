// Map => Percorrer todo um array
let lista = ['Solange', 'Saymon', 'Carlos', 'Livia']

lista.map((item, index) => {
    let li = document.createElement('li')
    li.innerHTML = `Passando: ${index}: ${item}`
   document.body.appendChild(li)    
})

// Reduce: busca reduzir um array

let numeros = [5, 2, 4];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    document.write(`${acumulador}Total até o momento.`)
    document.write(`${numero}Total até o momento. - valor atual.`)
    document.write(`${indice} índice atual.`)
    document.write(`${original} Array original.`)
})