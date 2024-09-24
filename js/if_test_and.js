console.log('if and loaded');

const discountDiv = document.querySelector('.discount');

console.log(discountDiv);

const age = 17;
const isMember = true;

if (age >= 18 && isMember === true) {
    discountDiv.textContent = 'Je krijgt korting';
} else if(age < 18 && isMember === true){
    discountDiv.textContent = 'Je krijgt geen korting';
} else if(age >= 18 && isMember === false){
    discountDiv.textContent = 'Je krijgt geen korting';
} else {
    discountDiv.textContent = 'Je krijgt geen korting';
}
