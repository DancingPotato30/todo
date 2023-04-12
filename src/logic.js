import { createCard } from "./dom";

const logic = (function () {
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

  let allTasks = [];

  function createTask() {
    let exTask = new Task(
      "Gay",
      "Sex",
      "23/12",
      "high",
      "This is  avery specific test"
    );
    createCard(exTask);
    allTasks.push(exTask);
    console.log(allTasks);
  }

  return { createTask };
})();

export { logic };
