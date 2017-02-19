// Setting the timer start
var start = new Date().getTime();

// Randomising the colours
function getRandomColour() {
  var letters = '0123456789ABCDEF'.split('');
  var colour = '#';
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

// Randomising the size and shape.
function makeShapeAppear() {

  // randomising the size
  var top = Math.random() * 400;
  var left = Math.random() * 400;
  var width = (Math.random() * 200) + 100;

  // Giving circles for half the time.
  if (Math.random() > 0.5) {
    document.getElementById('shape').style.borderRadius = '50%';
  } else {
    document.getElementById('shape').style.borderRadius = '0';
  }

  // implimenting the random colour function
  document.getElementById('shape').style.backgroundColor = getRandomColour();

  // implimenting the random shapes
  document.getElementById('shape').style.top = top + 'px';
  document.getElementById('shape').style.left = left + 'px';
  document.getElementById('shape').style.width = width + 'px';
  document.getElementById('shape').style.height = width + 'px';
  document.getElementById('shape').style.display = 'block';

  // starting a new time
  start = new Date().getTime();
}

// randomising how often quickly the shape appears
function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}


// implementing the appearance function.
appearAfterDelay();



// So that the time will start and finish when the shape is clicked on
document.getElementById('shape').onclick = function() {

  document.getElementById('shape').style.display = 'none';

  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;

  document.getElementById('timeTaken').innerHTML = timeTaken + 's';

  appearAfterDelay();

}
