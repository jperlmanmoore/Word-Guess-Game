//what are my parts - vars - global b/c outside of a function
var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane",
    "Power Girl", "Captain Marvel", "Catwoman", "Black Widow",
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula",
    "The Femme Fatales", "Gamora", "Green Lantern", "Invisible Woman", "Thor"
];
var blankSpaces = "_"
var currentWord; //what word was random picked
var lettersInWord; //what letters are in the current word
var userGuess = []; //what letters the user has guessed
var blankCorrect = []; //correct letters go here
var wrongLetters = []; //wrong letters
var wins = 0 //how many wins the player has
var losses = 0 //how many losses the player has
var guessesLeft = 10 //how many guesses the player has left
var remainingLetters = userGuess //what letters have not been picked 
var alphabetArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

//if game has not started, when a user has entered a letter, random word is picked and game starts

//if current word is null start a game & pick a work, otherwise check guesses & only in that condition

currentWord = wordList[Math.floor(Math.random() * wordList.length)]; //picks a random word from wordList
lettersInWord = currentWord.split(""); //.split = split a string into substring - shows how many letters are in the currentWord
blankSpaces = lettersInWord.length; //says how many blanks to make
for (var i = 0; i < lettersInWord; i++) { //loop to determine how many letters
    blankSpaces.push("_"); //creates blanks
}
guessesLeft = 10; //how many guesses at start
wrongLetters = []; //how many wrong letters



console.log(blankSpaces)
console.log(currentWord)
console.log(lettersInWord)
console.log(blankCorrect)

//guesses  - on event keyup checking guesses with event.key
function checkGuesses(letter) { //you can name function anything you want
    var lettersInWord = false; //see if letter is in the current word
    for (var i = 0; i < blankSpaces; i++) { //if currentWord = letter entered, then :)
        if (currentWord[i] == letter) {
            lettersInWord = true;
            guessesLeft--; //guess has been used
        }
    }
    if (lettersInWord) { //does guessed letter match word?
        for (var i = 0; i < blankSpaces; i++) {
            if (currentWord[i] == letter) {
                blankCorrect[i] = letter;
            }
        }
console.log(blankCorrect);
    } else { //if wrong letter guesses, then :(
        wrongLetters.push(wrongletters); //put wrong letter in space wehre it should go ???
        guessesLeft--; //guess has been used
    }
}
console.log(wrongLetters);


///get results in page! :)

//startover if player wins or looses
//function reset() {
    //guessesLeft = 10;
    //wrongLetters = [];
    //blankSpaces = [];
    //startGame();
//}

//start game - any key selected

//document.onkeyup = function (event) {
    //console.log(event.key);
//}

function initializeGame () {
    currentWord = "";
    guessesLeft = 10;
    wrongLetters = [];
    blankSpaces = [];
    
    $("#currentWord, #guessesLeft, #wrongLetters, #blankSpaces").empty();
  }

//bonus* play a sound when the user guesses the word correctly


//bonus* stylish CSS rules to make design that fits game theme


//bonus* organize game code as object, except for key events that get to the letter guessed
