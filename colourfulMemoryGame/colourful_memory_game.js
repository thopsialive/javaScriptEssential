// Step 5: Defining variables to access data
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// DOM element selection
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container'); // where cards willbe displayed
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Step 6: Create and call functions to start the game
function generateCards() {
    // It utilizes a 'for…of' loop to iterate over each element (color) in the 'cards' array.
    for (const color of cards) { // color is element of cards
        const card = document.createElement('div'); // <div></div>
        card.classList.add('card'); // <div class='card'></div>
        card.dataset.color = color; //<div class='card' data-color='${color}'></div>
        card.textContent = '?'; //<div class='card' data-color='${color}'>?</div>
        gameContainer.appendChild(card);
    }
}

function shuffle(array) { //Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) { //iterates backward through the array starting from the last index
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    const card = event.target; // retrieves the element that triggered the event (in this case, a clicked card).
    // checks whether the clicked element is a card and if it's already matched
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// evaluates whether the two selected cards match each other in the memory match game.
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

// this function manages the game timer, updating the displayed time and handling the end of the game when the timer reaches zero. 
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => { // Initiates an interval that triggers a function every second (1000 milliseconds) to update the timer.
        timeLeft--; // countdown, decrements 'timeLeft' every second
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000); // 1000milliseconds = 1second
}

startbtn.addEventListener('click', startGame);