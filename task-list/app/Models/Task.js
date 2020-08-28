import { generateId } from "../Utils.js"


export default class Task {
  constructor(title, id) {
    this.title = title
    this.id = id || generateId()

  }

  get Template() {
    return this.title
  }
}