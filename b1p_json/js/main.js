console.log('Main loaded');

const person = {
    name: 'Mark',
    age: 38,
    hobbies: ['Programming', 'Attending concerts', 'Sleep']
}

console.log(person);

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

const personObject = JSON.parse(jsonPerson);

console.log(personObject);

console.log('Age is ' + personObject.age);

localStorage.setItem('person', jsonPerson);

const localStoragePerson = localStorage.getItem('person');
console.log(localStoragePerson);

const personObject2 = JSON.parse(localStoragePerson);

console.log(personObject2);