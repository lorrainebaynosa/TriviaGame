var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 0;
// var currentQuestion = "";
// var userInput = [];
var gameInProgress = false;
var timeRemaining = 30;
var intervalId;
var secondsRemaining = 5;
var timeOutId;
var data = [
    {
        question: "Who is Alex Trebek?",
        answer: ["jeopardy", "myself", "I", "you"]
    },
    {
        question: "Who is Targaryen?",
        answer: ["cat", "queen", "dog", "elephant"]
    },
    {
        question: "Who is Stark?",
        answer: ["GOT", "dog", "cat", "hat"]
    },
    {
        question: "Who is Snow?",
        answer: ["GOT", "dog", "cat", "hat"]
    }
];
var gameinProgress = false;

// START SCREEN: CREATE BUTTON
function startGame() {
    correctGuesses = 0;
    incorrectGuesses = 0;
    unanswered = 0;
    timeRemaining = 30;
    gameInProgress = true;
    $("#gameStart").html("<button>" + "START" + "</button>");
}
startGame();

//PLAY GAME
function playGame() {
    $("#gameStart").on("click", function (event) {
        console.log(this);
//clear START button
        $("#gameStart").empty();
//setInterval function to run clock down by 1 second
 intervalId = setInterval(decrement, 1000);
 function decrement() {
    timeRemaining--;
    console.log(timeRemaining);
//renderTimeRemaining on page from array
    $("#timeRemaining").html("<h2>" + "Time Remaining: " + timeRemaining + "</h2>");
    if (timeRemaining === 0) {
//renderMessage on page
    $("#message").html("<h2>" + "Time is up" + "</h2>");
//  clearInterval so the clock doesn't keep on running and go into negative seconds
    clearInterval(intervalId);
    renderCorrectAnswer();
    renderNextQuestion();
 }
 

//show only one question until the player answers it or their time runs out.
//select random trivia question from array
selectRandomTriviaQuestion(data);
//render random trivia question from array
for (var i = 0; i < data.length; i++) {
    $("#triviaQuestions").html("<h2>" + data[i].question + "</h2>");
//render possible answers for Trivia Questions on page via button
//for each answer in the array, we create a new button to hold the text(answer). A new button will be created with each iteration of the loop.

    data[i].answer.forEach(function () {
        $("#possibleChoices").html("<button>" + data[i].answer[i] + "</button>");
});
    // var answer = data[i].answer;
    // for (var i = 0; i < answer.length; i++) {
    // var answerBtn = $("<button>");
    // $("#possibleChoices").append(answerBtn);
 
}
}
});
}
playGame();

function selectRandomTriviaQuestion(questions) {
    var maxNum = questions.length;
    var randomIndex = Math.floor(Math.random() * Math.floor(maxNum));
    return questions[randomIndex];   
}

function renderCorrectAnswer(){
//clear question button
    $("#triviaQuestions").empty();
// Display the correct answer

//Display image for correct answer
         
}
function renderNextQuestion() {
//render next random Trivia question WITHOUT any user input after setTimeOut = 5 seconds. setTimeout function to run clock down by 1 second
// timeOutId = setTimeOut(decrement, 1000 * 5);
// function decrement() {
//    secondsRemaining--;
//    console.log(timeRemaining);
//    if (secondsRemaining === 0) {
// //  clearTimeOut so the clock doesn't keep on running and go into negative seconds
//    clear(timeOutId);
// }
}

            
function winner() {
    var gameInProgress = false;
    correctGuesses++;
    unanswered--;
//If the player selects the correct answer, show a screen congratulating them for choosing the right option.
    $("#message").html("<h2>" + "Congratulations for selecting correct answer!" + "</h2>");
    renderNextQuestion();
}

function loser() {
    var gameInProgress = false;
    incorrectGuesses++;
    unanswered++;
//If the player selects the incorrect answer, show a screen telling them they selected the incorrect answer.
    $("#message").html("<h2>" + "Sorry. That's the incorrect answer." + "</h2>");
    renderCorrectAnswer();
    renderNextQuestion();
}


//Sunny's notes 
// 1. clear the question
// 2. append the new question
// 1 & 2 should be in an func. call this func again once someone gets the right answer. 
// call the function which will check your correct answer

//endGame

//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)







// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
