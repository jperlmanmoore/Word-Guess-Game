//what are my parts - vars - global b/c outside of a function
var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane", 
    "Power Girl", "Captain Marvel", "Catwoman", "Black Widow", 
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula", 
    "The Femme Fatatles", "Gamora", "Green Lantern", "Invisible Woman", "Thor"];
var currentWord; //what word was random picked
var lettersInWord; //what letters are in the current word
var numSpots = 0; //blank for the current word
var userGuess = []; //what letters the user has guessed
var blanksCorrect = [];  //correct letters go here
var wrongLetters =[0];   //wrong letters
var remainingLetters = letters - userGuess //what letters have not been picked
var wins = 0 //how many wins the player has
var losses = 0 //how many losses the player has
var guessesLeft = 10 //how many guesses the player has left
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //alphabet choices ?? not sure if I need this or not...


//start game - any key selected
function startGame () {
    //click any key

    currentWord = wordList[Math.floor(Math.random() * wordList.length)]; //picks a random word from wordList
    lettersInWord = currentWord.split(""); //.split = split a string into substring - shows how many letters are in the currentWord
    numSpots = lettersInWord.length; //says how many blanks to make
    guessesLeft = 10;  //how many guesses at start
    wrongLetters = []; //how many wrong letters at start
   
    for (var i=0; i < numSpots; i++) { //what goes in the blanks
        blankCorrect.push("_");
}

console.log(currentWord)
console.log(lettersInWord)
console.log(numSpots)
console.log(blanksCorrectLetter)


//capture uer's guess
document.onkeypress = function(event) {
    var userGuess = event.key;

    if (userGuess = lettersInWord) {
        userGuess.push(lettersInWord); //push to user guess array
    } else {    
        guessesLeft -= 1; 
        
    }
}


//function -- to guess letter
// should iterate through the word letters - 
// & to see if it matches a letter in the word - index of letter
// & log the letter guessed
// & display the letter guessed in the correct blank
// & figure out if there are more letters to guess

document.onkeypress = function(event) {
    var userGuess = event.key; 

    if(userGuess ===  lettersInWord) //letter in the randomWord)
 

// var - remaining letters
    var remainingLetters = word.length;





//bonus* play a sound when the user guesses the word correctly


//bonsu* stylish CSS rules to make design that fits game theme

}
}
//organize game code as object, except for key events that get to the letter guessed
