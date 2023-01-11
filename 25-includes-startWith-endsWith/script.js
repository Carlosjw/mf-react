let inputValue = document.querySelector('#texto');
// let targetLi = document.createElement('li');
let btn = document.querySelector("#btn");
let targetLi = document.createElement('li');


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

console.log(name.includes('rl'));

btn.onclick = () => {

        names.forEach((name, index) => {
            let targetLi = document.createElement('li');

            if(name.includes(inputValue.value)){   
                targetLi.style = 'list-style: none;'
                targetLi.innerHTML = `${index + 1}: ${name}`;
                document.body.appendChild(targetLi);
                console.log(name)
            }
        })

}
