//start game
 function newGame () {

    //if need to reset game

 }


//list words available to guess
    var wordList = ["Superwomen", "Supergirl", "Harley Quinn", "Lois Lane", 
    "Power Girl", "Captain Marvel", "Catwoman", "Black Widow", 
    "She-Hulk", "Elektra", "Mystique", "Hela", "Nebula", 
    "The Femme Fatatles", "Gamora", "Green Lantern", "Invisible Woman"]

//create global array of letters of each word
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// choose random word
// should choose the work
// & should display blanks for that word

    var chooseRandomWord = function(wordList) {       //gets a random choice from and array
        return array[Math.floor(Math.random() * wordList.length)]
}

console.log(chooseRandomWord); 


//create global array of guessed letters//



//function -- to guess letter
// should iterate through the word letters - 
// & to see if it matches a letter in the word - index of letter
// & log the letter guessed
// & display the letter guessed in the correct blank
// & figure out if there are more letters to guess

    document.onkeypress = function(event) {
        var userGuess = event.key;

        if(userGuess === )
    } else {
        guesses--;
    }

    if(guesses = 0) {
        losses++
    }
}
//keep track of right and wrong letters guessed


//set a number of guesses allowed
    
    var guesses = 10;

// track wins and losses

    var wins = 0;
    var losses = 0;

//bonus* play a sound when the user guesses the word correctly


//bonsu* stylish CSS rules to make design that fits game theme


//organize game code as object, except for key events that get to the letter guessed


