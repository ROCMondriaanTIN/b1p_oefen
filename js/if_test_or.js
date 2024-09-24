console.log('if or loaded');

const discountDiv = document.querySelector('.discount');

console.log(discountDiv);

const age = 19;
const isMember = false;

if (age >= 18 || isMember === true) {
    discountDiv.textContent = '1. Je krijgt korting';
} else if(age < 18 || isMember === true){
    discountDiv.textContent = '2. Je krijgt korting';
} else {
    discountDiv.textContent = 'Je krijgt geen korting';
}
