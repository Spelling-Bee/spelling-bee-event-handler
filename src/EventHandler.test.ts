import EventHandler from "./EventHandler";
import { UPDATE_GUESS, MAKE_GUESS } from "./EVENTS";

describe("EventHandler", () => {
  it("can be instantiated", () => {
    const eventHandler = new EventHandler();

    expect(eventHandler).toBeInstanceOf(EventHandler);
  });

  it("can fire events", () => {
    const eventHandler = new EventHandler();

    expect(eventHandler.fire(UPDATE_GUESS)).toBeFalsy();
  });

  it("subscribe to actions for events", () => {
    const eventHandler = new EventHandler();

    expect(eventHandler.subscribe(UPDATE_GUESS, () => {})).toBeTruthy();
  });

  it("fires subscribed actions", () => {
    const eventHandler = new EventHandler();
    const mockAction = jest.fn(() => {});

    eventHandler.subscribe(UPDATE_GUESS, mockAction);
    eventHandler.fire(MAKE_GUESS);

    expect(mockAction).toBeCalledTimes(0);

    eventHandler.fire(UPDATE_GUESS);
    expect(mockAction).toBeCalledTimes(1);
  });
});
