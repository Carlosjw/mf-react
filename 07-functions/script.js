let area = document.getElementById('area');

function entrar(){
    let name = prompt('Digite seu nome, por favor.')

    if(name ==="" || name === null){
        alert('Por favor, digite seu nome.')
        area.style = "color: red;"
        area.innerHTML = `Por favor, digite seu nome.`
    } else {
        area.innerHTML = `Bem vindo, ${name}. `  

        let exitButton = document.createElement('button')
        exitButton.innerText = 'Sair da conta';

        // adicionando uma função ao botão cridao
        exitButton.onclick = sair;

        area.appendChild(exitButton);
    }  
}

function sair(){
    alert('Até mais!')
    area.innerHTML = 'Você saiu.'
}