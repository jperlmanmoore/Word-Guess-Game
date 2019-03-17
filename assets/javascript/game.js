var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane",
    "Power Girl", "Captain Marvel", "Catwoman", "Black Widow",
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula",
    "The Femme Fatales", "Gamora", "Green Lantern", "Invisible Woman", "Thor"
];
var currentWord = "";
var guessesLeft = 10;
var gameMode = "not-started"; // not-started, started, ended 
var correctLetter = [];
var wrongLetter = [];
var blankSpaces = [];

//make underscore placeholders for letters in current word
function generateUnderscores() {
    for (i = 0; i < currentWord.length; i++) {
        blankSpaces.push("_");
    }
    return blankSpaces;
}

//determine a guess
document.addEventListener("keypress", (event) => {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("letter = '" + letter + "'");

    //at start of game
    //when game starts *unfortunately the blank tiles don't show until a correct letter is fixed, with more time I would correct this.
    //*also the blank space in two word letters counts as a guess, whcih I could correct.
    if (gameMode === "not-started") {
        gameMode = "started";
        guessesLeft = 12;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        currentWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(currentWord);
        blankSpaces = [];
        document.getElementById("blankSpaces").innerHTML = blankSpaces.join("");
        wrongLetter = [];
        console.log(generateUnderscores());
        document.getElementById("presstostart").style.display = "none";
        document.getElementById("winorlose").innerHTML = "";
        document.getElementById("wrongLetter").innerHTML = "";

    
    } else if (gameMode === "started") {
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
            document.getElementById("blankSpaces").innerHTML = blankSpaces.join("");

            if (blankSpaces.join("") === currentWord) {
                //display if win or lose
                document.getElementById("winorlose").innerHTML = "You won!";
                document.getElementById("presstostart").style.display = "";
                gameMode = "not-started";
            }

        } else {
            //put wrong letter in array
            wrongLetter.push(letter);
            document.getElementById("wrongLetter").innerHTML = wrongLetter;
            console.log(wrongLetter);
        }

        //how may guesses left
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        //win or lose & show press to start again
        if (guessesLeft <= 0) {
            document.getElementById("winorlose").innerHTML = "You Lost!";
            document.getElementById("presstostart").style.display = ""
            gameMode = "not-started";
        }
    }

});

//if run out of guesses, then you lose

function fillInLetters(blankSpaces, currentWord, letter) {
    for (var i = 0; i < blankSpaces.length; i++) {
        var l = currentWord[i].toLowerCase();
        var letterLower = letter.toLowerCase();
        if (l === letterLower) {
            blankSpaces[i] = currentWord[i];
        }
    }
}

//bonus* play a sound when the user guesses the word correctly


//bonus* stylish CSS rules to make design that fits game theme


//bonus* organize game code as object, except for key events that get to the letter guessed