type actionType = (parameters: any) => void;

class EventHandler {
  listeners: { [key: string]: actionType[] } = {};
  public fire(event: string, value?: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => {
        listener(value);
      });
      return true;
    }
    return false;
  }

  public subscribe(event: string, action: actionType) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(action);
    return true;
  }
}

export default EventHandler;
