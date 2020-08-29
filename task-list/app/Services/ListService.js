import List from "../Models/List.js";
import STORE from "../store.js";

//Public
console.log("Service Check");
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
  
  removeTask(id, tasks) {
    let task = STORE.State.lists.find(t => t.id == id)
    let taskIndex = task.tasks.findIndex(t => t == tasks)
    task.tasks.splice(taskIndex, 1)
  }






}

const SERVICE = new ListService();
export default SERVICE;
