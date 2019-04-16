var GAME_TIME_LIMIT = 175; //seconds
var QUESTION_TIME_LIMIT = 30; //seconds
var NEXT_LOAD_TIME = 5;//seconds

var gameTimer = GAME_TIME_LIMIT;
var questionTimer = QUESTION_TIME_LIMIT;
var nextLoadTimer = NEXT_LOAD_TIME;

var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 0;
// var currentQuestion = "";
var gameInProgress = false;
var gameTimeOutId;
var questionIntervalId;
var nextLoadTimeOutId;
var questions = [
    {
        question: "From what family is a Joffrey?",
        answerChoices: ["baratheon", "targaryen", "stark", "lannister"],     
        correctAnswer: "baratheon"
    },

    {
        question: "What is the best TV series?",
        answerChoices: ["gameOfThrones","Seinfeld", "MASH", "theOffice"],          
        correctAnswer: "gameOfThrones"
    },

    {   
        question: "Which family is associated with Tyrion, Cersei, and Jaime?",
        answerChoices: ["lannister", "baratheon", "targaryen", "stark"],           
        correctAnswer: "lannister"
    },

    {   
        question: "Which family had a member killed by Walder Frey at the Red Wedding?",
        answerChoices: ["stark","baratheon", "targaryen", "lannister"],
        correctAnswer: "stark"
    },

    {
        question: "Which family is associated with the dragons?",
        answerChoices: ["targaryen", "baratheon", "stark", "lannister"],
        correctAnswer: "targaryen"
    }
];
// START SCREEN: CREATE BUTTON

function startGame() {
    correctGuesses = 0;
    incorrectGuesses = 0;
    unanswered = 0;
    GAME_TIME_LIMIT = 175; 
    QUESTION_TIME_LIMIT = 30; 
    NEXT_LOAD_TIME = 5;
    gameInProgress = true;
    $("#gameStart").html("<button>" + "START" + "</button>");
}
startGame();

//PLAY GAME

function playGame() {
    gameinProgress = true;
    $("#gameStart").on("click", function(event) {
        console.log(this);
//clear START button
    $("#gameStart").empty();
//set game to run out at 175 seconds. Entire game should be nested in this function.
    gameTimeOutId = setTimeout(decrement, 1000);
    function decrement() {
        gameTimer--;
        console.log(gameTimer);
        clearTimeout(gameTimeoutId);
// render gameTimer on page 
    $("#gameTimer").html("<h2>" + "Time Remaining in game: " + gameTimer + "</h2>");
    if (gameTimer === 0) {
        endGame();
    }
}
renderQuestion(question1);
renderQuestion(question2);
renderQuestion(question3);
renderQuestion(question4);
renderQuestion(question5);

});
}
//Each question is alloted 30 seconds max so TimeInterval function should be nested
//in renderQuestion().
function renderQuestion(question) {
    for (var i = 0; i < questions.length; i++) {
        var question1 = questions[0].question;
        var question2 = questions[1].question;
        var question3 = questions[2].question;
        var question4 = questions[3].question;
        var question5 = questions[4].question;
        console.log(question3);
    $("#triviaQuestions").html("<h2>" + question + "</h2>")
    }
//setInterval function to run clock down by 1 second
//clearInterval so the clock doesn't keep on running and go into negative seconds
    questionIntervalId = setInterval(decrement, 1000);
    function decrement() {
        questionTimer--;
        console.log(questionTimer);
        clearInterval(questionIntervalId);
//render questionTimer on page 
        $("#questionTimer").html("<h2>" + "Time Remaining: " + questionTimer + "</h2>");
        if (questionTimer === 0) {
//renderMessage on page
            $("#message").html("<h2>" + "Time is up" + "</h2>");
//load next question after 5 seconds
            clearTimeout(nextLoadTimeoutId);
            nextLoadTimeoutId = setTimeout(decrement, 1000);
                function decrement() {
                nextLoadTimer--;
                console.log(nextLoadTimer);        
                }
                }
                }
}

       
function endGame() {
//On the final screen, show the number of correct answers, incorrect answers, 
//and an option to restart the game (without reloading the page).
    gameInProgress = false; 
    $("#correctGuesses").html("<h2>" + "Correct Gueses: " + correctGuesses + "</h2>");
    $("#unanswered").html("<h2>" + "Unanswered Questions: " + unanswered + "</h2>");
    $("#message").html("<h2>" + "Click the START button to play again" + "</h2>");
    $("#gameTimer").empty();
    $("#questionTimer").empty();
    $("#nextLoadTimer").empty();
    $("#triviaQuestions").empty();
    $(".buttons").empty();

}