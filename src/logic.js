import { DOM } from "./dom";

const LOGIC = (function () {
  class Task {
    constructor(title, description, deadline, priority) {
      this.title = title;
      this.description = description;
      this.deadline = deadline;
      this.priority = priority;
    }
  }

  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }

  let allProjects = [];

  function pushTask(index, task) {
    allProjects[index].tasks.push(task);
  }

  function createProject(title) {
    let project = new Project(title);
    let index = allProjects.push(project) - 1;
    DOM.appendProject(DOM.nameInput.value, index);
  }
  function createTask(index) {
    const title = document.querySelector(".taskName").value;
    const description = document.querySelector(".taskDesc").value;
    const date = document.querySelector(".taskDate").value;
    const priority = document.querySelector(".taskPriority").value;
    let task = new Task(title, description, date, priority);
    pushTask(index, task);
    return task;
  }

  return { createTask, createProject, allProjects };
})();

export { LOGIC };
