import { SpellingBeeGame } from "spelling-bee-core";
import SpellingBeeEventHandler from "./SpellingBeeEventHandler";
describe("SpellingBeEventHandler", () => {
  it("can be instantiated", () => {
    const sbEventHandler = new SpellingBeeEventHandler();

    expect(sbEventHandler).toBeInstanceOf(SpellingBeeEventHandler);
  });

  it("can subcribe onCreateGame", () => {
    const sbEventHandler = new SpellingBeeEventHandler();

    expect(
      sbEventHandler.onCreateGame((sb: SpellingBeeGame) => {})
    ).toBeTruthy();
  });

  it("can subcribe onLoadGame", () => {
    const sbEventHandler = new SpellingBeeEventHandler();

    expect(sbEventHandler.onLoadGame((sb: SpellingBeeGame) => {})).toBeTruthy();
  });

  it("can subcribe onGuessChange", () => {
    const sbEventHandler = new SpellingBeeEventHandler();

    expect(sbEventHandler.onGuessChange((guess: string) => {})).toBeTruthy();
  });

  it("can subcribe onWrongGuess", () => {
    const sbEventHandler = new SpellingBeeEventHandler();

    expect(sbEventHandler.onWrongGuess((error: string) => {})).toBeTruthy();
  });

  it("can subcribe onCorrectGuess", () => {
    const sbEventHandler = new SpellingBeeEventHandler();

    expect(sbEventHandler.onCorrectGuess((guess: string) => {})).toBeTruthy();
  });
});
