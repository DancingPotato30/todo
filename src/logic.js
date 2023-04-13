import { DOM } from "./dom";

const LOGIC = (function () {
  class Task {
    constructor(title, description, deadline, priority, notes) {
      this.title = title;
      this.description = description;
      this.deadline = deadline;
      this.priority = priority;
      this.notes = notes;
    }

    printTask() {
      return `
    ${this.title} <br>
    ${this.description} <br>
    Ends in ${this.deadline} <br>
    ${this.priority}
    `;
    }
  }

  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }

  let allProjects = [];

  function createProject(title) {
    let project = new Project(title);
    let index = allProjects.push(project) - 1;
    DOM.appendProject(DOM.nameInput.value, index);
  }
  function createTask() {
    let task = new Task(
      "Gay",
      "Sex",
      "23/12",
      "high",
      "This is  avery specific test"
    );
    DOM.createCard(task);
    console.log(allTasks);
  }

  return { createTask, createProject };
})();

export { LOGIC };
