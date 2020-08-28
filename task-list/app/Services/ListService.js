import List from "../Models/List.js";
import store from "../store.js";
import STORE from "../store.js";

//Public
class ListService {



  // TODO 3: createList method like create post line 8
  createList(newList) {
    let newContent = new List(newList)
    STORE.State.lists.push(newContent)
  }

  // TODO 5: delete list like in line 16
  removeList(id) {
    STORE.State.lists = STORE.State.lists.filter(l => l.id != id)
  }


  addTask(newTask, id) {
    let list = STORE.State.lists.find(l => l.id == id)
    list.tasks.push(newTask)
  }








}

const SERVICE = new ListService();
export default SERVICE;
