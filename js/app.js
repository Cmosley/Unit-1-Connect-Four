/*----- constants -----*/ 

PLAYER_TURN = {
    'null': '',
    'one' : 'Player One',
    'two' : 'Player Two'
}



const winningCombos = [
    // either hard code each winning combo (inefficient) 
    // figure out how to write function to check neighbors, 
    // stop at 4 in a row (more efficient)
]

/*----- app's state (variables) -----*/ 
let board, winner, turn

/*----- cached element references -----*/ 

// Might need to add row ontop of grid and use that for pieceDrop
// functionality instead of each element in grid being selectable
const board = document.getElementById('board-grid > div')


const resetBtn = document.getElementById('reset')
const howToPlay = document.getElementById('how-to')
const winMsg = document.getElementById('winMsg')

/*----- event listeners -----*/ 

board.forEach(circle => {
    circle.addEventListener('click', pieceDrop)
});

/*----- functions -----*/

function pieceDrop () {
    // get which column
    // drop to bottom of column array
    // 
}

// grid functionality 

//  1. Each row is an array, with the bottom of the row being the last element in array. Each array would need to inialized as empty, then use index of 
// array to match corresponding div on front end 