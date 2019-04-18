var IMG_ROOT = "assets/images/";
var questions = [
    {
        question: "From what family is King Robert?",
        answerChoices: ["baratheon", "targaryen", "stark", "lannister"],
        correctAnswer: "baratheon"
    },

    {
        question: "What is the best TV series?",
        answerChoices: ["gameOfThrones", "Seinfeld", "MASH", "theOffice"],
        correctAnswer: "gameOfThrones"
    },
    {
        question: "Which family is associated with Tyrion, Cersei, and Jaime?",
        answerChoices: ["lannister", "baratheon", "targaryen", "stark"],
        correctAnswer: "lannister"
    },

    {
        question: "Which family had a member killed by Walder Frey at the Red Wedding?",
        answerChoices: ["stark", "baratheon", "targaryen", "lannister"],
        correctAnswer: "stark"
    },

    {
        question: "Which family is associated with the dragons?",
        answerChoices: ["targaryen", "baratheon", "stark", "lannister"],
        correctAnswer: "targaryen"
    }
];
var GAME_TIME_LIMIT = 175; //seconds
var QUESTION_TIME_LIMIT = 30; //seconds
var NEXT_LOAD_TIME = 2;//seconds
var RESET_TIME = 10;//seconds
var TOTAL_QUESTIONS = questions.length;

var gameTimer = GAME_TIME_LIMIT;
var questionTimer = QUESTION_TIME_LIMIT;

var correctGuesses = 0;
var incorrectGuesses = 0;
var gameInProgress = false;
var intervalId;
var questionTimerId;
var nextQuestionId;
var summaryId;
var questionIndex = 0; //keeps count of currently displayed question.
var clockRunning = false;

// START SCREEN: CREATE BUTTON
function initGame() {
    correctGuesses = 0;
    incorrectGuesses = 0;
    gameInProgress = false;
    $("#gameStart").html("<button>" + "START" + "</button>")
        .click(playGame);
}

initGame();

// for the setInterval
function decrementGame() {
    clockRunning = true;
    gameTimer--;
    renderGameTimer(gameTimer);
    if (gameTimer <= 0 ) {
        endGame();
        $("#message").html("<h2>You ran out of time for the game.</h2>")
        clearInterval(intervalId);
    }
}

function decrementQuestion() {
    clockRunning = true;
    questionTimer--;
    $("#questionTimer").html("<h2>" + "Time Remaining: " + questionTimer + "</h2>");
    if (questionTimer === 0) {
        loser();
        $("#message").html("<h2>" + "Time is up" + "</h2>");
        //  clearInterval so the clock doesn't keep on running and go into negative seconds
        clearInterval(questionTimerId);
    }
}

function playGame() {
    gameInProgress = true;
    $("#gameStart").empty();
    renderGameTimer(gameTimer); 
    var firstQuestion = questions[questionIndex];
    $("#questionTimer").html("<h2>" + "Time Remaining: " + questionTimer + "</h2>");
    renderQuestion(firstQuestion);
    intervalId = setInterval(decrementGame, 1000);
    questionTimerId = setInterval(decrementQuestion, 1000);
}

function renderQuestion(questionObject) {
    $("#triviaQuestions").html("<h2>" + questionObject.question + "</h2>")
    setButtonValues(questionObject.answerChoices, questionObject.correctAnswer);
}

function setButtonValues(answerChoices, answer) {
    for (var i = 0; i < answerChoices.length; i++) {
        var buttonsQuestion = $("<button>" + answerChoices[i] + "</button>")
            .attr({
                "data-value": answerChoices[i]
            })
            .css({
                "background-color": "yellow",
                "font-family": "Comic Sans MS",
                "width": 200,
                "height": 40,
                "font-size": 16
            })
            .click(function () {
                var selectedAnswer = $(this).attr("data-value")
                if (selectedAnswer === answer && questionTimer > 0) {
                    winner(answer);
                }
                else {
                    loser(answer);
                    $("#message").html("<h2>" + "Sorry. That's the incorrect answer. The correct answer is " + answer + "</h2>");
                }
                // clear to stop the timer
                clearInterval(questionTimerId)
            });
        $("#buttons").append(buttonsQuestion);
    }
}

//show only one question until the player answers it or their time runs out.
function nextQuestion() {
    var nextQuestion = questions[questionIndex];
    $("#GOT").attr("src", IMG_ROOT + "GOTlogo.png")
    $("#message").html("")
    $("#buttons").empty();
    $("#triviaQuestions").empty();
    renderQuestion(nextQuestion);
    questionTimer = QUESTION_TIME_LIMIT; //reset timer, this is a global variable used in the decrementQuestion function
    questionTimerId = setInterval(decrementQuestion, 1000)
}

function winner(answer) {``
    $("#message").html("<h2>" + "Congratulations for selecting " + answer + "!" + "</h2>");
    $("#GOT").attr("src", IMG_ROOT + answer + ".jpg")
    correctGuesses++;
    questionIndex++;

    if (questionIndex < TOTAL_QUESTIONS) {
        nextQuestionId = setTimeout(function() {
            nextQuestion();
        }, NEXT_LOAD_TIME * 1000)
    }
    else {
        endGame();
    }
}

function loser(answer) {
    $("#message").html("<h2>" + "Sorry. The correct answer is " + answer + "</h2>");
    $("#GOT").attr("src", IMG_ROOT + answer + ".jpg")
    incorrectGuesses++;
    questionIndex++;
    if (questionIndex < TOTAL_QUESTIONS) {
        nextQuestionId = setTimeout(function() {
            nextQuestion();
        }, NEXT_LOAD_TIME * 1000);
    }
    else {
        endGame();
    }
}

function renderGameTimer(gameTimeRemaining) {
    $("#gameTimer").html("<h2>Game time remaining: " + gameTimeRemaining + "</h2>");
}
      
function endGame() {
    clearInterval(questionTimerId);
    clearInterval(intervalId);
    summaryId = setTimeout(function() {
            summary();
        }, NEXT_LOAD_TIME * 1000);
}

function summary() {
    $("#GOT").attr("src", IMG_ROOT + "GOTlogo.png")
    $("#correctGuesses").html("<h2>" + "You have correctly answered " + correctGuesses + "</h2>");
    $("#incorrectGuesses").html("<h2>" + "You have incorrectly answered " + incorrectGuesses + "</h2>");
    $("#triviaQuestions").empty("");
    $("#buttons").empty();
    $("#message").empty("");
    $("#gameStartOver").html("<button>" + "START OVER" + "</button>")
        .click(function() {
            resetGame();
            playGame();
        })
}

//call resetGame when you figure out summary and getting click to work for start over
function resetGame() {
    questionIndex = 0;
    clockRunning = false;
    correctGuesses = 0;
    incorrectGuesses = 0;
    gameInProgress = false;
    gameTimer = GAME_TIME_LIMIT;
    questionTimer = QUESTION_TIME_LIMIT;
    $("#gameTimer").empty("");
    $("#questionTimer").empty("");
    $("#triviaQuestions").empty("");
    $("#buttons").empty("");
    $("#message").empty("");
    $("#correctGuesses").empty("");
    $("#incorrectGuesses").empty("");
}


