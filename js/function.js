console.log('function loaded');

const temperature = 12;

const firstName = prompt('Wat is jouw naam?');
const age = prompt('Wat is jouw leeftijd?');

showTemperature();

showNameAndAge(firstName, age);


function showTemperature(){
    console.log("Het is vandaag " + temperature + " graden.");
}

function showNameAndAge(firstName, age){
    console.log('Welkom op mijn website, ' + firstName + '. Jouw leeftijd is ' + age + ' jaar.');
}
