console.log('main2 loaded');



const personArray = [{
    name: 'Sejla',
    age: 19,
    hobbies: ['Programming', 'Reading', 'Drawing']
},
{
    name: 'Claudia',
    age: 17,
    hobbies: ['Gaming', 'Reading', 'Sleep']
},
{
    name: 'Eslam',
    age: 19,
    hobbies: ['Watch movies', 'Drawing', 'Sleep']
}
];


console.log(personArray);

const personsJson = JSON.stringify(personArray);

console.log(personsJson);

localStorage.setItem('persons', personsJson);

const personsJsonLocalStorage = localStorage.getItem('persons');

console.log(personsJsonLocalStorage);

const personArrayLocalStorage = JSON.parse(personsJsonLocalStorage);

console.log(personArrayLocalStorage);

displayNames(personArrayLocalStorage);
displayAges(personArrayLocalStorage);


function displayNames(persons){
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        console.log(person.name);
    }
}

function displayAges(persons){
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        console.log(person.age);
    }
}

//const personArray = [person, person1, person2];
/*const personArray = [];
personArray.push(person);
personArray.push(person1);
personArray.push(person2);*/