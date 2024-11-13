console.log('checkers.js');

const board = document.querySelector('.board');
let color = 'white';

for (let i = 1; i <= 64; i++) {
    
    board.innerHTML += '<div class="block ' + color + '">' + i + '</div>';
    if(i % 8 !== 0){
        switchColor();
    }
}

function switchColor(){
    if(color === 'black'){
        color = 'white';
    } else{
        color = 'black';
    }
}
