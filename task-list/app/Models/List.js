import { generateId } from "../Utils.js"


export default class List {
  constructor(title, id, task) {
    this.title = title
    this.id = id || generateId()
    this.task = task || []
  }

  get Template() {
    return /*html*/ ` <div class="row" id="tasks">
    <div class="card col-4">
        <div class="card-header">
            ${this.title}
        </div>
        <div class="card-body">
            <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
                Added Task </li>
            <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
                Added Task </li>
            <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
                Added Task </li>
            <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
                Added Task </li>
            <li class="list-group-item"> <input type="checkbox" aria-label="Checkbox for following text input">
                Added Task </li>

        </div>
    </div>
</div> `
  }
}