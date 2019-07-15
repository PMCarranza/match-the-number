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

// var diamondNumber;

// var emeraldNumber;

// var jeperdesJinGemNumber;

// var rubyNumber;

var addGuesses=0;

var wins=0;

var losses=0;

// start \ reset function

var create = function () {

    // generate random number to be guessed between 19 - 120

    function getTargetNumber(min, max) {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        $('#to-guess').append(targetNumber);

    }
    getTargetNumber();
    // console.log(targetNumber);

    // generating random numbers and assigning them to the images

    for (var i = 0; i < 4; i++) {

        addGuesses = 0;

        $('#user-guess').empty();

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

        console.log('wins = ' + wins);
        $('#gems').empty();
        $('#to-guess').empty();
        $('.wins').empty();
        $('.wins').append('Your wins are ' + wins);
        create();
    } else if (addGuesses > targetNumber) {
        losses++;
        $('#user-guess').css({ 'color': 'red' });
        console.log('losses = ' + losses);
        $('#gems').empty();
        $('#to-guess').empty();
        $('.defeat').empty();
        $('.defeat').append('Your losses are ' + losses);
        create();
    }


    // ***********THESE DO NOT ADD A NEW

    // displaying wis and losses
    // var victory = $('<div>');
    // victory.addClass('wins');
    // victory.attr('wins', wins);
    // $('#wins-losses').append(wins);



    // var defeats = $('<div>');
    // defeats.addClass('defeats');
    // defeats.attr('defeats', losses);
    // $('#wins-losses').append(losses);


});

// ************THIS DID NOT WORK FOR ADDING DIV

// var victory = $('<div>');
// victory.addClass('wins');
// // victory.attr('wins', wins);
// $('#wins-losses').append('<div>');






// restart game with a new random number