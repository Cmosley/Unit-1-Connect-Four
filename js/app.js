/*----- constants -----*/ 

PLAYER_TURN = {
    'null': '',
    '1' : 'red',
    '-1' : 'yellow'
}


// array for each row game of cells, 
// will link the hover feature using bracket notation
const boardCols = [
    [0,7,14,21,28,35],
    [1,8,15,22,29,36],
    [2,9,16,23,30,37],
    [3,10,17,24,31,38],
    [4,11,18,25,32,39],
    [5,12,19,26,33,40],
    [6,13,20,27,34,41]
]

 

const winningCombos = [
    // either hard code each winning combo (inefficient) 
    // figure out how to write function to check neighbors, 
    // stop at 4 in a row (more efficient)
]

/*----- app's state (variables) -----*/ 
let grid, winner, turn

/*----- cached element references -----*/ 

// Might need to add row ontop of grid and use that for pieceDrop
// functionality instead of each element in grid being selectable
const whichCol = document.querySelectorAll('#column-drop > div')
const grabcol = document.querySelectorAll('.grid > div')
const resetBtn = document.getElementById('reset')
const howToPlay = document.getElementById('how-to')
const winMsg = document.getElementById('winMsg')

/*----- event listeners -----*/ 

whichCol.forEach(circle => {
    circle.addEventListener('click', pieceDrop)
});



/*----- functions -----*/


function pieceDrop (e) {
    // gets index of which column to drop piece 
    let colNum = (parseInt(e.target.id))
    // iterate column to check for first null value to drop piece

    // we get the index of where the piece is being dropped
    index = grid[colNum].length
    // while(index-- && grid[colNum][index])
    while(index-- && (grid[colNum][index] === null))
    grid[colNum][index] = turn
    console.log(turn);
    console.log(grid[colNum][index]);
    // console.log(grid[sqIdx].length - grid[sqIdx].slice(0).reverse().findIndex(function (el) { return el }) - 1);
}
    // if(boardCols[sqIdx] === null){

    // }
    
    
    // console.log(boardCols[0])
    // let colDrop = boardCols[sqIdx]
    // }
    // for (i in sqIdx)
    // if(boardCols[i] === null)
    // boardCols[i].push(sqIdx)

    
    // we use that index to search the nested array for where the piece 
    // should go. We then need to "drop" piece to the farthest empty cell
    // for (x=0; x < 7; x++){
    
    // boardColumns[`${sqIdx}`]
    //  change players
    // turn *= -1,

function render () {
    
}

function ckWin () {
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
        [null,null,null,null,"1","-1"],
        [null,null,null,null,null,"1"],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
    ];


}

init()


// var array = [-1, null, null, 1, null],
//     index = array.length;
    
// while (index-- && array[index]);

// console.log(index);
// console.log(array[index]);