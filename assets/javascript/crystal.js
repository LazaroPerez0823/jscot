window.onload = function() {

var wins = 0;
var loses = 0;
var totalScore = 0;
var one;
var two;
var three;
var four;
var goalNumber;




function gameReset() {

function getRandomInt(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + min    //The maximum is exclusive and the minimum is inclusive
  };
  
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






gameReset();


console.log("value of one = " + one);
console.log("value of two = " + two);
console.log("value of three = " + three);
console.log("value of four = " + four);
console.log("This is the Goal Number: " + goalNumber);


$("#crystal1").on("click", function() {
    totalScore = totalScore + one;
    $("#totalScoreText").text(totalScore);
    console.log("Total Score is now: " + totalScore);
    setTimeout(function(){
        checkScore();
    }, 100);
     });


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