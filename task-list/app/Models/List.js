import { generateId } from "../Utils.js"


export default class List {
  /**
   * Lists are used to hold several tasks they are the 'top' level object
   */
  constructor({ title, id = "", tasks = ["1", "2"] }) {
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
        <div class="card-header bg-primary">
            ${this.title}
        </div>
        <div class="card-body">
        <ul class="list-group">
        ${this.TasksTemplate}
        </ul>
        <form onsubmit = "app.ListController.addComment(event,'${this.id}')">
            <div class="form-group mt-4">
                <label for="exampleFormControlInput1">Leave a Comment</label>
                <input type="text" class="form-control" id="comment" placeholder="Comment...">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-outline-success">Post</button>
            </div>
        </form>
        </div>
    </div>
 `
  }

  get TasksTemplate() {
    let template = ''
    this.tasks.forEach(c => {
      template += `                <li class="list-group-item">${c} <i class="fa fa-trash"
    aria-hidden="true" onclick="app.listController.removeComment('${this.id}', '${c}')"></i></li>
    `
    });
    return template
  }
}






//             <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
// Added Task </li>
