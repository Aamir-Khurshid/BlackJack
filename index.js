let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let playerEl = document.getElementById('player-el');

let player = {
    name: 'Per',
    chips: 200,
}



playerEl.textContent = player.name + ': $' + player.chips;


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        randomCard = 11;
    }
    if (randomCard >= 11) {
        randomCard = 10;
    }
    return (randomCard);
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards= [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = 'Cards:' + ' ';
    for (let count = 0; count < cards.length; count++) {
        cardEl.textContent += cards[count] + ' ';
    }

    sumEl.textContent = 'Sum: ' + sum;
    if (sum <= 20) {
        message = " Do you want to draw another card?";
    }
    else if (sum === 21) {
        message = " Wohoo! You've got Blackjack.";
        hasBlackJack = true;
    }
    else {
        message = " You're out of the game.";
        isAlive = false;

    }

    messageEl.textContent = message;
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }

}
