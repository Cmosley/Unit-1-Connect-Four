/*----- constants -----*/ 

PLAYER_TURN = {
    'null': '',
    '1' : 'red-piece',
    '-1' : 'yellow-piece'
}


/*----- app's state (variables) -----*/ 
let grid, winner, turn

/*----- cached element references -----*/ 

// const whichCol = document.querySelectorAll('#column-drop > div')
const gridBoxes = document.querySelectorAll('.grid > div')
const resetBtn = document.getElementById('reset')
const howToPlay = document.getElementById('how-to')
const winMsg = document.getElementById('winMsg')

/*----- event listeners -----*/ 

// whichCol.forEach(circle => {
//     circle.addEventListener('click', pieceDrop)
// });

gridBoxes.forEach(circle => {
    circle.addEventListener('click', setPiece)
});



/*----- functions -----*/

function setPiece () {

}

// function pieceDrop (e) {
//     // gets index of which column to drop piece 
//     let colNum = (parseInt(e.target.id))
//     let columnSelect = grid[colNum]
//     // iterate column to check for first null value to drop piece
//     // we get the index of where the piece is being dropped
//     index = grid[colNum].length
//     // while(index-- && grid[colNum][index])
//     while(index-- && !grid[colNum][index]) 
//         if (grid[colNum][index] === null)
//     // grid[colNum][index] = turn
//     grid[colNum].splice((index - 1),1,turn)
//     console.log(turn);
//     console.log(grid[colNum]);
   
//     render();
// }
//     // we use that index to search the nested array for where the piece 
//     // should go. We then need to "drop" piece to the farthest empty cell
    
//     //  change players
//     // turn *= -1,


function render () {
    // update game cell with current players game piece color
    
}

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
    turn = 1; 
    grid = [
        [null,null,null,null,"1","2"],
        [null,null,null,null,null,"1"],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
    ];
    winner = false;
    render();
}

init()
