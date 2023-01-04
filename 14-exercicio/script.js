let calcButton = document.getElementById('btn')
let listValues = document.createElement('ul');    

calcButton.onclick = function (e){
    e.preventDefault()

    let listTarget = document.createElement('li');

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura**2);

    if(imc < 17){
        // let listTarget = document.createElement('li');
        listTarget.innerHTML = `<span>Peso: ${peso}kg</span><span>Altura: ${altura}m</span><span>IMC: ${imc.toFixed(2)}</span><span style="font-size:24px; color: red;">Muito abaixo do Peso.</span>`;
        console.log(`IMC: ${imc.toFixed(2)}.\nMuito abaixo do Peso.`);
    }else if(imc >= 17 && imc <= 18.49){
        // let listTarget = document.createElement('li');
        listTarget.innerHTML = `<span>Peso: ${peso}kg</span><span>Altura: ${altura}m</span><span>IMC: ${imc.toFixed(2)}</span><span style="font-size:24px; color: orange;">Abaixo do Peso.</span>`;
        console.log(`IMC: ${imc.toFixed(2)}.\nAbaixo do Peso.`);
    }else if(imc >= 18 && imc <= 24.99){
        // let listTarget = document.createElement('li');
        listTarget.innerHTML = `<span>Peso: ${peso}kg</span><span>Altura: ${altura}m</span><span>IMC: ${imc.toFixed(2)}</span><span style="font-size:24px; color: blue;">Peso normal.</span>`;
        console.log(`IMC: ${imc.toFixed(2)}. \nPeso normal.`);
    }else if(imc >= 25 ?? imc >= 29,99){
        // let listTarget = document.createElement('li');
        listTarget.innerHTML = `<span>Peso: ${peso}kg</span><span>Altura: ${altura}m</span><span>IMC: ${imc.toFixed(2)}</span><span style="font-size:24px; color: red; ">Acima do peso.</span>`;
        console.log(`IMC: ${imc.toFixed(2)}.\nAcima do peso.`);
    }else if(imc === "NaN"){
        
        listTarget.innerHTML = `<span style="font-size:24px; color: red; ">Precisa fornecer os dados.</span>`;
    }

    listValues.appendChild(listTarget);
    document.body.append(listValues);

    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value= '';

}
