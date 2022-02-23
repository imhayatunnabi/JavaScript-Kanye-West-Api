// Variables
dice = document.getElementById('dice');
adviceNum = document.getElementById('advice-number');
adviceText = document.querySelector('.advice-text');

// Run the showQuote function when the page is loaded
window.onload = showQuote;

// Eventlistener for dice button
dice.addEventListener('click', function () {
  showQuote();
});

// showQuote function to show random quote from API
function showQuote() {
  fetch('https://api.kanye.rest')
    .then((res) => res.json())
    .then((data) => (adviceText.innerText = data.quote));
}
