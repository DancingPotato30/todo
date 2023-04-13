import { LOGIC } from "./logic.js";

const DOM = (function () {
  const newProjectBtn = document.querySelector(".projectAdd");
  const addProjectBtn = document.createElement("button");
  let addTaskBtn;
  const nameInput = document.createElement("input");
  const projectContainer = document.querySelector(".projectContainer");

  function appendProject(projectTitle, index) {
    const projectCard = document.createElement("div");
    const title = document.createElement("div");
    const tasks = document.createElement("div");
    addTaskBtn = document.createElement("button");

    projectCard.classList.add("card");
    tasks.classList.add("tasksContainer");
    title.classList.add("title");
    projectCard.setAttribute("data-index", index);
    addTaskBtn.setAttribute("data-index", index);
    addTaskBtn.classList.add("taskBtn");

    title.textContent = projectTitle;
    addTaskBtn.textContent = "New Task+";

    projectCard.appendChild(title);
    tasks.appendChild(addTaskBtn);
    projectCard.appendChild(tasks);
    projectContainer.appendChild(projectCard);
  }

  function taskFormMaker(index) {
    const taskForm = document.createElement("form");
    const taskNameLabel = document.createElement("label");
    const taskNameInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const priorityLabel = document.createElement("label");
    const priorityInput = document.createElement("select");
    const highPriorityChoice = document.createElement("option");
    const midPriorityChoice = document.createElement("option");
    const normalPriorityChoice = document.createElement("option");
    const noteLabel = document.createElement("label");
    const noteInput = document.createElement("textarea");

    taskNameLabel.textContent = "Name";
    descriptionLabel.textContent = "Description";
    dateLabel.textContent = "Due Date";
    priorityLabel.textContent = "Priority";
    noteLabel.textContent = "Notes";
    normalPriorityChoice.textContent = "Normal";
    midPriorityChoice.textContent = "Kinda important";
    highPriorityChoice.textContent = "Urgent";

    dateInput.setAttribute("type", "date");

    taskForm.appendChild(taskNameLabel);
    taskForm.appendChild(taskNameInput);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(descriptionInput);
    taskForm.appendChild(dateLabel);
    taskForm.appendChild(dateInput);
    priorityInput.appendChild(normalPriorityChoice);
    priorityInput.appendChild(midPriorityChoice);
    priorityInput.appendChild(highPriorityChoice);
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(priorityInput);
    taskForm.appendChild(noteLabel);
    taskForm.appendChild(noteInput);

    console.log(index);
    (
      document.querySelector(".tasksContainer").dataset.index == index
    ).appendChild(taskForm);
    //card.appendChild(taskForm);
  }

  function removeForm() {
    document.querySelector(".nameInput").value = "";
    newProjectBtn.classList.toggle("inactive");
    document.querySelector(".nameField").remove();
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
    addTaskBtn,
    taskFormMaker,
  };
})();

export { DOM };
