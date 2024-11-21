console.log('checkers.js');

const board = document.querySelector('.board');
let color = 'white';

/*this boardArray represents where each piece is placed on the board
-1 is a black piece
1 is a white piece
0 is no piece
the boardArray has 8 columns and 8 rows
*/
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

//fetch all the 64 blocks from the screen
const blocks = document.querySelectorAll('.block');

//initialise the row number to 0
let row = 0;
//initialise the column number to 0
let column = 0;
//we loop through each block to place the pieces on the board
for (let i = 0; i < blocks.length; i++) {
    //we get a block from the array
    const block = blocks[i];
    /*in case the number found in the 2 dimensional boardArray is equal to -1
     we want to place a black piece */
    if(boardArray[row][column] === -1){
        block.innerHTML = '<div class="piece black border-white shadow-white"></div>';
    }
     /*in case the number found in the 2 dimensional boardArray is equal to 1
     we want to place a white piece */
    if(boardArray[row][column] === 1){
        block.innerHTML = '<div class="piece white border-black shadow-white"></div>';
    }
    //we up the column by one
    column++;
    //when we reach the 8th column we reset the number back to 0 and move on to the next row
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
