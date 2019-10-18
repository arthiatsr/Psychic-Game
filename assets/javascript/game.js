var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessedsofar = " ";
var keypressed = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("Guesses-Left-text");
var userGussedsofartext = document.getElementById("Guessed-sofar-text");


document.onkeyup = function(avent){
    var userGuess = event.key;
    var computerGuess = Math.floor(Math.random()*9+1);

    if(userGuess == computerGuess){
        wins++;   
        guessedsofar = " ";
        guessesleft = 9;  
        
    }else if (guessesleft >1 ) {
        
        guessesleft--;
        guessedsofar = guessedsofar + " " +userGuess;
    } else {
        losses++;
        guessedsofar = " ";
        guessesleft = 9; 
    }
    
    directionsText.textContent = "";
    winsText.textContent = wins;
    lossesText.textContent = losses;  
    userGussedsofartext.textContent = guessedsofar;  
    guessesleftText.textContent = guessesleft;      
} 
 


