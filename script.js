class TriviaGame {
    constructor() { }

    play() {

        let nameOfPlayer = prompt("What's your name?")
        let playerName = document.querySelector('.playerName');
        playerName.innerHTML = '      ';

        if (isNaN(nameOfPlayer)) {
            playerName.innerHTML = `${nameOfPlayer}, Enjoy the game!`;
        }

        if ((nameOfPlayer !== null) | (!isNone(nameOfPlayer))) {
            playerName.innerHTML = `${nameOfPlayer}, Enjoy the game!`;
        }

        if((nameOfPlayer == null) | (isNone(nameOfPlayer))){
            playerName.innerHTML = 'Please enter your name!';
        }
    }
}


let game1 = new TriviaGame()
game1.play();