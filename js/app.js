/*----- constants -----*/ 

PLAYER_TURN = {
    'null': '',
    '1' : 'red-piece',
    '-1' : 'yellow-piece'
}

const boardCols = [
    [0,7,14,21,28,35],
    [1,8,15,22,29,36],
    [2,9,16,23,30,37],
    [3,10,17,24,31,38],
    [4,11,18,25,32,39],
    [5,12,19,26,33,40],
    [6,13,20,27,34,41]
]

const dropSound = new Audio("../audio/piece-drop.mp3"); 
const resetSound = new Audio("../audio/reset-drop.mp3"); 
const button = document.getElementById('play');
button.addEventListener('click', playSound);
     
function playSound() { 
    // resetSound.src = "../audio/reset-drop.mp3" 
    resetSound.play() 
} 

/*----- app's state (variables) -----*/ 
let grid, winner, turn, count

/*----- cached element references -----*/ 

const whichCol = document.querySelectorAll('#column-drop > div')
const gridBoxes = document.querySelectorAll('.grid > div')
const resetBtn = document.getElementById('reset')
const howToPlay = document.getElementById('how-to')
const winMsg = document.getElementById('winMsg')

/*----- event listeners -----*/ 

// whichCol.forEach(circle => {
//     circle.addEventListener('click', pieceDrop)
// });

gridBoxes.forEach(circle => {
    circle.addEventListener('click', setPiece);
    // console.log(gridBoxes)
});

resetBtn.addEventListener('click', init)


/*----- functions -----*/

function gameDivID () {
    gridBoxes.forEach(cells => {
        cells.setAttribute('id', count)
        count++;
        // console.log(cells)
    })
}


// add new values here 
function setPiece (e) {
    // gets index of cell to 'drop' piece into
    let divID = (parseInt(e.target.id))
    if (grid[divID] === null){
        const clickedDiv = document.getElementById(divID)
        clickedDiv.classList.add(`${PLAYER_TURN[turn]}`)
            if(checkWin(PLAYER_TURN[turn])){
                alert(`${PLAYER_TURN[turn] + ' has won!'}`);
                winner = PLAYER_TURN[turn]
            }
            turn *= -1
    render();   
    dropSound.play() 
    }
}

function checkValid(n) {
    let divID = (parseInt(n)) 
    console.log()
}

function render () {
    gridBoxes.forEach((cell, idx) => {

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
            // console.log(`columns: ${combo}`)
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
            // console.log(`rows + ${combo}`)
            if(combo >= 4) {
                return true;
            }
        }
        combo = 0;
        console.log(combo)
    }

    // check diag
    // scans the grid in a 4x4 square
    let topLeft = 0;
    let topRight = topLeft + 3;
    console.log(topLeft)
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
    // gridBoxes.classList.remove('red-piece');
    // gridBoxes.classList.remove('yellow-piece');
    winner = false;
    render();
    gameDivID();
    
}

init();
