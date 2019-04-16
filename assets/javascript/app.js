// var IMG_ROOT = "assets/images/";
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
var intervalId;
var timeOutId;
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
    $("#gameStart").on("click", function (event) {
        console.log(this);
//clear START button
        $("#gameStart").empty();
renderQuestion();
// setButtonValues();
//setInterval function to run clock down by 1 second
 intervalId = setInterval(decrement, 1000);
 function decrement() {
    gameTimer--;
    questionTimer--;
    console.log(gameTimer);
    console.log(questionTimer);
//render questionTimer on page 
    $("#questionTimer").html("<h2>" + "Time Remaining: " + questionTimer + "</h2>");
    if (questionTimer === 0) {
//renderMessage on page
    $("#message").html("<h2>" + "Time is up" + "</h2>");
//  clearInterval so the clock doesn't keep on running and go into negative seconds
    clearInterval(intervalId);
    // renderCorrectAnswer();
    // renderNextQuestion();  
} 
}
});
}

function renderQuestion(question) {
    for (var i = 0; i < questions.length; i++) {
        var question1 = questions[0].question;
        var question2 = questions[1].question;
        var question3 = questions[2].question;
        var question4 = questions[3].question;
        var question5 = questions[4].question;
        console.log(question3);
    $("#triviaQuestions").html("<h2>" + question1 + "</h2>")
    }
    setButtonValues(questions[0].answerChoices);
}
    
    function setButtonValues(answersArray) {
        for (var i = 0; i < answersArray.length; i++) {
            var buttonsQuestion = $("<button>" + answersArray[i] + "</button>");
            $("#buttons").append(buttonsQuestion);
            buttonsQuestion.attr({
            "attribute": "answerChoice",
            "data-value": answersArray[i]
        });
            // var buttonValue = $("#" + questions.answerChoices[i]);
            // button.attr("data-value", buttonValue);
        }
    }
    
    $(".buttons").on("click", function () {
        console.log("button clicked!");
        var buttonValue = $(this).attr("data-value");
        console.log(buttonValue);
    });

    // for (var i = 0; i < 4; i++) {
        // 
        
        // $("#buttons").append(buttonsQuestion1);
        // question1.answerChoices + "<button>");
        //if (data-value ===question1.correctAnswer){
            // wins++;

        // }
    // }
        ;
        // $("#button1").html("<button>" + questions[0].answerChoices[0] + "</button>");
        // $("#button2").html("<button>" + questions[0].answerChoices[1] + "</button>");
        // $("#button3").html("<button>" + questions[0].answerChoices[2] + "</button>");
        // $("#button4").html("<button>" + questions[0].answerChoices[3] + "</button>");
    //     console.log(question1);
    //     if (questionTimer < 0 && wins++) {
    //     $("#triviaQuestions").html("<h2>" + question2 + "</h2>");
    //     //clear fields
    //     $("#questionTimer").empty();
    //     $("triviaQuestions").empty();
    //     $("#buttons").empty();
    //     }  
    // }

// function checkWins() {
//     $(").click(function(){
//     var result = $("input [name='answer']: checked").val();
//        if(result.length>0 && result === this.correctAnswer) {
//         winner();
//        }
//         else {
//             loser();
//         }
// });
// }

//show only one question until the player answers it or their time runs out.

function renderGameTimeLimit() {
    $("#gameTimer").html("<h2" + gameTimer + "</h2>");
}

playGame();

function renderCorrectAnswer(){
//clear question button
    $("#triviaQuestions").empty();
// Display the correct answer

//Display image for correct answer
         
}
function delayNextLoad() {
//render next ]Trivia question WITHOUT any user input after setTimeOut = 5 seconds. setTimeout function to run clock down by 1 second
    timeOutId = setTimeOut(decrement, 1000);
    function decrement() {
    nextLoadTimer--;
    console.log(nextLoadTimer);
    if (nextLoadTimer === 0) {
//  clearTimeOut so the clock doesn't keep on running and go into negative seconds
   clear(timeOutId);
   playGame();
    }
    }
}

            
function winner() {
    var gameInProgress = false;
    correctGuesses++;
    unanswered--;
//If the player selects the correct answer, show a screen congratulating them for choosing the right option.
    $("#message").html("<h2>" + "Congratulations for selecting correct answer!" + "</h2>");
    // renderNextQuestion();
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


function resetGame() {
    gameInProgress === false;
}

//Sunny's notes 
// 1. clear the question
// 2. append the new question
// 1 & 2 should be in an func. call this func again once someone gets the right answer. 
// call the function which will check your correct answer

//endGame

//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)
