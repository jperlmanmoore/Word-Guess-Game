var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane",     "Power Girl", "Captain Marvel", "Catwoman", "Black Widow",
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula", "The Femme Fatales", "Gamora", "Green Lantern", "Invisible Woman", "Thor"];
var currentWord = ""; //the current word that was randomly generated from the wordList
var guessesLeft = 10; //users guesses
var gameMode = "not-started"; // not-started, started, ended - possible game states
var correctLetter = []; //array for correct guesses
var wrongLetter = []; //array for wrong guesses
var blankSpaces = []; //blanks that display how many letters in current word

//make underscore placeholders for letters in current word
function generateUnderscores() {
    for (i = 0; i < currentWord.length; i++) {
        blankSpaces.push("_");
    }
    return blankSpaces;
}

//determine a guess with eventListener
document.addEventListener("keypress", (event) => {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("letter = '" + letter + "'");

    //THINGS TO BE FIXED:
    //when game starts *unfortunately the blank tiles don't show until a correct letter is fixed, with more time I would correct this.
    //*the blank space in two word letters counts as a guess, whcih I could correct.
    //*is a space is one of the blanks in the array, the use must click space ot fill it and win, wihch I would correct
    //*it counts the same letter guessed against guesses left
    //*doesn't show solution upon loosing
    
    //at start of game
    if (gameMode === "not-started") {
        gameMode = "started";
        document.getElementById("presstostart").style.display = "none"; //when started the "press to start" goes away
        guessesLeft = 12; //how many guesses left at start
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        currentWord = wordList[Math.floor(Math.random() * wordList.length)]; //generates randome word
        console.log(currentWord);
        blankSpaces = []; //array for how many blank spaces are in the chosen word
        document.getElementById("blankSpaces").innerHTML = blankSpaces.join("");
        console.log(generateUnderscores());
        wrongLetter = []; //array for wrong guesses
        document.getElementById("wrongLetter").innerHTML = "";
        document.getElementById("winorlose").innerHTML = "";

    } else if (gameMode === "started") {
    
        if (currentWord.toLowerCase().indexOf(letter) > -1) {
            correctLetter.push(letter); //put in correct letter array
            console.log("correctLetter:");
            console.log(correctLetter);
            fillInLetters(blankSpaces, currentWord, letter); //replace underscore
            console.log("blankSpaces:");
            console.log(blankSpaces);
            document.getElementById("blankSpaces").innerHTML = blankSpaces.join("");

            if (blankSpaces.join("") === currentWord) {
                document.getElementById("winorlose").innerHTML = "You won!";  //display if win
                document.getElementById("presstostart").style.display = ""; //show "press to start b/c game is over"
                gameMode = "not-started";
            }

        } else {
            wrongLetter.push(letter); //put wrong letter in array
            document.getElementById("wrongLetter").innerHTML = wrongLetter;
            console.log(wrongLetter);
        }

        
        guessesLeft--; //how may guesses left
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        
        if (guessesLeft <= 0) { //when win or out of guesses & lose, then game is not started & show "press to start"
            document.getElementById("winorlose").innerHTML = "You Lost!";
            document.getElementById("presstostart").style.display = ""
            gameMode = "not-started"; 
        }
    }

});

function fillInLetters(blankSpaces, currentWord, letter) {  
    for (var i = 0; i < blankSpaces.length; i++) { //loop to look for where the guess needs to go & chnage to lower case
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