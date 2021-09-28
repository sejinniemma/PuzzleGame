'use strict';

const gameTimer = document.querySelector('.game__timer');
const container = document.querySelector('.game__puzzle');
const gameStartBtn = document.querySelector('.game__start--button');
const gameText = document.querySelector('.game__text');

let tileCount = 16;
let tiles = [];

const dragged = {
    el : null,
    class : null,
    index : null
}

let isPlaying = false;
let timeInterval = null;
let time = 0;

gameStartBtn.addEventListener('click',()=>{
    setGame();
})

function checkStatus(){
    const currentList = [...container.children];
    const unMatchedList = currentList.filter((child,index) =>  Number(child.getAttribute("data-index")) !== index);
    if(unMatchedList.length === 0){
        gameText.style.display = "block";
        isPlaying = false;
        clearInterval(timeInterval);
    }
}

// setGame
function setGame(){
    isPlaying = true;
    time = 0;
    container.innerHTML="";
    clearInterval(timeInterval);
    gameText.style.display = "none";

    tiles = creatImageTiles();
    tiles.forEach(tile => container.appendChild(tile));
    setTimeout(()=>{
        container.innerHTML="";
        shuffle(tiles).forEach(tile => container.appendChild(tile));

        timeInterval = setInterval(()=>{
            gameTimer.innerText = time;
            time++;
        },1000)
    },5000)
}

 // make puzzle in Javascript
function creatImageTiles(){
    const tempArray = [];
         
    Array(tileCount).fill().forEach((_,index) => {
        const li = document.createElement('li');
         li.setAttribute('data-index', index);
         li.classList.add(`list${index}`);
         li.setAttribute('draggable','true');
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
    }
    return array;
}



// drag event

container.addEventListener('dragstart',(e) => {
    if(!isPlaying) return;
    
    dragged.el = e.target;
    dragged.class = e.target.className;
    dragged.index = [...e.target.parentNode.childNodes].indexOf(e.target);

})

container.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

container.addEventListener('drop',(e) => {
    if(!isPlaying) return;
    
    const obj = e.target;
    const droppedIndex = [...obj.parentNode.childNodes].indexOf(obj);

    if(obj.className !== dragged.class){
        let originPlace;
        let isLast = false;
    
        if(dragged.el.nextSibling){
          originPlace = dragged.el.nextSibling;
        } else {
            originPlace = dragged.el.previousSibling;
            isLast = true;
        }

        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el);
        isLast ? originPlace.after(obj) : originPlace.before(obj);
    }
    checkStatus();
})

// Music

const bgSound = new Audio('music/cookie.mp3');
bgSound.play();