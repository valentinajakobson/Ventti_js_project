var player1 = 0;
var player2 = 0;
var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

var j, x, i;
for (i = cards.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  x = cards[i];
  cards[i] = cards[j];
  cards[j] = x;
}
console.log(cards);