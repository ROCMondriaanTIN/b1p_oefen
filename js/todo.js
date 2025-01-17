console.log('todo loaded');

//ophalen van HTML elementen
const saveButton = document.querySelector('.save');
const passwordButton = document.querySelector('.password');
const saveLocalButton = document.querySelector('.save-local');
const todoInput = document.querySelector('.todo');
const timeInput = document.querySelector('.time');
const todoList = document.querySelector('.todo-list');
const backgroundButton = document.querySelector('.background');
const todoContainer = document.querySelector('.todo-container');

//eerste stap is het ophalen van de string uit local storage aan hand van de key
const todoArrayString = localStorage.getItem('todos');
console.log(todoArrayString);
//tweede stap is het omzetten van de JSON string terug naar objecten
const todoObjects = JSON.parse(todoArrayString);
console.log(todoObjects);
//derde stap is het vullen van de array met de objecten vanuit local storage
const todoArray = todoObjects;
//vierde stap is het tonen van de todos
showTodos();

passwordButton.addEventListener('click', function(){
    //checkPassword();
    checkPasswordWithoutLoop();
});

backgroundButton.addEventListener('click', function(){
    //als de achtergrond groen is dan gooien we groen eraf en zetten we roze erop
    if(todoContainer.classList.contains('background-green')){
        todoContainer.classList.add('background-pink');
        todoContainer.classList.remove('background-green');
    //als de achtergrond roze is dan gooien we roze eraf en zetten we groen erop
    } else if(todoContainer.classList.contains('background-pink')){
        todoContainer.classList.add('background-green');
        todoContainer.classList.remove('background-pink');
    //in alle andere gevallen zetten we groen erop (dit is alleen de eerste keer)
    } else{
        todoContainer.classList.add('background-green');
    }
    
});

saveLocalButton.addEventListener('click', function(){
    const todoArrayString = JSON.stringify(todoArray);
    console.log(todoArrayString);
    localStorage.setItem('todos', todoArrayString);
});

//event listener toevoegen aan opslaan knop
saveButton.addEventListener('click', function(){
    //haal de invoerwaarde op van de todoInput
    const todoInputValue = getInputValue(todoInput);
    //haal de invoerwaarde op van de timeInput
    const timeInputValue = getInputValue(timeInput);
    //is er een todo ingevuld? Dan moet er meer dan 0 letters zijn ingevuld
    if(todoInputValue.length === 0){
        alert('Voer een todo in');
        return;
    }
    //is er een tijd ingevuld? Dan moet er meer dan 0 letters zijn ingevuld
    if(timeInputValue.length === 0){
        alert('Voer een tijd in');
        return;
    }
    //maak een todo object aan met de todoInputValue en timeInputValue
    const todo = makeTodo(todoInputValue, timeInputValue);

    todoArray.push(todo);
    //deze eerste gebruik je als je het prettiger vindt variabelen aan elkaar te plakken met + en '
    //todoList.innerHTML += '<li>' + todo.name + '(' + todo.time + ')' + '</li>';
    //deze werkt met backtick, is wat korter en leesbaarder
    //we roepen de functie aan om todos weer te geven op te pagina, er is er minimaal 1 en hij wordt telkens groter
    showTodos();
    //todoList.innerHTML += `<li>${todo.name}(${todo.time})</li>`;
});

//functie om invoer waarde van een invoerveld op te halen
function getInputValue(inputField){
    const inputValue = inputField.value;
    return inputValue;
}

//functie om een todo aan te maken met de gegeven naam en tijd
function makeTodo(name, time){
    const todo = {
        name: name,
        time: time
    }
    //geef uiteindelijk het object terug
    return todo;
}

function showTodos(){
    let htmlCode = '';
    for (let i = 0; i < todoArray.length; i++) {
        const todo = todoArray[i];
        htmlCode += `<li>${todo.name}(${todo.time})</li>`;
    }
    //hier gebruiken we = om de innerHTML te overschrijven, += hebben we al in de for loop gebruikt
    todoList.innerHTML = htmlCode;
}

//deze werkt met een while loop, hij loopt net zo lang tot je het wachtwoord goed hebt
function checkPassword(){
    let password = prompt('Voer je wachtwoord in');

    while(password !== 'geheim'){
        password = prompt('Voer je wachtwoord in');
    }
    alert('Je hebt het goede wachtwoord ingevoerd');

}

//deze werkt met recursie, de functie roept zichzelf net zolang aan totdat je het wachtwoord goed hebt
function checkPasswordWithoutLoop(){
    let password = prompt('Voer je wachtwoord in');

    if(password === 'geheim'){
        alert('Je hebt het goede wachtwoord ingevoerd');
    } else{
        checkPasswordWithoutLoop();
    }

}
