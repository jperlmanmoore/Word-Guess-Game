var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane",
    "Power Girl", "Captain Marvel", "Catwoman", "Black Widow",
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula",
    "The Femme Fatales", "Gamora", "Green Lantern", "Invisible Woman", "Thor"
];
var currentWord = "";

//if game has not started, when a user has entered a letter, random word is picked and game starts
//how many at start
var guessesLeft = 10;
var gameMode = "not-started"; // not-started, started, ended 
// guesses need to get lower after each guess
//document.getElementById("guessesLeft"); - display how many guesess left

var blankSpaces = [];

function generateUnderscores() {
    for (i = 0; i < currentWord.length; i++) {
        blankSpaces.push("_");
    }
    return blankSpaces;
}
//console.log(generateUnderscores());
//need to show blanks on page

//guesses  - on event keyup checking guesses with event.key
//document.onkeyup = function (event) {
//var userGuess = event.key;
//}

var correctLetter = [];
var wrongLetter = [];

//determine a guess
document.addEventListener("keypress", (event) => {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("letter = '" + letter + "'");

    if(gameMode === "not-started") {
        gameMode = "started";
        guessesLeft = 10;
        currentWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(currentWord);
        blankSpaces = [];
        console.log(generateUnderscores());
    }
    else if(gameMode === "started") {
        //put correct letter is guessed 
        if (currentWord.toLowerCase().indexOf(letter) > -1) {
            //put in correct letter array
            correctLetter.push(letter);
            console.log("correctLetter:");
            console.log(correctLetter);
        
            //replace underscore
            //blankSpaces[currentWord.indexOf(letter)] = letter;
            fillInLetters(blankSpaces, currentWord, letter);
            console.log("blankSpaces:");
            console.log(blankSpaces);

            if(blankSpaces.join("") === currentWord) {
                //display if win or lose
                document.getElementById("winorlose").innerHTML = "You won!";
                gameMode = "ended";
            }
            //look for if second time letter is in same string, then got to wrongLetter
        
        } else {
        
        //put wrong letter in array
        if (currentWord.indexOf(letter) < 0) {
            wrongLetter.push(letter);
            console.log(wrongLetter);
            }
        }

        guessesLeft--;
        if(guessesLeft <= 0) {
            document.getElementById("winorlose").innerHTML = "You Lost!";
            gameMode = "ended";
        }
    }
    else if(gameMode === "ended") {

    }
})

//if run out of guesses, then you lose

//bonus* play a sound when the user guesses the word correctly


    //bonus* stylish CSS rules to make design that fits game theme


    //bonus* organize game code as object, except for key events that get to the letter guessed


    function fillInLetters(blankSpaces, currentWord, letter) {
        for(var i = 0; i < blankSpaces.length; i++)
        {
            var l = currentWord[i].toLowerCase();
            var letterLower = letter.toLowerCase();
            if (l === letterLower)
            {
                blankSpaces[i] = currentWord[i];
            }
        }
    }