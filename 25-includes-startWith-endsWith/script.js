// includes
let names = ['Solange', 'Saymon', 'Livia', 'Carlos']

console.log(names.includes("Carlos"))

if(names.includes('Pedro')){
    console.log('Está na lista.')
}else{
    console.log('Não está na lista')
}

// startsWith: verifica se a palavra começa com o parâmetro fornecido
let name = 'Carlos';
console.log(name.startsWith('D'))

// endsWith: verifica se a palavra  TERMINA com o parâmetro fornecido.
console.log(name.endsWith('n'))