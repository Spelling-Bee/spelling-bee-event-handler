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
    id: "a-ab",
    guessedWords,
    words: ["aa", "ab", "aaa", "aba"],
  };

  it("cannot be instantiated without setting", () => {
    //@ts-ignore
    expect(() => new SpellingBee()).toThrowError();
  });

  it("can be instantiated with setting", () => {
    const sb = new SpellingBee(setting);
    expect(sb).toBeInstanceOf(SpellingBee);
  });

  it("getGame() returns the current game of spelling bee", () => {
    const sb = new SpellingBee(setting);
    expect(sb.getGame()).toEqual(game);
  });

  it("getGuess() returns the current guess", () => {
    const sb = new SpellingBee(setting);
    expect(sb.getGuess()).toBe("");
  });

  it("updateGuess() updates the current guess", () => {
    const sb = new SpellingBee(setting);
    sb.updateGuess("test");
    expect(sb.getGuess()).toBe("test");
  });

  it("resetGuess() resets the current guess to an empty string", () => {
    const sb = new SpellingBee(setting);
    sb.updateGuess("test");
    expect(sb.getGuess()).toBe("test");
    sb.resetGuess();
    expect(sb.getGuess()).toBe("");
  });

  it("checkGuess() checks if the guess is valid or not", () => {
    const sb = new SpellingBee(setting);
    expect(() => sb.checkGuess()).toThrowError();

    sb.updateGuess("aa");
    expect(sb.checkGuess()).toBeTruthy();
  });

  it("makeGuess() makes a guess and resets guess", () => {
    const sb = new SpellingBee(setting);
    sb.updateGuess("bb");
    expect(sb.makeGuess()).toBeFalsy();
    expect(sb.getGuess()).toBe("");

    sb.updateGuess("aa");
    expect(sb.makeGuess()).toBeTruthy();
    expect(sb.getGuess()).toBe("");

    // Can't make the same guess twice
    sb.updateGuess("aa");
    expect(sb.makeGuess()).toBeFalsy();
    expect(sb.getGuess()).toBe("");
  });

  it("getGuessedWords() returns all correctly guessed words", () => {
    const sb = new SpellingBee(setting);
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
