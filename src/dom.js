import { LOGIC } from "./logic.js";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DOM = (function () {
  const newProjectBtn = document.querySelector(".projectAdd");
  const addProjectBtn = document.createElement("button");
  const nameInput = document.createElement("input");
  const projectContainer = document.querySelector(".projectContainer");

  function createDescription(taskObject, currentTask) {
    const descriptionField = document.createElement("textarea");
    descriptionField.classList.add("descField");
    //descriptionField.classList.add("inactive");
    descriptionField.textContent = taskObject.description;
    console.log(currentTask);
    currentTask.appendChild(descriptionField);
  }

  function toggleDescription(index) {
    descriptionField.classList.toggle("inactive");
  }

  function appendTask(task, index) {
    const taskContainer = document.createElement("div");
    const nameOfTask = document.createElement("div");
    const date = document.createElement("div");

    nameOfTask.textContent = task.title;
    if (task.deadline) {
      date.textContent = formatDistanceToNow(new Date(task.deadline));
    }

    taskContainer.classList.add("singleTask");

    if (task.priority == "Urgent") {
      taskContainer.classList.add("urgent");
    } else if (task.priority == "Kinda Important") {
      taskContainer.classList.add("kindaImportant");
    }

    taskContainer.appendChild(nameOfTask);
    taskContainer.appendChild(date);
    document
      .querySelector(`.tasksContainer[data-index="${index}"]`)
      .appendChild(taskContainer);

    createDescription(task, index);
  }

  function createAddTaskBtn(index, tasks) {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("data-index", index);
    addTaskBtn.classList.add("taskBtn");
    addTaskBtn.textContent = "New Task+";
    if (tasks == undefined) {
      tasks = document.querySelector(`.tasksContainer[data-index="${index}"]`);
    }
    tasks.appendChild(addTaskBtn);
  }

  function removeTaskBtn(index) {
    document.querySelector(`button[data-index="${index}"]`).remove();
  }

  function appendProject(projectTitle, index) {
    //Main Projects Area
    const projectCard = document.createElement("div");
    const title = document.createElement("div");
    const tasks = document.createElement("div");

    projectCard.classList.add("card");
    tasks.classList.add("tasksContainer");
    title.classList.add("title");
    projectCard.setAttribute("data-index", index);

    tasks.setAttribute("data-index", index);

    title.textContent = projectTitle;

    projectCard.appendChild(title);

    projectCard.appendChild(tasks);
    projectContainer.appendChild(projectCard);
    createAddTaskBtn(index, tasks);

    //Sidebar Project
    const projectNameBtn = document.createElement("button");

    projectNameBtn.textContent = projectTitle;

    document.querySelector(".projects").appendChild(projectNameBtn);
  }

  function taskFormMaker(index) {
    const card = document.querySelector(`.card[data-index="${index}"]`);

    const taskForm = document.createElement("form");
    const taskNameContainer = document.createElement("div");
    const taskNameLabel = document.createElement("label");
    const taskNameInput = document.createElement("input");
    const descriptionContainer = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");
    const dateContainer = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const priorityContainer = document.createElement("div");
    const priorityLabel = document.createElement("label");
    const priorityInput = document.createElement("select");
    const highPriorityChoice = document.createElement("option");
    const midPriorityChoice = document.createElement("option");
    const normalPriorityChoice = document.createElement("option");
    const noteContainer = document.createElement("div");
    const taskAddBtn = document.createElement("button");

    taskNameLabel.textContent = "Name";
    descriptionLabel.textContent = "Description";
    dateLabel.textContent = "Due Date";
    priorityLabel.textContent = "Priority";
    normalPriorityChoice.textContent = "Normal";
    midPriorityChoice.textContent = "Kinda important";
    highPriorityChoice.textContent = "Urgent";
    taskAddBtn.textContent = "Add Task";

    dateInput.setAttribute("type", "date");
    taskNameContainer.classList.add("formInputContainer");
    descriptionContainer.classList.add("formInputContainer");
    dateContainer.classList.add("formInputContainer");
    priorityContainer.classList.add("formInputContainer");
    noteContainer.classList.add("formInputContainer");
    taskNameInput.classList.add("taskName");
    descriptionInput.classList.add("taskDesc");
    dateInput.classList.add("taskDate");
    priorityInput.classList.add("taskPriority");
    taskAddBtn.classList.add("taskAddBtn");
    taskAddBtn.setAttribute("type", "button");
    taskAddBtn.setAttribute("data-index", index);

    taskNameContainer.appendChild(taskNameLabel);
    taskNameContainer.appendChild(taskNameInput);
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);
    priorityInput.appendChild(normalPriorityChoice);
    priorityInput.appendChild(midPriorityChoice);
    priorityInput.appendChild(highPriorityChoice);
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInput);

    taskForm.appendChild(taskNameContainer);
    taskForm.appendChild(descriptionContainer);
    taskForm.appendChild(dateContainer);
    taskForm.appendChild(priorityContainer);
    taskForm.appendChild(taskAddBtn);

    //document.querySelector.
    console.log(card);
    card.appendChild(taskForm);
  }

  function removeForm(formType) {
    if (formType == "project") {
      document.querySelector(".nameInput").value = "";
      newProjectBtn.classList.toggle("inactive");
      document.querySelector(".nameField").remove();
    } else if (formType == "task") {
      document.querySelector("form").reset();
      document.querySelector("form").remove();
    }
  }

  function getProjectName() {
    const nameField = document.createElement("div");
    const nameLabel = document.createElement("label");

    nameLabel.textContent = "Name";
    addProjectBtn.textContent = "Add";

    nameField.classList.add("nameField");
    nameInput.classList.add("nameInput");

    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);
    nameField.appendChild(addProjectBtn);

    newProjectBtn.classList.toggle("inactive");
    projectContainer.appendChild(nameField);
  }
  /*const tasks = document.querySelector(".tasks");
  const button = document.createElement("button");
  button.textContent = "Hello, Add task";
  button.addEventListener("click", () => logic.createTask());

  tasks.appendChild(button);

  function createCard(exTask) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = exTask.printTask();
    //tasks.appendChild(card);
  }*/

  return {
    newProjectBtn,
    addProjectBtn,
    getProjectName,
    removeForm,
    nameInput,
    appendProject,
    projectContainer,
    taskFormMaker,
    removeTaskBtn,
    appendTask,
    createAddTaskBtn,
    createDescription,
  };
})();

export { DOM };
