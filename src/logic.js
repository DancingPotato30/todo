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

let allProjects = [];

function createProject(name) {
  let project = new Project(name);
  allProjects.push(project);
}

function createTodo(projectIndex, title, description, dueDate, priority) {
  let todo = new Todo(title, description, dueDate, priority);
  console.log(projectIndex);
  allProjects[Number(projectIndex)].todoList.push(todo);
}

function populateStorage() {
  localStorage.setItem("projectsArray", JSON.stringify(allProjects));
}

export { allProjects, createProject, createTodo, populateStorage };
