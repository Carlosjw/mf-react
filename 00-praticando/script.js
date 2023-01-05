let newDiv = document.createElement('div');
let newUl = document.createElement('ul');

let myself = {
    myName: 'Carlos Lima',
    myAge: 35,
    myWeight: 74,
    myHeight: 1.80,

}

let myLikes = ['Estudar', 'Programagar', 'Jogar', 'NetFlix', 'Disney+'];

newDiv.innerHTML = `<li>${myself.myName}</li>`

document.body.appendChild(newDiv)

