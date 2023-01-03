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

// calculando média
function mediaAluno(nota01, nota02, nomeAluno){
    let media = Number(nota01 + nota02) / 2
    if(media >= 7){
        area.style = "color: blue;"
        area.innerHTML = `O aluno ${nomeAluno} foi aprovado com a média: ${media}.`
    }else{
        area.style = "color: red;"
        area.innerHTML = `O aluno ${nomeAluno} foi reprovado com a média: ${media}.`
    }
}
let nomeAluno = prompt('Digite o nome do aluno:')
let nota01 = Number(prompt('Digite a primeira nota do aluno:'));
let nota02 = Number(prompt('Digite a segunda nota do aluno:'));

mediaAluno(nota01, nota02, nomeAluno);