window.onload = function() {


//declaring variables
var wins = 0;
var loses = 0;
var totalScore = 0;
var one;
var two;
var three;
var four;
var goalNumber;


//game reset function.  Loads on page load as well as at the end of each game.

function gameReset() {

function getRandomInt(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + min    //The maximum is exclusive and the minimum is inclusive
  };
  

  //added a little extra here for two.  It goes up to 13 instead of 12... wanted to add some humor =)
function crystalValues() {
    one = Math.floor(Math.random() * 12 + 1)
    two = Math.floor(Math.random() * 13 + 1)
    three = Math.floor(Math.random() * 12 + 1)
    four = Math.floor(Math.random() * 12 + 1)

}

goalNumber = getRandomInt();
totalScore = 0;
$("#goal").text(goalNumber);
$("#totalScoreText").text(totalScore);
getRandomInt();
crystalValues();

}

//calling the reset function for when the page loads
gameReset();

//these are here for testing and in case they help you for grading.

console.log("value of one = " + one);
console.log("value of two = " + two);
console.log("value of three = " + three);
console.log("value of four = " + four);
console.log("This is the Goal Number: " + goalNumber);

//each button (crystal) has it's onn function

$("#crystal1").on("click", function() {
    totalScore = totalScore + one;
    $("#totalScoreText").text(totalScore);
    console.log("Total Score is now: " + totalScore);
    // I put the check score function inside a function with a slight delay.  What was happening without
    //this was that the page would tell you that you won or lost but the score wouldn't update before the alert.
    setTimeout(function(){
        checkScore();
    }, 100);
     });

//added a little extra to this one.
  $("#crystal2" ).click(function() {
    totalScore = totalScore + two;
    $("#totalScoreText").text(totalScore);
    console.log("Total Score is now: " + totalScore);
    setTimeout(function(){
        checkScore();
    }, 100);
    if (two === 13) {
alert("You have picked up an African Blood Diamond.  The FBI is on it's way you your house. People on social media are already talking about you.  Game Over")
gameReset();

    }
  });


  $("#crystal3" ).click(function() {
    totalScore = totalScore + three;
    $("#totalScoreText").text(totalScore);
    console.log("Total Score is now: " + totalScore);
    setTimeout(function(){
        checkScore();
    }, 100);
  });

  $("#crystal4" ).click(function() {
    totalScore = totalScore + four;
    $("#totalScoreText").text(totalScore);
    console.log("Total Score is now: " + totalScore);
    setTimeout(function(){
        checkScore();
    }, 100);
  });


//check score function is declared on each button.  This will check if you won or lost, update the game and run the reset script.

function checkScore() {

  if (totalScore === goalNumber) {

    wins++
    $("#wins").text(wins);
    alert("You win");
    gameReset();
  }

else if (totalScore > goalNumber) {
    loses++
    $("#loses").text(loses);
    alert("You Lost");
    gameReset();
  }
}







}