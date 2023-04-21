import formatDistanceToNow from "date-fns/formatDistanceToNow";

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }
}

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function createProject(name) {
  let project = new Project(name);
  window.allProjects.push(project);
}

function createTodo(projectIndex, title, description, dueDate, priority) {
  let todo = new Todo(title, description, dueDate, priority);
  console.log(projectIndex);
  window.allProjects[Number(projectIndex)].todoList.push(todo);
}

function populateStorage() {
  localStorage.setItem("projectsArray", JSON.stringify(window.allProjects));
}

export { createProject, createTodo, populateStorage };
