import { generateId } from "../Utils.js"


export default class List {
  /**
   * Lists are used to hold several tasks they are the 'top' level object
   */
  constructor({ title, id = "", tasks = ["Example Task"], color }) {
    this.title = title
    // use the id or create if it was not provided
    this.id = id || generateId()
    // tasks are just strings
    this.tasks = tasks
    this.color = color || "secondary"
  }



  /**
   * This template is used to generate a single list template
   */
  get Template() {
    // FIXME Convert from comments to tasks and test no 7
    return /*html*/ ` 
    <div class="card shadow p-3 mb-5 bg-white rounded col-4">
        <div class="card-header bg-${this.color} shadow p-3 mb-5 bg-${this.color} rounded">
            ${this.title}            <i class="fa fa-times-circle align-self-end" aria-hidden="true" onclick="app.listController.removeList('${this.id}')")"></i>
        </div>
        <div class="card-body">
        <ul class="list-group">
        ${this.TasksTemplate}
        </ul>
        <form onsubmit = "app.listController.addTask(event,'${this.id}')">
            <div class="form-group mt-4">
                <label for="exampleFormControlInput1">Add A Task</label>
                <input type="text" required class="form-control mb-0" id="New Task" placeholder="Forget Me Not..." name = "comment">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-outline-${this.color}">  Add   <i class="fa fa-plus-square" aria-hidden="true"></i></button>
            </div>
        </form>
        </div>
    </div>
 `
  }

  get TasksTemplate() {
    let template = ''
    this.tasks.forEach(t => {
      template += `                <li class="list-group-item">${t} <i class="fa fa-times-circle"
    aria-hidden="true" onclick="app.listController.removeTask('${this.id}', '${t}')"></i></li>
    `
    });
    return template
  }
}






//             <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
// Added Task </li>
