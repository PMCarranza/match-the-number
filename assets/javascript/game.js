// The purpose of the game is for the user to guess the randomly generated number displayed on the screen, which will be between 19 and 120.

// on page load the number is generated and displayed on the screen.

// the player will then choose a gem, click it and the number contained in the gem will appear on the screen.

// Each clickable option (the gems in this case will have the value of a random number betweeen 1 and 12 every time the game resets and this value will not be displayed until after the click.

// After the number to be guessed is displayed, and the user starts clicking the gems the value of the gems needs to be added to display the sum of the clicks

// if the user guesses the number, the wins counter needs to be increased by 1
// if the user does not guess the number the losses counter increases by 1

// ***** VARIABLES NEEDED  ********

// random number to be guessed
// random values for each gem
// counter for adding each guess

var targetNumber;

var diamondNumber;

var emeraldNumber;

var jeperdesJinGemNumber;

var rubyNumber;

var addGuesses;

var wins;

var losses;


// generate random number to be guessed between 19 - 120

function getTargetNumber (min, max) {
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $('#main').append(targetNumber);

}
getTargetNumber();
console.log(targetNumber);

// populating images 1 by 1

// Diamond
var imageOne = $('<img>');
imageOne.addClass('image');

imageOne.attr('src', 'assets/images/diamond.png');

$('#gems').append(imageOne);

// generating randon number for diamnod
diamondNumber = Math.round(Math.random() * 11)+1;

console.log('this is the # for the diamond ' + diamondNumber);

// Emerald

var imageTwo = $('<img>');
imageTwo.addClass('image');

imageTwo.attr('src', 'assets/images/emerald.png');

$('#gems').append(imageTwo);

// generating randon number for emerald
emeraldNumber = Math.round(Math.random() * 11)+1;

console.log('this is the # for the emerald ' + emeraldNumber);

// JeperdesJinGem

var imageThree = $('<img>');
imageThree.addClass('image');

imageThree.attr('src', 'assets/images/jeperdesJinGem.png');

$('#gems').append(imageThree);

// generating randon number for jeperdesJinGem
jeperdesJinGemNumber = Math.round(Math.random() * 11)+1;

console.log('this is the # for the jeperdesJinGem ' + jeperdesJinGemNumber);

// ruby

var imageFour = $('<img>');
imageFour.addClass('image');

imageFour.attr('src', 'assets/images/ruby.png');

$('#gems').append(imageFour);

// generating randon number for ruby
rubyNumber = Math.round(Math.random() * 11)+1;

console.log('this is the # for the ruby ' + rubyNumber);







// to start populating the gems with for loop

// for (var i = 0; i < 4; i++){
//     var image = $('<img>);
//     image.addClass('image');

//     image.attr('src', 'assets/images')

//     image.attr('precious', jewelsNumber[i]);

//     $('#gems').append(image);
// }





// append number to container



// generate random numbers for the gems between 1 and 12



// append the values of the gems to the container when clicked and add the values



// compare the value of the gem(s) clicked to the number to be guessed


// counter for wins and losses

// restart game with a new random number