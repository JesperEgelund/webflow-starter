$(document).ready(function() {
    $('.toggle_component').on('click', function() {
        $('body').toggleClass('dark-mode');
        $('.toggle_component').toggleClass('is-on');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button and page wrapper elements
    var colorModeBtn = document.getElementById('colorModeBtn');
    var body = document.querySelector('body');

    // Add a click event listener to the button
    colorModeBtn.addEventListener('click', function () {
      // Get the current value of the "color-mode" attribute
      var currentMode = body.getAttribute('color-mode');

      // Toggle between "light" and "dark"
      var newMode = currentMode === 'dark' ? 'light' : 'dark';

      // Update the "color-mode" attribute with the new value
      body.setAttribute('color-mode', newMode);
    });
  });

console.log("Hello there!");