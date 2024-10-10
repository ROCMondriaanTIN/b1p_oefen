console.log('for loaded');

const pizzas = ['Pizza Ananas', 'Pizza Tonijn', 'Pizza Kaas', 'Pizza Champignon', 'Pizza Kip'];


/*console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);*/

for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    console.log(pizza);
}

let htmlCode = '';

for (let i = 1; i < 2000; i++) {
    //console.log('Hallo ik ben Eslam en ik ben 18 jaar.');
    htmlCode += i + '. Hallo ik ben Eslam en ik ben 18 jaar<br>';
    
}
document.body.innerHTML = htmlCode;