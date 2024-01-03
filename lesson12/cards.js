const PLAYTYPES = {
  TIEN_LEN: "Tien Len",
  XI_DACH: "Xi Dach"
};

class CardGame {
  constructor(playType, numberOfPlayers) {
      this.playType = playType;
      this.numberOfPlayers = numberOfPlayers;
      this.maxPlayers = this.getMaxPlayers();
      this.maxCards = this.getMaxCards();
      this.fullCards = this.prepareCards();
      this.players = this.initializePlayers();
      this.pickedCards = [];
  }

  prepareCards() {
      const baseRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
      return baseRanks.flatMap((v) => [v + '♠', v + '♣', v + '♥', v + '♦']);
  }

  getMaxPlayers() {
      throw new Error("getMaxPlayers should be overridden in the child class");
  }

  getMaxCards() {
      throw new Error("getMaxCards should be overridden in the child class");
  }

  initializePlayers() {
      if (this.numberOfPlayers >= 2 && this.numberOfPlayers <= this.maxPlayers) {
          const players = new Array(this.numberOfPlayers);
          for (let i = 0; i < this.numberOfPlayers; i++) {
              players[i] = [];
          }
          return players;
      } else {
          throw new Error(`Number of players must be between 2 and ${this.maxPlayers} for ${this.playType}!`);
      }
  }

  isDividedCompleted() {
      return this.players.every((player) => player.length === this.maxCards);
  }


  divideCards() {
      while (!this.isDividedCompleted()) {
          for (let i = 0; i < this.players.length; i++) {
              let j;
              do {
                  j = Math.floor(Math.random() * this.fullCards.length);
              } while (this.pickedCards.includes(this.fullCards[j]));
              this.players[i].push(this.fullCards[j]);
              this.pickedCards.push(this.fullCards[j]);
          }
      }
      return this.players;
  }

  run() {
      try {
          const result = this.divideCards();
          console.log(JSON.stringify(result));
          return result;
      } catch (error) {
          console.log(`Error in card game: ${error.message}`);
      }
  }
}

class TienLen extends CardGame {
  constructor(numberOfPlayers) {
      super(PLAYTYPES.TIEN_LEN, numberOfPlayers);
  }

  getMaxPlayers() {
      return 4;
  }

  getMaxCards() {
      return 13;
  }
}

class XiDach extends CardGame {
  constructor(numberOfPlayers) {
      super(PLAYTYPES.XI_DACH, numberOfPlayers);
  }

  getMaxPlayers() {
      return 10;
  }

  getMaxCards() {
      return 2;
  }
}

export {TienLen, XiDach};