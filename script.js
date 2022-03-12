// Declaring variables

// This will hold category information
let category = document.querySelector('.category');

// This will hold the question
let question = document.querySelector('.div1');

// This is for all response buttons
let answerButtons = document.querySelector('.answersButtons');

// Declaring difficulty buttons
let difficultyButtons = document.querySelector('.difficulties');

// Declaring individual difficulty buttons
let easyButton = document.querySelector('#easy');
let mediumButton = document.querySelector('#medium');
let hardButton = document.querySelector('#hard');

let difficulty = '';

// This is for individual responses
let response1 = document.querySelector('#response1');
let response2 = document.querySelector('#response2');
let response3 = document.querySelector('#response3');
let response4 = document.querySelector('#response4');

// This will hold the question's number
let qNumber = document.querySelector('#questionNumber');

// This will hold number of correct answers
let cAnswer = document.querySelector('#correct');

// This will hold number of wrong answers
let wAnswer = document.querySelector('#wrong');
let timer = document.querySelector('#timer');

let questionCount = 0;
let correctAnswerCount = 0;
let wrongAnswerCount = 0;
let count = 0;
let clear = '';

let startGame = document.querySelector('.startGame');

let url = '';

// Reset the game when the "Reset" button is clicked
let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {

    window.location.reload()
});


// when this function is called, the same color will be assigned to all answer buttons and play function  the game
let startButton = () => {
    audio.play();
    let responses = document.querySelectorAll('.response');
    responses.forEach(response => {
        response.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214));'
    })
    // When the "Start The Game" button is pressed, Call "play" function
    play();
}

// Selecting difficulty
difficultyButtons.addEventListener('click', e => {

    difficulty = e.target.className;
    console.log(e.target)

    // Only change the color "easy" button is selected, then enable "Start The Game"
    if (difficulty === 'easy') {
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        mediumButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        hardButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        alert(`You have selected "${difficulty}" difficulty. Next, click on "Start The Game" button to play the game.`)

        // Start the Game when "Start The Game" is clicked
        let startGame = document.querySelector('.startGame');
        startGame.addEventListener('click', () => {
            startButton();
        });
    }

    else if (difficulty === 'medium') {
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        easyButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        hardButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        alert(`You have selected "${difficulty}" difficulty. Next, click on "Start The Game" button to play the game.`)
        // Start the Game when "Start The Game" is clicked
        startGame.addEventListener('click', () => {
            startButton();

            // Refresh the window
        });
    }
    else if (difficulty === 'hard') {
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        mediumButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        easyButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        alert(`You have selected "${difficulty}" difficulty. Next, click on "Start The Game" button to play the game.`)
    }
    //console.log(e)
    return difficulty;
})


function play() {

    // Source: https://www.w3schools.com/jsref/jsref_random.asp
    let randomQuestion = Math.floor(Math.random() * 10 + 9);

    // Get the question from the API
    //url = `https://opentdb.com/api.php?amount=1&category=${randomQuestion}&type=multiple`

    let url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}`

    let arr = [];

    fetch(url)
        .then(res => {
            return res.json()
        })

        .then(res => {

            arr.push(res.results[0].correct_answer);
            arr.push(res.results[0].incorrect_answers[0])
            arr.push(res.results[0].incorrect_answers[2])
            arr.push(res.results[0].incorrect_answers[1])

            category.innerHTML = res.results[0].category
            question.innerHTML = res.results[0].question

            // Assigning answers to answers buttons
            response1.innerHTML = arr[0];
            response2.innerHTML = arr[1];
            response3.innerHTML = arr[2];
            response4.innerHTML = arr[3];

            //console.log(res)

            // Shuffling the array to avoid answers pattern.
            // source: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/

            for (let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1))

                let tempNum = arr[i];
                arr[i] = arr[j];
                arr[j] = tempNum;
            }

            answerButtons.addEventListener('click', (event) => {
                count++;
                qNumber.innerHTML = count;

                // Check if the selected answer is equal to correct answer
                if (event.target.innerText === res.results[0].correct_answer) {
                    correctAnswerCount++;
                    cAnswer.innerText = correctAnswerCount;
                    event.preventDefault
                    event.target.style.backgroundImage = 'linear-gradient(rgb(0, 255, 106), rgb(9, 106, 28))'
                    let audioCorrectAnswer = new Audio('Correct_answer.mp3');
                    audioCorrectAnswer.play();

                    // Call the next question
                    nextQuestion()
                }

                // Check if the selected answer is not equal to the correct answer
                else if (event.target.innerText !== res.results[0].correct_answer) {
                    wrongAnswerCount++;
                    wAnswer.innerHTML = wrongAnswerCount;
                    event.target.style.backgroundImage = 'linear-gradient(rgb(220, 7, 7), #fa0a0a)'
                    let audioWrongAnswer = new Audio('wrongAnswer.mp3');
                    audioWrongAnswer.play();
                    nextQuestion()

                }
            })
        })
}

function nextQuestion() {

    // Source: https://www.w3schools.com/jsref/jsref_random.asp
    let randomQuestions = Math.floor(Math.random() * 10 + 9);

    let urls = `https://opentdb.com/api.php?amount=1&category=${randomQuestions}&type=multiple`

    let arrs = [];


    fetch(urls)
        .then(ress => {
            return ress.json()
        })

        .then(ress => {

            arrs.push(ress.results[0].correct_answer);
            arrs.push(ress.results[0].incorrect_answers[0])
            arrs.push(ress.results[0].incorrect_answers[2])
            arrs.push(ress.results[0].incorrect_answers[1])

            // Shuffling the array to avoid answers pattern.
            // source: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/

            for (let i = arrs.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1))

                let tempNums = arrs[i];
                arrs[i] = arrs[j];
                arrs[j] = tempNums;
            }

            // Assigning original coloanswers to answers buttons
            response1.innerHTML = arrs[0];
            response1.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            response2.innerHTML = arrs[1];
            response2.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            response3.innerHTML = arrs[2];
            response3.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            response4.innerHTML = arrs[3];
            response4.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214))'

            category.innerHTML = ress.results[0].category
            question.innerHTML = ress.results[0].question

        })
}

// source code: https://developer.chrome.com/blog/autoplay/

// for correct and wrong answer song; source code: https://www.dreamstime.com/stock-music-sound-effect/wrong-answer-answer.html

let audio = new Audio('general-logo-13395.mp3');
audio.allow = "autoplay";

// source code: https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click

// conditional statements
// read question
// see if selected answer === correrect answer
// if yes, dosomething
// select answer !== correct answer
// Do something

//if selectedAnswer === correct_answer {
    // make green
    // add points
    // say correct
// }
// 

// The same way pull the info. for questions and answers/

// reset button
// Take question Number, correct and wrong answer number
// set all 3 to 0.
// Load up a new question and the answers
// set their background color to the original 

