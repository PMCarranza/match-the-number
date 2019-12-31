// The purpose of the game is for the user to guess the randomly generated number displayed on the screen, which will be between 19 and 120.

// on page load the number is generated and displayed on the screen.

// the player will then choose a gem, click it and the number contained in the gem will appear on the screen.

// Each clickable option (the gems in this case will have the value of a random number betweeen 1 and 12 every time the game resets and this value will not be displayed until after the click.

// After the number to be guessed is displayed, and the user starts clicking the gems the value of the gems needs to be added to display the sum of the clicks

// if the user guesses the number, the wins counter needs to be increased by 1
// if the user does not guess the number the losses counter increases by 1

// ***** VARIABLES NEEDED  ********

// random number to be guessed
// counter for adding each guess

var targetNumber;

var addGuesses=0;

var wins=0;

var losses = 0;

var intervalId;

// start \ reset function

var create = function () {

    
    // generate random number to be guessed between 19 - 120

    function getTargetNumber(min, max) {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        $('#to-guess').append(targetNumber);

    }
    getTargetNumber();
    // console.log(targetNumber);

    // generating random numbers and assigning them to the images using a for loop

    for (var i = 0; i < 4; i++) {

        addGuesses = 0;

        // $('#user-guess').empty();

        gemNumber = Math.round(Math.random() * 11) + 1;
        // console.log('value of clicked gem is ' + gemNumber);

        var gem = $('<img>');
        gem.addClass('image');
        gem.attr('src', 'assets/images/precious' + [i] + '.png');
        gem.attr('user-guess', gemNumber);
        $('#gems').append(gem);
    }
}
create();

// getting the value from the images on click and passing it to the guess div

$(document).on('click', '.image', function () {
    $('#user-guess').empty();
    $('#user-guess').css({ 'color': 'green' });
    var gemValueNumber = ($(this).attr('user-guess'));

    // converting the value to an integer
    gemValueNumber = parseInt(gemValueNumber);

    // passing numeric value to variable

    addGuesses += gemValueNumber;
    // console.log('var addGuesses is a ' + typeof);
    // console.log('the total value of the clicks is ' + addGuesses)
    console.log('the sum of clicks is == ' + addGuesses);

// compare the value of the gem(s) clicked to the number to be guessed
    $('#user-guess').append(addGuesses);

// counter for wins and losses and increasing the one that matches
    if (addGuesses === targetNumber) {
        wins++;
        $('#user-guess').css({ 'color': 'blue' });

        // console.log('wins = ' + wins);
        $('#gems').empty();
        $('#to-guess').empty();
        $('.wins').empty();
        $('.wins').append('You got this!');
        reStart();
    } else if (addGuesses > targetNumber) {
        losses++;
        $('#user-guess').css({ 'color': 'red' });
        // console.log('losses = ' + losses);
        $('#gems').empty();
        $('#to-guess').empty();
        $('.defeat').empty();
        $('.defeat').append('Bummer ={   ' + '  this one goes to the House');
        reStart();
    }
});

// countdown to restart the game

function run() {
    clearInterval(intervalId);
    seconds = 4;
    intervalId = setInterval(countDown, 1000);
};

function reStart() {
    clearInterval(intervalId);
    setTimeout(function(){
        location.reload();
    }, 4000);
};