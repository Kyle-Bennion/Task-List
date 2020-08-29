import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [new List({ title: "This is a Sample Title", })]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
