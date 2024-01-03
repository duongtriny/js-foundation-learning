import { XiDach, TienLen } from "./cards.js";
const RULES = {
  "tienlen": {
    default: 2,
    min: 2,
    max: 4,
    type: TienLen
  },
  "xidach": {
    default: 2,
    min: 2,
    max: 10,
    type: XiDach
  }
}

document.forms.gameInfo.onsubmit = async (event) => {
  event.preventDefault();
  let submittedData = new FormData(document.forms.gameInfo);
  let data = [...submittedData.entries()];
  let dataObj = {};
  for (const entry of data) {
    let [key, value] = entry;
    dataObj[key] = value;
  }
  let game = new RULES[dataObj.gameType].type(dataObj.numberOfPlayer);
  let deck = game.divideCards();
  let playersArea = createGameArea(game.numberOfPlayers);
  for (let i = 0; i < game.maxCards; i++) {
    for(let j = 0; j< game.numberOfPlayers; j++){
      let cardElement = document.createElement("div");
      cardElement.className = "text-4xl font-black text-rose-500 dark:text-white text-center m-2";
      cardElement.classList.add("card");
      cardElement.textContent = deck[j][i];
      playersArea[j].appendChild(cardElement);
      await new Promise((resolver)=>{setTimeout(resolver,200)});
    }
  }
}

function createGameArea(numberOfPlayers) {
  let gameAreaElement = document.getElementById("gameArea");
  gameAreaElement.classList.add(`grid-rows-${numberOfPlayers+1}`);
  gameAreaElement.replaceChildren([]);
  let players = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    let playerNode = document.createElement("div");
    let playerName = document.createElement("div");
    playerName.textContent = `Player ${i+1}`;
    playerName.className = "text-4xl font-black text-gray-900 dark:text-white text-pink-500";
    playerNode.appendChild(playerName);
    let playerCards = document.createElement("div");
    playerCards.classList.add("flex", "flex-wrap");
    playerNode.appendChild(playerCards);
    gameAreaElement.appendChild(playerNode);
    players.push(playerCards);
  }
  return players;
}

document.getElementById("gameType").onchange = (event) => {
  let currentValue = event.target.value;
  let numberOfPlayerElement = document.getElementById("numberOfPlayer");
  numberOfPlayerElement.min = RULES[currentValue].min;
  numberOfPlayerElement.max = RULES[currentValue].max;
  numberOfPlayerElement.value = RULES[currentValue].default;
}