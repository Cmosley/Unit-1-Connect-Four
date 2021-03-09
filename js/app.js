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



/*----- functions -----*/

function gameDivID () {
    gridBoxes.forEach(cells => {
        cells.setAttribute('id', count)
        count++;
        console.log(cells)
    })
}


// add new values here 
function setPiece (e) {
    // gets index of cell to 'drop' piece into
    let divID = (parseInt(e.target.id))
    if (grid[divID] === null){
        const clickedDiv = document.getElementById(divID)
        clickedDiv.classList.add(`${PLAYER_TURN[turn]}`)
    
    
    console.log(divID)

    turn *= -1
    winner = checkWin()
    render();    
    }
}
    
    
    // iterate column to check for first null value to drop piece
    // we get the index of where the piece is being dropped

    // we use that index to search the nested array for where the piece 
    // should go. We then need to "drop" piece to the farthest empty cell
    
 
  // update new values here, not add new value
function render () {
    // update game cell with current players game piece color
    gridBoxes.forEach((cell, idx) => {
        console.log()
    })
}

// PLAYER_TURN[grid[idx]]
function checkWin () {
    // check columns for 4 in a row
    
    //  check rows for 4 in a row

    // check diagnoally for 4 in a row
}

// grid functionality 

//  1. Each row is an array, with the bottom of the row being the last element in array. Each array would need to inialized as empty, then use index of 
// array to match corresponding div on front end 

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
    winner = false;
    render();
    gameDivID();
    
}

init();
 