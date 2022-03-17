// Declaring variables

let winWindow = document.querySelector('.win');

let winResetButton = document.querySelector('.winReset');

let loseResetButton = document.querySelector('.loseReset');

let loseWindow = document.querySelector('.lose');

let winImage = document.querySelector('.winImage')

let loseMessage = document.querySelector('#losePar');

let video = document.querySelector('#myVideo')

// Get Body content
let body = document.querySelector('body')

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

let questionscore = 0;
let correctAnswerscore = 0;
let wrongAnswerscore = 0;
let score = 0;
let clear = '';
let difficulty = '';

// Set winning score
let winningScore = 6;

let startGame = document.querySelector('.startGame');

// Takes the response from fetch
let triviaQuestion;

// Array of all videos/mp4
let arrayVideos = []
arrayVideos.push('videoArray/Pexels Videos 1307329.mp4');
arrayVideos.push('videoArray/Pexels Videos 1893746.mp4');
arrayVideos.push('videoArray/Pexels Videos 2157006.mp4');
arrayVideos.push('videoArray/pexels-adrien-jacta-6630025.mp4');
arrayVideos.push('videoArray/pexels-ambientnature-atmosphere-5590457.mp4');
arrayVideos.push('videoArray/pexels-ambientnature-atmosphere-5948574.mp4');
arrayVideos.push('videoArray/pexels-ambientnature-atmosphere-5955965.mp4');
arrayVideos.push('videoArray/pexels-ambientnature-atmosphere-5956783.mp4');
arrayVideos.push('videoArray/pexels-anna-tarazevich-6550969.mp4');
arrayVideos.push('videoArray/pexels-greg-grzegorz-sobieraj-6825302.mp4');
arrayVideos.push('videoArray/pexels-ibrahim-bennett-5735794.mp4');
arrayVideos.push('videoArray/pexels-mart-production-7565824.mp4');
arrayVideos.push('videoArray/pexels-matthias-groeneveld-5619568.mp4');
arrayVideos.push('videoArray/pexels-mikhail-nilov-6981302.mp4');
arrayVideos.push('videoArray/pexels-mikhail-nilov-6981411.mp4');
arrayVideos.push('videoArray/pexels-nicolaas-van-der-walt-5580688.mp4');
arrayVideos.push('videoArray/pexels-pat-whelen-5738601.mp4');
arrayVideos.push('videoArray/pexels-rostislav-uzunov-7385122 (1).mp4');
arrayVideos.push('videoArray/pexels-rostislav-uzunov-8252781.mp4');
arrayVideos.push('videoArray/pexels-xabi-oregi-5619876.mp4');
arrayVideos.push('videoArray/pexels-yakupmert-aksoy-5651047.mp4');
arrayVideos.push('videoArray/production ID_4046226.mp4');
arrayVideos.push('videoArray/production ID_4231734.mp4');
arrayVideos.push('videoArray/production ID_4328789.mp4');
arrayVideos.push('videoArray/production ID_4478322.mp4');
arrayVideos.push('videoArray/production ID_4824392.mp4');
arrayVideos.push('videoArray/production ID_4980005.mp4');
arrayVideos.push('videoArray/production ID_5155396.mp4');
arrayVideos.push('videoArray/production ID_5192849.mp4');
arrayVideos.push('videoArray/production ID_5197931.mp4');
arrayVideos.push('videoArray/production ID_5198042.mp4');
arrayVideos.push('videoArray/video.mp4');

// for correct and wrong answer song; source code: 
// https://www.dreamstime.com/stock-music-sound-effect/wrong-answer-answer.html
let audio = new Audio('general-logo-13395.mp3');
audio.allow = "autoplay";


// Reset the game when the "Reset" button is clicked
let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    audio.play()
    window.location.reload()
});

// Assign color to all answer buttons and call "play" function
let startButton = () => {
    score++;
    let responses = document.querySelectorAll('.response');
    responses.forEach(response => {
        response.style.backgroundImage = 'linear-gradient(rgb(173, 202, 9), rgb(57, 14, 214));'
    })

    // When the "Start The Game" button is pressed, Call "play" function
    play();
}

