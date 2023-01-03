let name = 'Carlos' // prompt: exibe um pop-up solicitando uma ação do usuário
let sobrenome = 'Lima'
// alert(`Olá, ${name} ${sobrenome}!`);

document.body.style = "width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;"

document.write(`<h1>Bem vindo ao projeto, ${name} ${sobrenome}</h1>`)

// colocando imagem
document.write(`<img src="https://sujeitoprogramador.com/steve.png" />`)

let img = document.querySelector('img')

img.style = "width: 250px; border-radius: 100%; box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.5);"

