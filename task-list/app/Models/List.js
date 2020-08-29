import { generateId } from "../Utils.js"


export default class List {
  /**
   * Lists are used to hold several tasks they are the 'top' level object
   */
  constructor({ title, id = "", tasks = ["Buy Dog Food", "Watch Movie"] }) {
    this.title = title
    // use the id or create if it was not provided
    this.id = id || generateId()
    // tasks are just strings
    this.tasks = tasks
  }

  /**
   * This template is used to generate a single list template
   */
  get Template() {
    // FIXME Convert from comments to tasks and test no 7
    return /*html*/ ` 
    <div class="card col-4">
        <div class="card-header bg-secondary">
            ${this.title}            <i class="fa fa-times-circle align-self-end" aria-hidden="true" onclick="app.listController.removeList('${this.id}')"></i>
        </div>
        <div class="card-body">
        <ul class="list-group">
        ${this.TasksTemplate}
        </ul>
        <form onsubmit = "app.ListController.addTask(event,'${this.id}')">
            <div class="form-group mt-4">
                <label for="exampleFormControlInput1">Add A Task</label>
                <input type="text" class="form-control mb-0" id="New Task" placeholder="Forget Me Not...">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-outline-success">Add</button>
            </div>
        </form>
        </div>
    </div>
 `
  }

  get TasksTemplate() {
    let template = ''
    this.tasks.forEach(t => {
      template += `                <li class="list-group-item">${t} <i class="fa fa-trash"
    aria-hidden="true" onclick="app.ListController.removeTask('${this.id}', '${t}')"></i></li>
    `
    });
    return template
  }
}






//             <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
// Added Task </li>