// Select difficulty buttons
difficultyButtons.addEventListener('click', e => {

    difficulty = e.target.id;

    // Only change the color "easy" button is selected, then enable "Start The Game"
    if (difficulty === 'easy') {
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        mediumButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        hardButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        alert(`You have selected "${difficulty}" difficulty. Next, click on "Start The Game" button to play the game. 
        Good luck!`)

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
        alert(`You have selected "${difficulty}" difficulty. Next, click on "Start The Game" button to play the game. 
        Good luck!`);

        // Start the Game when "Start The Game" is clicked
        startGame.addEventListener('click', () => {
            startButton();
        });
    }
    else if (difficulty === 'hard') {
        e.target.style.backgroundImage = 'linear-gradient(rgb(9, 25, 202), rgb(81, 14, 214))';
        mediumButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        easyButton.style.backgroundImage = `linear-gradient(rgb(16, 221, 142), rgb(4, 58, 7))`;
        alert(`You have selected "${difficulty}" difficulty. Next, click on "Start The Game" button to play the game. 
        Good luck!`)

        // Start the Game when "Start The Game" is clicked
        startGame.addEventListener('click', () => {
            startButton();
        });
    }
    return difficulty;
})



// Play the game when the start game button is click.

function play() {

    audio.play();

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

            triviaQuestion = res;

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

            // Shuffling the array to avoid answers pattern.
            // source: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/

            for (let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1))

                let tempNum = arr[i];
                arr[i] = arr[j];
                arr[j] = tempNum;
            }

            // console.log(res.results[0])
        })
}


answerButtons.addEventListener('click', (event) => {

    //console.log(score)

    qNumber.innerText = score;

    if (score === 10) {

        setTimeout(() =>{
            if (winningScore < correctAnswerscore) {

                // Change z-index to 1 to appear on top
                winWindow.style.zIndex = "1";
    
                // Refresh the page when the "Reset" button is clicked
                winResetButton.addEventListener('click', () => {
                    refreshWindow();
                });
            }
    
            else if (correctAnswerscore < winningScore) {
    
                // Change z-index to 1 to appear on top
                loseWindow.style.zIndex = "1";
    
                // Refresh the page when the "Reset" button is clicked
                loseResetButton.addEventListener('click', () => {
                    refreshWindow();
                });
            }
        }, 1000)

    }


    // Check if the selected answer is equal to correct answer
    if (event.target.innerText === triviaQuestion.results[0].correct_answer) {

        // Increment total number of question
        score++;

        // Increament the the number of correct answers.
        correctAnswerscore++;

        // Write the correct answer in the correct answer box
        cAnswer.innerText = correctAnswerscore;

        for (let i = arrayVideos.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))

            let tempNum = arrayVideos[i];
            arrayVideos[i] = arrayVideos[j];
            arrayVideos[j] = tempNum;
        }

        // Play a random video
        video.src = arrayVideos[4];

        // Play "audioCorrectAnswer" if the answer is correct
        let audioCorrectAnswer = new Audio('Correct_answer.mp3');
        audioCorrectAnswer.play();

        // Set the background of the correct answer to green
        event.target.style.backgroundImage = `linear-gradient(rgb(0, 255, 106), 
        rgb(9, 106, 28))`;



        // Call the next question
        nextQuestion()
    }

    // Check if the selected answer is not equal to the correct answer
    else if (event.target.innerText !== triviaQuestion.results[0].correct_answer) {

        for (let i = arrayVideos.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))

            let tempNum = arrayVideos[i];
            arrayVideos[i] = arrayVideos[j];
            arrayVideos[j] = tempNum;
        }

        // Play a random video
        video.src = arrayVideos[5];

        console.log(arrayVideos[5])

        score++;

        // Play this audio if the answer is incorrect
        let audioWrongAnswer = new Audio('wrongAnswer.mp3');
        audioWrongAnswer.play();

        // Increament the the number of incorrect answers.
        wrongAnswerscore++;

        // Set the background of the correct answer to red
        event.target.style.backgroundImage = 'linear-gradient(rgb(220, 7, 7), #fa0a0a)';

        // Write the incorrect answer in the wrong answer box
        wAnswer.innerHTML = wrongAnswerscore;
    }

    // Call the next question
    nextQuestion();
})



// Refresh the window reset all numbers to 0 and all texts to empty.
function refreshWindow() {
    window.location.reload()
}



// This function runs when the player calls for the next question.
function nextQuestion() {

    // Play the general audio
    audio.play()

    // Source: https://www.w3schools.com/jsref/jsref_random.asp
    let randomQuestions = Math.floor(Math.random() * 10 + 9);

    let urls = `https://opentdb.com/api.php?amount=1&category=${randomQuestions}&type
    =multiple`

    let arrs = [];

    fetch(urls)
        .then(ress => {
            return ress.json()
        })

        .then(ress => {

            // Assign the response from fetch to triviaQuestion
            triviaQuestion = ress;

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

            console.log(ress.results[0])

        })
}




