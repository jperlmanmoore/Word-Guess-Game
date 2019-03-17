var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane",
    "Power Girl", "Captain Marvel", "Catwoman", "Black Widow",
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula",
    "The Femme Fatales", "Gamora", "Green Lantern", "Invisible Woman", "Thor"
];

var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(currentWord);

//if game has not started, when a user has entered a letter, random word is picked and game starts
guessesLeft = 10; //how many guesses at start
//document.getElementById("guessesLeft");

var blankSpaces = [];

function generateUnderscores() {
    for (i = 0; i < currentWord.length; i++) {
        blankSpaces.push("_");
    }
    return blankSpaces;
}
console.log(generateUnderscores());
//document.getElementById("blankspaces");

//guesses  - on event keyup checking guesses with event.key
//document.onkeyup = function (event) {
//var userGuess = event.key;
//}

var correctLetter = [];
var wrongLetter = [];

//determine a guess
document.addEventListener("keypress", (event) => {
    var letter = String.fromCharCode(event.keyCode);
    console.log(currentWord.indexOf(letter));

    //put correct letter is guessed 
    if (currentWord.indexOf(letter) > -1) {
        //put in correct letter array
        correctLetter.push(letter);
        console.log(correctLetter);
       
        //replace underscore
        blankSpaces[currentWord.indexOf(letter)] = letter;
        if(blankSpaces.join("") === currentWord) {
            document.getElementById("winorlose") = "You won!";
        }
    } else {
    
    //put wrong letter in array
    if (letter.indexOf(currentWord) < 0) {
        wrongLetter.push(letter);
        console.log(wrongLetter);
        }
    }
    
})

//bonus* play a sound when the user guesses the word correctly


    //bonus* stylish CSS rules to make design that fits game theme


    //bonus* organize game code as object, except for key events that get to the letter guessed