class Player {
  constructor(name) {
    this.name = name,
    this.bankroll = 100,
    this.hand = [],
    this.totalScore = 0
  }
}

class House {
  constructor() {
    this.bankroll = 10000,
    this.hand = [],
    this.totalScore = 0
  }
}

class Card {
  constructor(value) {
    this.value = value
  }
}

const checkWinner = (playerValue, houseValue) => {
  if(playerValue > houseValue) {
    return 'player';
  } else if (houseValue > playerValue) {
    return 'house'
  } else {
    return 'tie'
  }
}

deck = [];

for (let i = 0; i < 4; i++) {
  for (let j = 2; j < 10; j++) {
    deck.push(new Card(j));
  }
  for (let k = 0; k < 4; k++) {
    deck.push(new Card(10));
  }
  deck.push(new Card(11));
}
console.log(deck);