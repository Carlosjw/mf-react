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