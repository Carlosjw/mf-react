let title = document.createElement('h3');
title.innerHTML = 'Manipulando Datas';

document.body.appendChild(title);

let data = new Date();

document.body.append(data);

let listElements = document.createElement('ul');

let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

let newP = document.createElement('p');
newP.innerHTML = weekDays[data.getDay()]

document.body.append(newP);

// pegando hora
let atualHour = data.getHours();

//pegando minutos
let atualMinutes = data.getMinutes();

// pegando segundo
let atualSeconds = data.getSeconds();

let atualDate = [atualHour, atualMinutes, atualSeconds];

atualDate.forEach(data => {
    let listElement = document.createElement('span');
    listElement.innerHTML = `<br/>${data}`;
    listElements.appendChild(listElement);
})

document.body.append(listElements);

let ps = document.querySelectorAll('p');
console.log(ps)






