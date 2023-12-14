// function isDivideCompleted(players) {
//   return players.reduce((a, v) => a && v.length === 13, true);
// }

// function divideCards(numberOfPlayers) {
//   if (Number.isSafeInteger(numberOfPlayers) && numberOfPlayers >= 2 && numberOfPlayers <= 4) {
//     const baseCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//     const fullCards = baseCards.flatMap(v => [v + "♥", v + "♦", v + "♣", v + "♠"]);
//     const players = new Array(numberOfPlayers);
//     for (let i = 0; i < numberOfPlayers; i++) {
//       players[i] = [];
//     }
//     const pickedCards = [];
//     while (!isDivideCompleted(players)) {
//       for (let i = 0; i < players.length; i++) {
//         let j;
//         do {
//           j = Math.floor(Math.random() * fullCards.length);
//         } while (pickedCards.includes(fullCards[j]));
//         players[i].push(fullCards[j]);
//         pickedCards.push(fullCards[j]);
//       }
//     }
//     return players;
//   } else {
//     throw new Error("Invalid number of players!");
//   }
// }

// console.log(JSON.stringify(divideCards(4)));

function clock(seconds, callback) {
  callback(seconds);
}

async function countUp(seconds) {
  for (let i = 0; i < seconds; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Count up " + (i + 1));
  }
}

async function countDown(seconds) {
  for (let i = seconds; i >0; i--) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Count down " + i);
  }
}

clock(5, countUp);
clock(5, countDown);
