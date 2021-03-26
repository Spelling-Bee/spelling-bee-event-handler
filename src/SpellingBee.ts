import SpellingBeeCore, {
  SpellingBeeGame,
  SpellingBeeSetting,
} from "spelling-bee-core";
import SpellingBeeEventHandler from "./SpellingBeeEventHandler";

class SpellingBee extends SpellingBeeEventHandler {
  private sb: SpellingBeeGame;
  private guess = "";

  constructor(setting: SpellingBeeSetting) {
    super();
    this.sb = SpellingBeeCore.createGame(setting);
  }

  public getGame() {
    return this.sb;
  }

  public getGuess() {
    return this.guess;
  }

  public updateGuess(guess: string) {
    this.guess = guess;
    this.fireOnGuessChange(this.guess);
  }

  public resetGuess() {
    this.updateGuess("");
  }

  public checkGuess() {
    return SpellingBeeCore.checkGuess(this.getGuess(), this.getGame());
  }

  public makeGuess() {
    let result = false;
    try {
      this.checkGuess();
      result = SpellingBeeCore.makeGuess(this.getGuess(), this.getGame());
      this.fireOnCorrectGuess(this.getGuess());
    } catch (error) {
      this.fireOnWrongGuess(error);
    }

    this.resetGuess();
    return result;
  }

  public getGuessedWords() {
    return this.getGame().guessedWords;
  }
}

export default SpellingBee;
