import SpellingBee from "../src/SpellingBee";
describe("SpellingBee", () => {
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

  it("can be instantiated", () => {
    const sb = new SpellingBee();
    expect(sb).toBeInstanceOf(SpellingBee);
  });

  it("createGame() creates a new game of spelling bee", () => {
    const sb = new SpellingBee();
    expect(sb.createGame(setting)).toEqual(game);
  });

  it("getGame() returns the current game of spelling bee", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    expect(sb.getGame()).toEqual(game);
  });

  it("loadGame() loads a game", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    const sb2 = new SpellingBee();
    sb2.loadGame(sb.getGame());

    expect(sb2.getGame()).toEqual(sb.getGame());
  });

  it("getGuess() returns the current guess", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);
    expect(sb.getGuess()).toBe("");
  });

  it("updateGuess() updates the current guess", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    sb.updateGuess("test");
    expect(sb.getGuess()).toBe("test");
  });

  it("resetGuess() resets the current guess to an empty string", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    sb.updateGuess("test");
    expect(sb.getGuess()).toBe("test");
    sb.resetGuess();
    expect(sb.getGuess()).toBe("");
  });

  it("checkGuess() checks if the guess is valid or not", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    expect(() => sb.checkGuess()).toThrowError();

    sb.updateGuess("aa");
    expect(sb.checkGuess()).toBeTruthy();
  });

  it("makeGuess() makes a guess and leaves guess", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    sb.updateGuess("bb");
    expect(sb.makeGuess()).toBeFalsy();
    expect(sb.getGuess()).toBe("bb");

    sb.updateGuess("aa");
    expect(sb.makeGuess()).toBeTruthy();
    expect(sb.getGuess()).toBe("aa");

    // Can't make the same guess twice
    sb.updateGuess("aa");
    expect(sb.makeGuess()).toBeFalsy();
    expect(sb.getGuess()).toBe("aa");
  });

  it("getGuessedWords() returns all correctly guessed words", () => {
    const sb = new SpellingBee();
    sb.createGame(setting);

    expect(sb.getGuessedWords().length).toBe(0);

    sb.updateGuess("aa");
    sb.makeGuess();
    expect(sb.getGuessedWords().length).toBe(1);
    expect(sb.getGuessedWords()).toEqual(["aa"]);

    sb.updateGuess("aa");
    sb.makeGuess();
    expect(sb.getGuessedWords().length).toBe(1);
    expect(sb.getGuessedWords()).toEqual(["aa"]);
  });
});
