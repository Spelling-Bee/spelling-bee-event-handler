import SpellingBee from "../../src/SpellingBee";
describe("Integration Test for Spelling Bee Events", () => {
  const setting = {
    dictionary: ["a", "b", "aa", "ab", "bb", "aaa", "aba", "bbb", "ac"],
    letters: ["a", "b"],
    pivotLetter: "a",
    min: 2,
  };

  const guessedWords: string[] = [];

  const game = {
    ...setting,
    id: "2-a-ab",
    guessedWords,
    words: ["aa", "ab", "aaa", "aba"],
  };

  it("fires an event when the a new game is created", () => {
    const sb = new SpellingBee();

    const mockFunction = jest.fn(() => {});

    sb.onCreateGame(mockFunction);

    sb.createGame(setting);

    expect(mockFunction).toBeCalledTimes(1);
  });

  it("fires an event when the a new game is loaded", () => {
    const sb = new SpellingBee();

    const mockFunction = jest.fn(() => {});

    sb.onLoadGame(mockFunction);

    sb.loadGame(game);

    expect(mockFunction).toBeCalledTimes(1);
  });

  it("fires an event when the guess get updated", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    const mockFunction = jest.fn(() => {});

    sb.onGuessChange(mockFunction);

    sb.updateGuess("test");

    expect(mockFunction).toBeCalledTimes(1);
  });

  it("fires an event when the guess is wrong", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    const mockFunction = jest.fn(() => {});

    sb.onWrongGuess(mockFunction);

    sb.makeGuess();

    expect(mockFunction).toBeCalledTimes(1);
  });

  it("fires an event when the guess is correct", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    const mockFunction = jest.fn(() => {});

    sb.onCorrectGuess(mockFunction);

    sb.updateGuess("ab");
    sb.makeGuess();

    expect(mockFunction).toBeCalledTimes(1);
  });
});
