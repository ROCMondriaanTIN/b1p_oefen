console.log('seabattle loaded');

const boardPlayer = document.querySelector('.board-player');
const boardComputer = document.querySelector('.board-computer');

let mode = 'place';

const playerShips = [];
const computerShips = [0, 1, 2, 3, 4];

for (let i = 0; i < 100; i++) {
    boardPlayer.innerHTML += '<div class="block"></div>';
}

for (let i = 0; i < 100; i++) {
    boardComputer.innerHTML += '<div class="block"></div>';
}

const playerBlocks = document.querySelectorAll('.board-player > .block');

console.log(playerBlocks);

for (let i = 0; i < playerBlocks.length; i++) {
    const block = playerBlocks[i];
    block.addEventListener('click', function(){
        console.log('Block ' + i + ' geklikt');
        if(mode === 'place'){
            block.classList.toggle('ship');
            playerShips.push(i);
        } else if(mode === 'bomb'){
            block.classList.toggle('red');
        }

        console.log(playerShips);
        
    });
}