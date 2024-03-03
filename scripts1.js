// JavaScript for animating input fields and the fly-in image on My Car's Value page

document.addEventListener('DOMContentLoaded', function() {
  // Animate input fields one by one
  var inputs = document.querySelectorAll('.animated-input');
  inputs.forEach(function(input, index) {
    setTimeout(function() {
      input.style.opacity = 1;
      input.style.transform = 'translateY(0)';
    }, index * 300); // Delay for each input field
  });

  // Fly-in image animation
  var image = document.querySelector('.animated-image');
  setTimeout(function() {
    image.style.left = 'calc(50% - 200px)'; // Adjust as needed for positioning
  }, inputs.length * 300 + 500); // After all inputs have loaded
});

// Functionality for submit button
var submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function() {
  alert('Submitted!'); // Placeholder functionality
});
