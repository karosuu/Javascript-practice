const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
// if the variable is diferent to 'spade' will select a random number and print to console
while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


