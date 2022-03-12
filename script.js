class TriviaGame {
    constructor() {
    }

    play(qCount, correctC, wrongC, qNumber, cAnswer, wAnswer, clear) {

        // let nameOfPlayer = prompt("What's your name?")
        // let playerName = document.querySelector('.playerName');
        // playerName.innerHTML = '      ';

        // if (isNaN(nameOfPlayer)) {
        //     playerName.innerHTML = `${nameOfPlayer}, Enjoy the game!`;
        // }

        // if ((nameOfPlayer !== null) | (!isNone(nameOfPlayer))) {
        //     playerName.innerHTML = `${nameOfPlayer}, Enjoy the game!`;
        // }

        // if((nameOfPlayer == null) | (isNone(nameOfPlayer))){
        //     playerName.innerHTML = 'Please enter your name!';
        // }

        // Source: https://www.w3schools.com/jsref/jsref_random.asp
        let randomQuestion = Math.floor(Math.random() * 10 + 9);
        //console.log(randomQuestion);

        let easyButton = document.querySelector('.easy');
        let mediumButton = document.querySelector('.medium');
        let hardButton = document.querySelector('.hard');

        let url = `https://opentdb.com/api.php?amount=1&category=${randomQuestion}&type=multiple`

        easyButton.addEventListener('click', event => {
            url = `https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple`
            console.log("Hello!")
        })


        //let url = `https://opentdb.com/api.php?amount=1&category=5&type=multiple`

        let qNumber = document.querySelector('.questionNumber');
        qNumber.innerHTML = qCount;

        fetch(url)
            .then(res => {
                return res.json()
            })

            .then(res => {

                let randNum;
                let arr = [];

                arr.push(res.results[0].correct_answer);
                arr.push(res.results[0].incorrect_answers[0])
                arr.push(res.results[0].incorrect_answers[2])
                arr.push(res.results[0].incorrect_answers[1])

                // Shuffling the array to avoid answers pattern.
                // source: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/

                for (let i = arr.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1))

                    let tempNum = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tempNum;
                }

                // Assigning answers to answers buttons
                response1.innerHTML = arr[0];
                response2.innerHTML = arr[1];
                response3.innerHTML = arr[2];
                response4.innerHTML = arr[3];

                category.innerHTML = res.results[0].category
                question.innerHTML = res.results[0].question

                answerButtons.addEventListener('click', (event) => {

                    if (event.target.innerHTML === res.results[0].correct_answer) {

                        console.log(event.target.style)
                        event.target.style.backgroundImage = 'linear-gradient(rgb(237, 174, 15), rgb(224, 149, 9))'

                        let audioCorrectAnswer = new Audio('Correct_answer.mp3');
                        audioCorrectAnswer.play();
                        correctC++;
                        cAnswer.innerHTML = correctC;


                        //let bodyColor = document.querySelector('body')
                        //bodyColor.style.backgroundImage = "blue";
                    }

                    else if (event.target.innerHTML !== res.results[0].correct_answer) {
                        let audioWrongAnswer = new Audio('wrongAnswer.mp3');
                        audioWrongAnswer.play();
                        wrongC++;
                        wAnswer.innerHTML = wrongC;
                    }
                    // call next question here
                })
            })
    }
}

// source code: https://developer.chrome.com/blog/autoplay/

// for correct and wrong answer soung; source code: https://www.dreamstime.com/stock-music-sound-effect/wrong-answer-answer.html

let audio = new Audio('general-logo-13395.mp3');
//audio.allow = '"autoplay"'

let category = document.querySelector('.category');
let question = document.querySelector('.div1');
let answerButtons = document.querySelector('.answersButtons');
let response1 = document.querySelector('#response1');
let response2 = document.querySelector('#response2');
let response3 = document.querySelector('#response3');
let response4 = document.querySelector('#response4');

let qNumber = document.querySelector('.questionNumber');
let cAnswer = document.querySelector('.correct');
let wAnswer = document.querySelector('.wrong');
let timer = document.querySelector('.timer');

let count = 0;

let timer1 = null;
let game1 = new TriviaGame();
let questionCount = 0;
let correctAnswerCount = 0;
let wrongAnswerCount = 0;

let clear = '';


// source code: https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click

let startButton = () => {
    //audio.play();
    count++;

    let responses = document.querySelectorAll('.response');
    responses.forEach(response => {
        response.style.backgroundImage = 'linear-gradient(rgb(0, 255, 208), rgb(106, 100, 9))'
    })

    qNumber.innerHTML = count;
    game1.play(count, correctAnswerCount, wrongAnswerCount, qNumber, cAnswer, wAnswer, clear);
}

timer1 = setInterval(startButton, 5000);

// Code source: https://www.javatpoint.com/javascript-timer
// Code source: https://stackoverflow.com/questions/51793294/how-to-stop-a-function-during-its-execution-javascript

let startGame = document.querySelector('.startGame');


startGame.addEventListener('click', () => {
    return timer1()
});

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', e => {
    count = 0;
    correctAnswerCount = 0;
    wrongAnswerCount = 0;
    qNumber = 0;
    cAnswer = 0;
    wAnswer = 0;
    clear
    game1.play(count, correctAnswerCount, wrongAnswerCount, qNumber, cAnswer, wAnswer, clear);
    //game1.play();
    clearInterval(timer1)
    //console.log(setInterval(startButton, 5000))
})




