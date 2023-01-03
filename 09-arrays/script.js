let lista = ['Carlos', 'Solange', 'Saymon']

lista.forEach((item, index) => {
    let element = document.createElement('li');
    element.innerHTML = `${index}: ${item}`;

    document.body.appendChild(element)
})

let element = document.createElement('p')
element.innerText = `O tamanho do array é ${lista.length}.`

document.body.appendChild(element);