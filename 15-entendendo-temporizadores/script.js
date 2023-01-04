// setInterval: executa infinitamente uma ação, até ser executado um clearInterval. Para isso, é preciso atrelá-lo a uma variável.
function acao(){
    document.write('Executando... <br>')
}

let timer = setInterval(() => {
    let list = document.createElement('li');
    list.innerText = "Olha o loop infinito aqui, gente!"
    document.body.appendChild(list);
}, 1000)

// setTimeout: executa a ação desejada apenas uma vez
let stopTimer = setTimeout(() => {
    clearInterval(timer)
}, 10000)

let myFamily = ['Carlos', 'Solange', 'Saymon', 'Sarah']

setTimeout(()=>{
    let newDiv = document.createElement('div');
    let newUl = document.createElement('ul');
    newDiv.appendChild(newUl);
    for(let name = 0; name < myFamily.length; name++){
        let newLi = document.createElement('li');
        newLi.innerHTML = myFamily[name]
        newUl.appendChild(newLi);
    }    

    document.body.appendChild(newDiv)

}, 1000)
