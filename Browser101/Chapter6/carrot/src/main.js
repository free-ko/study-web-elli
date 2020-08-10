"use strict";

import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(5)
  .bugCount(5)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay?";
      break;
    case Reason.win:
      message = "You won!";
      break;
    case Reason.lose:
      message = "You lost...";
      break;
    default:
      throw new Error("Not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
