import ListService from "../Services/ListService.js";
import STORE from "../store.js";

// TODO 1: _drawLists  (Make sure this gets called when listController is constructed)


function _drawLists() {
  let template = ''
  STORE.State.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template

}


//Public
export default class ListController {
  constructor() {

    console.log("Controller Check");
    _drawLists();
  }

  // TODO 2: when this form gets submitted pass form data to service like we did on create post line 30 (dont forget to draw afterwords)
  createList(event) {
    event.preventDefault()
    let form = event.target
    let newList = { title: form.listtitle.value, color: form.color.value }
    ListService.createList(newList)
    _drawLists();
  }

  // TODO 4: create the listDelete like removePost line 38 This will have to be added to the list template as well see line 17 of post template

  removeList(id) {
    ListService.removeList(id)
    _drawLists();
  }

  // TODO 6 create tasks to go on the lists similar to all the code for create/delete comments lines 24 & 31

  addTask(event, id) {
    event.preventDefault()
    let form = event.target
    console.log("Right Before This");
    let newTask = form.comment.value
    ListService.addTask(newTask, id)
    _drawLists();
  }

removeTask(id,task){

ListService.removeTask(id,task)
_drawLists()
}

}
