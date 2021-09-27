'use strict';

const gameTimer = document.querySelector('.game__timer');
const gamePuzzle = document.querySelector('.game__puzzle');
const gameStartBtn = document.querySelector('.game__start--button');
const gameText = document.querySelector('.game__text');

let tileCount = 16;
let tiles = [];

setGame();

function setGame(){
    tiles = creatImageTiles();
    tiles.forEach(tile => gamePuzzle.appendChild(tile));
    setTimeout(()=>{
        gamePuzzle.innerHTML="";
        shuffle(tiles).forEach(tile => gamePuzzle.appendChild(tile));
    },2000)
}

 // make puzzle in Javascript
function creatImageTiles(){
    const tempArray = [];
         
    Array(tileCount).fill().forEach((_,index) => {
        const li = document.createElement('li');
         li.setAttribute('data-index', index);
         li.classList.add(`list${index}`);
        
         tempArray.push(li);
    });
    return tempArray;
}

// make random puzzle
function shuffle(array) {
    let index = array.length - 1;
    while(index > 0){
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index],array[randomIndex]] = [array[randomIndex], array[index]];
        --index;
        console.log(randomIndex);
    }
    return array;
}

