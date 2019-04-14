var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 0;
// var currentQuestion = "";
// var userInput = [];
var gameInProgress = false;
var timeRemaining = 30;
var intervalId;
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
//delete START button
        $("#gameStart").empty();

//select random trivia question from array
selectRandomTriviaQuestion(data);
//render random trivia question from array
for (var i = 0; i < data.length; i++) {
    $("#triviaQuestions").html("<h2>" + data[i].question + "</h2>");
    var answer = data[i].answer;
        for (var i = 0; i < answer.length; i++) {
    $("#possibleChoices").html("<button>" + data[i].answer + "</button>");
    }
//render answers from random trivia question  
}
});
}
playGame();

function selectRandomTriviaQuestion(questions) {
    var maxNum = questions.length;
    var randomIndex = Math.floor(Math.random() * Math.floor(maxNum));
    return questions[randomIndex];   
}







    
        
//         //setInterval function to run clock down by 1 second
//         intervalId = setInterval(decrement, 1000);
//         function decrement() {
//             timeRemaining--;
//             console.log(timeRemaining);
//             //renderTimeRemaining on page from array
//             $("#timeRemaining").html("<h2>" + "Time Remaining: " + timeRemaining + "</h2>");
//         }
//         if (timeRemaining === 0) {
//             //renderMessage on page
//             $("#message").html("<h2>" + "Time is up" + "</h2>");
//             //clearInterval so the clock doesn't keep on running and go into negative seconds
//             clearInterval(intervalId);
//             //Display the correct answer
//             //Wait a few seconds (setTimeOut to 5 seconds) and then show the next question.
//             //render next random Trivia question WITHOUT any user input after setTimeOut = 5 seconds
//             //renderTriviaQuestion on page
//         }
// });




        //Sunny's notes 
        // 1. clear the question
        // 2. append the new question
        // 1 & 2 should be in an func. call this func again once someone gets the right answer. 
        // call the function which will check your correct answer

            //render possible answers for Trivia Questions on page via button
            //If the player selects the correct answer, show a screen congratulating them 
            //for choosing the right option. After a few seconds, display the next question 
            //-- do this without user input.
            //Wait a few seconds (setTimeOut to 5 seconds) and then show the next question.
            //render next random Trivia question WITHOUT any user input after setTimeOut = 5 seconds

            //if click incorrect answer to trivia question, note incorrect when button 
            //is clicked and then display the correct answer. Wait a few seconds, 
            // then show the next question.
            
            //endGame

            //On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
