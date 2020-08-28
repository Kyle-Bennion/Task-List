import TaskController from "./Controllers/TaskController.js";

class App {
  valuesController = new TaskController();
}

window["app"] = new App();
