import EventHandler from "./EventHandler";
import { CORRECT_GUESS, UPDATE_GUESS, WRONG_GUESS } from "./EVENTS";

class SpellingBeeEventHandler extends EventHandler {
  public onGuessChange(action: (guess: string) => void) {
    return this.subscribe(UPDATE_GUESS, action);
  }

  protected fireOnGuessChange(guess: string) {
    return this.fire(UPDATE_GUESS, guess);
  }

  public onWrongGuess(action: (error: string) => void) {
    return this.subscribe(WRONG_GUESS, action);
  }

  protected fireOnWrongGuess(error: string) {
    return this.fire(WRONG_GUESS, error);
  }

  public onCorrectGuess(action: (guess: string) => void) {
    return this.subscribe(CORRECT_GUESS, action);
  }

  protected fireOnCorrectGuess(guess: string) {
    return this.fire(CORRECT_GUESS, guess);
  }
}

export default SpellingBeeEventHandler;
