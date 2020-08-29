import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [new List({ title: "Example Title", })]
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("lists"))
  if (data) {
    data.lists = data.lists.map(l => new List(l))
    _state = data
  }
}
_loadState()

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  saveState() {
    localStorage.setItem("lists", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;
