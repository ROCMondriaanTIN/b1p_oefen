console.log('checkers.js');

const board = document.querySelector('.board');
let color = 'white';

let boardArray = [
    [0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

for (let i = 1; i <= 64; i++) {
    
    board.innerHTML += '<div class="block ' + color + '">' + i + '</div>';
    if(i % 8 !== 0){
        switchColor();
    }
}

const blocks = document.querySelectorAll('.block');

let row = 0;
let column = 0;
for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if(boardArray[row][column] === -1){
        block.innerHTML = '<div class="piece black border-white shadow-white"></div>';
    }
    if(boardArray[row][column] === 1){
        block.innerHTML = '<div class="piece white border-black shadow-black"></div>';
    }
    column++;
    if(column === 8){
        column = 0;
        row++;
    }
}

function switchColor(){
    if(color === 'black'){
        color = 'white';
    } else{
        color = 'black';
    }
}
