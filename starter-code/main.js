console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo === cardFour) {
	alert("You found a match!")
} else if {
	alert("Sorry, try again.")
} 
*/




function createCards () {
 
var boardDiv = document.getElementById("game-board");
 
var cards = 4;

for(var i = 0; i < cards; i++){ 
       var myDiv = document.createElement("div");
       myDiv.className = "card";
       boardDiv.appendChild(myDiv);
  
   }

}

createCards();