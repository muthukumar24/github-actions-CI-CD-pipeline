let count = 0;

// Get the button and count element
const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("count");

// Increase count when the button is clicked
countButton.addEventListener("click", function() {
    count = count + 1;
    countDisplay.textContent = count;
});