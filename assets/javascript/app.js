
//set Interval Demonstration 
// var number = 30 
// //set Array of Questions
// var triviaQuestions = [A, B, C, D]
// var triviaAnswers = 

// //  Interval Demonstration
//     //  Set our number counter to 100.
//     var number = 100;

//     //  Variable that will hold our interval ID when we execute
//     //  the "run" function
//     var intervalId;

//     //  When the stop button gets clicked, run the stop function.
//     $("#stop").on("click", stop);

//     //  When the resume button gets clicked, execute the run function.
//     $("#resume").on("click", run);

//     //  The run function sets an interval
//     //  that runs the decrement function once a second.
//     //  *****BUG FIX******** 
//     //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
//     function run() {
//       clearInterval(intervalId);
//       intervalId = setInterval(decrement, 1000);
//     }

//     //  The decrement function.
//     function decrement() {

//       //  Decrease number by one.
//       number--;

//       //  Show the number in the #show-number tag.
//       $("#show-number").html("<h2>" + number + "</h2>");


//       //  Once number hits zero...
//       if (number === 0) {

//         //  ...run the stop function.
//         stop();

//         //  Alert the user that time is up.
//         alert("Time Up!");
//       }
//     }

//     //  The stop function
//     function stop() {

//       //  Clears our intervalId
//       //  We just pass the name of the interval
//       //  to the clearInterval function.
//       clearInterval(intervalId);
//     }

//     //  Execute the run function.
//     run();

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
//  Interval Demonstration: Set our number counter to 30.
var intervalCounter = 30;
//  Variable that will hold our interval ID when we execute run function
var intervalID;
var triviaQuestions = [A, B, C, D]


// START SCREEN

// CREATE START BUTTON to start game.
$("#gameStart").html("<button>" + "START" + "</button>");
   
// when START button gets clicked, function sets an interval that runs the decrement function once a second.
// Clear intervalId prior to setting our new intervalId will not allow multiple instances.
//Show the seconds remaining in #timeRemaining div
$("button").on("click", run(){
});

function run {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        number--;
    $("#timeRemaining").html("<h2>" + number + "</h2>")
    }


    
    
        
             




// Create START BUTTON. On click, loads next page.
// function resetGame 
//    1. correct answers = 0;
//    2. incorrect answers = 0; 
//    3. setTimeOut for game 
//    4. setTimeOut for reloading next page
//    5. setTimeInterval for each questions
//    6. array of questions
          
// PLAY GAME
// function play game
// 1. Play game is true
// Time DIV
// 1. Decrement Time Remaining from 30 seconds for this question
//     a. show time remainingin #timeRemaining div
//     b. player must answer question within allotted time (30 seconds)
        //setTimeInterval to 30 seconds
//     c. at timeRemaining === 0, 
//         1. run stop function to clear intervalId.
//      function stop() {
    //       clearInterval(intervalId);
// replace TQ with new message: "Out of Time"
//             $("#timeRemaining").text("Out of Time");
//         2. replace possible choices with correct answer
//             $("#possibleChoices").text("possibleChoices[index]");

//  question loads WITHOUT any user input
//         1. When Time Remaining === 0, 
//  Trivia Question
// 1. Display Trivia question from array of questions.


// Possible Choices
// 1. Click choice will replace trivia question with message AND
//     a. replace choice with correct answer AND image of correct answer.
//     b. show possible choices for question

// RELOAD NEXT PAGE
    // setTimeOut = 5 seconds

    //END GAME
// // At end of game, screen showing 
// 1. Time remaining (setTimeOut)
// 2. Number of correct answers: 
// 3. Number of incorrect answers
// 4. Start Over? Button to reset Game

// END game
1. 

