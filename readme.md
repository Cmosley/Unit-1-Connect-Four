# Connect 4 
##
## Objective:
### - Create a browser-based game using HTML, CSS and JS
##
##
##
## To play the game:
### Click [here](http://connect-4-online.surge.sh) to play the game.
##
##
## Motivation:
### My partner and I are really competitive when we play board games with each other, neither of us like to lose, which is good for me because I can usually win most the time. However, Connect Four is my achillies heel, my partner absolutley owns mental space in my head with how much I lose at Connect Four. After I implement the minimax AI and hone my skills, I will have my revenge tour! 
## Prototype View:
### Here is my initial drawing of the playing field:
![Connect Four layout and logic brainstorm](images/hand-connect4.jpg)
### Here is an initial wire-frame of how the playing field will be set up:
![Wireframe](images/wire-connect4.jpg)
### Here is what the playing field looks like, post styling:
![Connect Four board currently](images/game-v1.png)
## Technology Implemented:
- JavaScript
- CSS
- HTML
- Git 
- Surge

## Credits:
- Functionality structures: https://github.com/SteamCodeYT/JavaScript-Connect-4
- Background Img https://www.wallpapertip.com/wpic/TxwRho_wood-table-blur-background/
- Coin Rotation https://stackoverflow.com/questions/35607055/html5-rotate-animation-how-to-show-the-other-side-of-the-coin
- H1 Styling https://codepen.io/fielding/pen/wYPRjj
- Sound "You win" https://www.youtube.com/watch?v=sg763OgGdqI

## Pseudocode:
![Pseduo code 1/2](images/pseudo1.png)
![Pseduo code 2/2](images/pseudo2.png)


## Minimum Viable Product:
- As a user, I should be able to face off head to head with someone, alternating turns
- As a user, I should be able to place my game piece in a valid spot
- As a user, I should know when it is my turn 
- As a user, I should be able to know when I win or lose the game
- As a user, I should be able to reset the board to start a new game
- As a user, I should be able to see the instructions pop up when "how to play" is clicked
- As a user, I should be able to hear game piece falling sound after every turn and all the game pieces falling on reset

## Stretch Goals:
- Add visual of piece being dropped from top to cell location
- Enhance visuals for game pieces
- Add a random column "Easy" AI 
- Implement a minimax algo "Hard" AI 
- Re-construct backend to allow for cross browser multiplayer
- Add ability for player to select own color 
- Add mobile responsiveness