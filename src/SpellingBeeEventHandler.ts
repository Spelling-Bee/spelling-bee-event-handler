import { SpellingBeeGame } from "spelling-bee-core";
import EventHandler from "./EventHandler";
import {
  CORRECT_GUESS,
  CREATE_GAME,
  LOAD_GAME,
  UPDATE_GUESS,
  WRONG_GUESS,
} from "./EVENTS";

class SpellingBeeEventHandler extends EventHandler {
  public onCreateGame(action: (sb: SpellingBeeGame) => void) {
    return this.subscribe(CREATE_GAME, action);
  }

  protected fireOnCreateGame(sb: SpellingBeeGame) {
    return this.fire(CREATE_GAME, sb);
  }

  public onLoadGame(action: (sb: SpellingBeeGame) => void) {
    return this.subscribe(LOAD_GAME, action);
  }

  protected fireOnLoadGame(sb: SpellingBeeGame) {
    return this.fire(LOAD_GAME, sb);
  }

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
