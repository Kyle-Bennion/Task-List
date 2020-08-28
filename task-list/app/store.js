import Task from "./Models/List.js";

let _state = {
  activeValue: new Task({ title: "tasks" }),
  /** @type {Task[]} */
  tasks: [new Task({ title: "This is a Sample Title" })]
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
