// Implement an ordered deck function that generates an array of cards in order from A-K for each suit:
// hearts, clubs, spades, and diamonds. Then implement a function that returns a completely randomized
// deck. Do not use a biased shuffle algorithm.

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var shuffleDeck = function(deck) {
  var shuffledDeck = [];
  
  while(deck.length) {
    var index = Math.floor(Math.random() * deck.length);
    var card = deck.splice(index,1);
    shuffledDeck.push(card[0]);
  }

  return shuffledDeck;
}
