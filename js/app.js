
/*----- constants -----*/ 

PLAYER_TURN = {
    'null': '',
    '1' : 'yellow-piece',
    '-1' : 'red-piece'
}

const dropSound = new Audio("../audio/piece-drop.mp3"); 
const resetSound = new Audio("../audio/reset-drop.mp3"); 
const winSound = new Audio("../audio/you-win.mp3"); 


/*----- app's state (variables) -----*/ 
let grid, winner, turn, count

/*----- cached element references -----*/ 

const whichCol = document.querySelectorAll('#column-drop > div')
const gridBoxes = document.querySelectorAll('.grid > div')
const resetBtn = document.getElementById('reset')
const howToPlay = document.getElementById('how-to')
const winMsg = document.getElementById('winMsg')
const messageDiv = document.getElementById('message')
const playerOne = document.getElementById('one')
const playerTwo = document.getElementById('two')
const gridBox = document.querySelector('section')
const linkFav = document.querySelector("link[rel~='icon']")


/*----- event listeners -----*/ 

gridBoxes.forEach(circle => {
    circle.addEventListener('click', setPiece);
    // console.log(gridBoxes)
});

resetBtn.addEventListener('click', function() {
    init();
    resetSound.play();
})


/*----- functions -----*/

function gameDivID () {
    gridBoxes.forEach(cells => {
        cells.setAttribute('id', count)
        cells.setAttribute('data-piece', 0)
        count++;
        // console.log(cells)
    })
}


// add new values here 
function setPiece (e) {
    // gets index of cell to 'drop' piece into
    if (grid[e.target.id] === null){ 
        if(checkValid(e.target.id) === true){
        const clickedDiv = document.getElementById(e.target.id)
        // clickedDiv.classList.add(`${PLAYER_TURN[turn]}`)
        clickedDiv.setAttribute('data-piece', turn)
        clickedDiv.classList.add(`${PLAYER_TURN[turn]}`)
            if(checkWin(PLAYER_TURN[turn])){
            messageDiv.innerHTML = (`${PLAYER_TURN[turn] + ' has won!'}`);
            winner = PLAYER_TURN[turn]
            winSound.play()
            // console.log(winner)
            }
            turn *= -1
        render();   
        dropSound.play() 
        }
    }
    if (turn === 1) {
    playerOne.classList.add('coin')
    playerOne.innerHTML = "GO"
    playerTwo.classList.remove('coin')
    playerTwo.innerHTML = ""
    gridBox.classList.add('shadow-yellow')
    gridBox.classList.remove('shadow-red')
    linkFav.href = "images/y-favicon-32x32.png"

    } else {
        playerTwo.classList.add('coin')
        playerTwo.innerHTML = "GO"
        playerOne.classList.remove('coin')
        playerOne.innerHTML = ""
        gridBox.classList.remove('shadow-yellow')
        gridBox.classList.add('shadow-red')
        linkFav.href = "images/r-favicon-32x32.png"
    }
}

function checkValid(n) {
    let id = parseInt(n);
    const checkDiv = document.getElementById(id);
    const checkDivBelow = document.getElementById(id + 7);
    if(winner !== 0){
        return false
    }
    console.log(winner)
    if(checkDiv.getAttribute('data-piece') === "0"){ 
        if(id >= 35){
            return true;
        }
        if(checkDivBelow.getAttribute('data-piece') !== "0"){
            return true;
        }
    }
    // console.log(checkValid) 
    return false;
}

function render () {
    gridBoxes.forEach((cell, idx) => {
    if (!winner ) {
        
      } else if (winner === 2) {
        // 4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
        messageDiv.innerText = `Nobody wins!`
      } else {
        // 4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
        messageDiv.innerText = `${PLAYER_TURN[i]} is the winner!`
      }
    })
}

function checkWin (p) {
    // check columns for 4 in a row
    let combo = 0;
    for(let i =0; i < 42; i+=7){
        for(let k=0; k < 7; k++){
            let cell = gridBoxes[`${i+k}`];
            // console.log(cell)
            if(cell.className.includes(`${p}`)){
                combo++
            } else {
                combo = 0;
            }
            if(combo >= 4) {
                return true;
            }
        }
        combo = 0;
    }
    //  check rows for 4 in a row
    combo = 0;
    for(let i =0; i < 7; i++){
        for(let k=0; k < 42; k+=7){
            let cell = gridBoxes[`${i+k}`];
            // console.log(cell.className)
            if(cell.className.includes(`${p}`)){
                combo++
            } else {
                combo = 0;
            }
            if(combo >= 4) {
                return true;
            }
        }
        combo = 0;
    }

    // check diag
    // scans the grid in a 4x4 square
    let topLeft = 0;
    let topRight = topLeft + 3;
    for(let i = 0; i <3; i++){
        for(let k = 0; k < 4; k++){
            if(gridBoxes[`${i+k+topLeft}`].className.includes(p)
            &&
            gridBoxes[`${i+k+topLeft+8}`].className.includes(p)
            &&
            gridBoxes[`${i+k+topLeft+16}`].className.includes(p)
            &&
            gridBoxes[`${i+k+topLeft+24}`].className.includes(p)){
                return true;
            }

            if(gridBoxes[`${i+k+topRight}`].className.includes(p)
            &&
            gridBoxes[`${i+k+topRight+6}`].className.includes(p)
            &&
            gridBoxes[`${i+k+topRight+12}`].className.includes(p)
            &&
            gridBoxes[`${i+k+topRight+18}`].className.includes(p)){
                return true;
            }

            // inner loop to test 4x4 square
            topLeft++;
            topRight = topLeft + 3;
        }
        // outer loop to move the 4x4 square 
        topLeft = i * 7 + 7;
        topRight = topLeft + 3;
    }

    return false;
}        

// init function 

function init () {
    count = 0;
    turn = 1; 
    grid = [
        null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,
    ];
    gridBoxes.forEach(cells => {
        if(cells.setAttribute('class', 'cell'));
    })
    // reset player turn styling 
    playerOne.classList.add('coin')
    playerOne.innerHTML = "GO"
    playerTwo.classList.remove('coin')
    playerTwo.innerHTML = ""
    gridBox.classList.add('shadow-yellow')
    gridBox.classList.remove('shadow-red')
    linkFav.href = "images/y-favicon-32x32.png"
    // 
    messageDiv.innerHTML = ""
    winner = 0;
    render();
    gameDivID();
    
    
}

init();

