// The purpose of the game is to provide the user a multiple choice selection to guess the random number displayed in the screen which will be between 19 and 120.

// Each clickable option (the gems in this case ) will have the value of a random number betweeen 1 and 12 every time the game resets and this value will not be displayed until after the click.

// After the number to be guessed is displayed, and the user starts clicking the gems the value of the gems needs to be added to display the sum of the clicks

// if the user guesses the number, the wins counter needs to be increased by 1
// if the user does not guess the number the losses counter increases by 1

// ***** VARIABLES NEEDED  ********

// random number to be guessed
// random values for each gem
// counter for adding each guess

var targetNumber;

var numberOptions = [];

var addGuesses;

var wins;

var losses;

// generate random number to be guessed between 19 - 120

// targetNumber = Math.floor(Math.random() * 19) + 120;
// console.log(targetNumber);

function getTargetNumber (min, max) {
    targetNumber= Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
getTargetNumber();
console.log(targetNumber);




// append number to container



// generate random numbers for the gems between 1 and 12



// append the values of the gems to the container when clicked and add the values



// compare the value of the gem(s) clicked to the number to be guessed


// counter for wins and losses

// restart game with a new random number