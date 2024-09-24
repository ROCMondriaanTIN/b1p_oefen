console.log('main loaded');

const testDiv = document.querySelector('.test');
const submitButton = document.querySelector('.submit-button');

let temperature = -5;
const setTemperature = 23;

const animal = 'Kat';

console.log(testDiv);
console.log(submitButton);

if(temperature === 21){
    testDiv.innerHTML = 'Lekkere temperatuur';
} else if(temperature === 5){
    testDiv.innerHTML = 'Is wel koud';
} else if(temperature === -5){
    testDiv.innerHTML = 'Brrrrr';
}
else{
    testDiv.innerHTML = 'Ik weet niet of ik mijn jas aanmoet';
}



submitButton.addEventListener('click', function(){
    testDiv.innerHTML = '<b>Hij is wel geklikt</b>';
});