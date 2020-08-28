import { generateId } from "../Utils.js"


export default class List {
  constructor(title, id, task) {
    this.title = title
    this.id = id || generateId()
    this.task = task
  }

  get Template() {
    return this.title
  }
}