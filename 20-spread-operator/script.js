let target = document.createElement('span');
let newTarget = document.createElement('span');

// spred com array
let primeiros = [1, 2, 3, 4];
let segundos = [...primeiros, 5, 6, 7]

target.innerHTML = `${segundos.join(" | ")}<br><br>`;
document.body.append(target)

// spred com abjeto
let pessoa = {
    nome: 'Matheus',
    idade: 45,
    cargo: "RH"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Campo Grande / MS"
}

newTarget.innerHTML = JSON.stringify(novaPessoa);
document.body.appendChild(newTarget)

let newP = document.createElement('p');

function newUser(info){
    let userDatas = {
        ...info,
        status: 'ATIVO',
        inicio: '01-04-2022',
        code: '123456'
    }
    newP.innerHTML = JSON.stringify(userDatas);
    document.body.appendChild(newP)
}

newUser({name: 'Carlos', sobreName: 'Lima', job: 'TI'});