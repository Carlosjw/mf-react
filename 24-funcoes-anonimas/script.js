let somar = (a, b) => {
    let total = a + b
   console.log(total)
}

somar(5, 6)

let numbers = [3, 6, 9, 12, 15];

let newUl = document.createElement('ul');

let soma = numbers.map(number => {
   let newLi = document.createElement('li');
   newLi.innerHTML = number;
   newUl.appendChild(newLi)
})

document.body.appendChild(newUl)
console.log(soma)