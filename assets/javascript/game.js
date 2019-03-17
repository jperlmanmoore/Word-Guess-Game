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
        document.getElementById("blankSpaces").innerHTML = blankSpaces;
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
            document.getElementById("blankSpaces").innerHTML = blankSpaces;

            if(blankSpaces.join("") === currentWord) {
                //display if win or lose
                document.getElementById("winorlose").innerHTML = "You won!";
                gameMode = "ended";
            }
        
        } else {
            //put wrong letter in array
            wrongLetter.push(letter);
            document.getElementById("wrongLetter").innerHTML = wrongLetter;
            console.log(wrongLetter);
        }

        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        if(guessesLeft <= 0) {
            document.getElementById("winorlose").innerHTML = "You Lost!";
            gameMode = "ended";
        }
    }
    else if(gameMode === "ended") {

    }
});

//if run out of guesses, then you lose

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

    //bonus* play a sound when the user guesses the word correctly


    //bonus* stylish CSS rules to make design that fits game theme


    //bonus* organize game code as object, except for key events that get to the letter guessed
