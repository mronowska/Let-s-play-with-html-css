$(function() {

//Click the GO button
$('#go').click(function() {

  //build a function that checks to see if a car has won the race
  function checkIfComplete() {

    if (isComplete == false) {
      isComplete = true;
    } else {
      place = 'second';
    }
  }

  //get the width of the car
  var carWidth = $('#car1').width();

  //get the width of the racetrack
  var raceTrackWidth = $(window).width() - carWidth;

  //generate a random # between 1 and 5000
  var raceTime1 = Math.floor( (Math.random() * 5000)+1);
  var raceTime2 = Math.floor( (Math.random() * 5000)+1);

  //set a flag variable to FALSE by default
  var isComplete = false;

  // set a flag variable to FIRST by default
  var place = 'first';

  //animate car1
  $('#car1').animate({

    left: raceTrackWidth

  }, raceTime1, function() {

    //animation is Complete

    //run a function
    checkIfComplete();

    //text feedback
    $('#raceInfo1 span').text( 'Finished in ' + place + 'place and clocked in at ' + raceTime1 + 'miliseconds!!' );

  });

  //animate car2
  $('#car2').animate({

    left: raceTrackWidth
  }, raceTime2, function() {

    //animation is Complete

    //run a function
    checkIfComplete();

    //text feedback
    $('#raceInfo2 span').text( 'Finished in ' + place + 'place and clocked in at ' + raceTime2 + 'miliseconds!!' );

  });


});

//reset the race
$('#reset').click(function () {
  $('.car').css('left','0');
  $('.raceInfo span').text('');
});

});
