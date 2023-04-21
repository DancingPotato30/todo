import {
  createProject,
  allProjects,
  createTodo,
  populateStorage,
} from "./logic";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function getProjectTitle() {
  const projectInputContainer = document.createElement("div");
  const projectNameLabel = document.createElement("label");
  const projectNameInput = document.createElement("input");
  const submitProjectName = document.createElement("button");

  projectInputContainer.classList.add("projectFormContainer");
  projectNameInput.classList.add("projectInput");
  submitProjectName.classList.add("addProjectBtn");

  submitProjectName.textContent = "Add Project";
  projectNameLabel.textContent = "Name of project*";

  submitProjectName.addEventListener("click", () => {
    if (projectNameInput.value) {
      createProject(projectNameInput.value);
      refreshProjects();
      removePopup();
    } else {
      projectNameLabel.classList.toggle("invalid");
      setTimeout(() => {
        projectNameLabel.classList.toggle("invalid");
      }, 2000);
    }
  });

  projectInputContainer.appendChild(projectNameLabel);
  projectInputContainer.appendChild(projectNameInput);
  projectInputContainer.appendChild(submitProjectName);
  document.querySelector(".popup").appendChild(projectInputContainer);
}

function toDoFormMaker(index) {
  const todoForm = document.createElement("form");
  const nameContainer = document.createElement("div");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const descContainer = document.createElement("div");
  const descLabel = document.createElement("label");
  const descInput = document.createElement("textarea");
  const dateContainer = document.createElement("div");
  const dateLabel = document.createElement("label");
  const dateInput = document.createElement("input");
  const priorityContainer = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("select");
  const normalOption = document.createElement("option");
  const importantOption = document.createElement("option");
  const urgentOption = document.createElement("option");
  const addTodoBtn = document.createElement("button");

  addTodoBtn.classList.add("addTodoBtn");
  nameContainer.classList.add("container");
  descContainer.classList.add("container");
  dateContainer.classList.add("container");
  priorityContainer.classList.add("container");

  addTodoBtn.setAttribute("type", "button");
  dateInput.setAttribute("type", "datetime-local");

  addTodoBtn.addEventListener("click", () => {
    if (nameInput.value) {
      createTodo(
        index,
        nameInput.value,
        descInput.value,
        dateInput.value,
        priorityInput.value
      );
      removePopup();
      refreshProjects();
    }
  });

  nameLabel.textContent = "Name*";
  descLabel.textContent = "Description";
  dateLabel.textContent = "Due date";
  priorityLabel.textContent = "Priority";
  addTodoBtn.textContent = "Add Todo";
  normalOption.textContent = "Normal";
  importantOption.textContent = "Important";
  urgentOption.textContent = "Urgent";

  priorityInput.appendChild(normalOption);
  priorityInput.appendChild(importantOption);
  priorityInput.appendChild(urgentOption);

  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(nameInput);
  descContainer.appendChild(descLabel);
  descContainer.appendChild(descInput);
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(dateInput);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityInput);
  todoForm.appendChild(nameContainer);
  todoForm.appendChild(descContainer);
  todoForm.appendChild(dateContainer);
  todoForm.appendChild(priorityContainer);
  todoForm.appendChild(addTodoBtn);

  document.querySelector(".popup").appendChild(todoForm);
}

function createPopup() {
  const popup = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const body = document.createElement("div");
  const closeButton = document.createElement("button");

  popup.classList.add("popup");
  buttonContainer.classList.add("top");
  closeButton.classList.add("closeBtn");

  closeButton.addEventListener("click", () => {
    removePopup();
  });

  closeButton.textContent = "X";

  buttonContainer.appendChild(closeButton);
  popup.appendChild(buttonContainer);
  popup.appendChild(body);
  document.body.appendChild(popup);
}

function removePopup() {
  document.querySelector(".popup").remove();
}

function refreshProjects() {
  //Full Reset
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
  document.querySelectorAll(".sidebarProject").forEach((project) => {
    project.remove();
  });

  //Create Projects
  for (let i = 0; i < allProjects.length; i++) {
    const projectCard = document.createElement("div");
    const title = document.createElement("div");
    const newToDo = document.createElement("button");
    const todoList = document.createElement("div");
    const btnContainer = document.createElement("div");
    const deleteProjectBtn = document.createElement("button");

    projectCard.classList.add("card");
    newToDo.classList.add("newToDoBtn");
    newToDo.setAttribute("data-index", `${i}`);
    todoList.classList.add("todoList");
    title.classList.add("projectTitle");
    btnContainer.classList.add("top");
    deleteProjectBtn.classList.add("deleteProjectBtn");

    newToDo.textContent = "New Todo+";
    deleteProjectBtn.textContent = "X";
    title.textContent = allProjects[i].name;

    projectCard.addEventListener("click", (e) => {
      if (e.target.classList.contains("newToDoBtn")) {
        createPopup();
        console.log(e.target);
        toDoFormMaker(e.target.dataset.index);
      }
    });

    deleteProjectBtn.addEventListener("click", () => {
      allProjects.splice(i, 1);
      refreshProjects();
      console.log("hey");
    });

    //Sidebar Projects
    const sidebarProject = document.createElement("div");
    sidebarProject.textContent = allProjects[i].name;
    sidebarProject.classList.add("sidebarProject");
    document.querySelector(".newProjects").appendChild(sidebarProject);

    //Create todoList
    for (let j = 0; j < allProjects[i].todoList.length; j++) {
      const todo = document.createElement("div");
      const mainInfo = document.createElement("div");
      const name = document.createElement("div");
      const extraInfo = document.createElement("div");
      const dueDate = document.createElement("div");
      const doneCheck = document.createElement("input");
      const descContainer = document.createElement("div");
      const descLabel = document.createElement("label");
      const descField = document.createElement("textarea");

      todo.classList.add("todo");
      mainInfo.classList.add("mainInfo");
      extraInfo.classList.add("extra");
      doneCheck.setAttribute("type", "checkbox");
      doneCheck.classList.add("check");
      descContainer.classList.add("descContainer");
      descContainer.classList.add("inactive");
      descField.classList.add("descContainer");
      if (allProjects[i].todoList[j].priority == "Important") {
        mainInfo.classList.add("important");
      } else if (allProjects[i].todoList[j].priority == "Urgent") {
        mainInfo.classList.add("urgent");
      }

      descLabel.textContent = "Description";

      name.textContent = allProjects[i].todoList[j].title;
      if (allProjects[i].todoList[j].dueDate) {
        dueDate.textContent = formatDistanceToNow(
          new Date(allProjects[i].todoList[j].dueDate),
          { addSuffix: true }
        );
      }
      descField.textContent = allProjects[i].todoList[j].description;

      todo.addEventListener("click", (e) => {
        if (
          e.target.classList.contains("descContainer") == false &&
          e.target.classList.contains("check") == false
        ) {
          descContainer.classList.toggle("inactive");
        }
      });

      descField.addEventListener("keyup", () => {
        allProjects[i].todoList[j].description = descField.value;
      });

      doneCheck.addEventListener("click", (e) => {
        if (e.target.checked == true) {
          setTimeout(() => {
            allProjects[i].todoList.splice(j, 1);
            refreshProjects();
          }, 1000);
        } else if (e.target.checked == false) {
          console.log("not checked");
        }
      });

      mainInfo.appendChild(name);
      extraInfo.appendChild(dueDate);
      extraInfo.appendChild(doneCheck);
      mainInfo.appendChild(extraInfo);
      descContainer.appendChild(descLabel);
      descContainer.appendChild(descField);
      todo.appendChild(mainInfo);
      todo.appendChild(descContainer);

      todoList.appendChild(todo);
    }

    btnContainer.appendChild(deleteProjectBtn);
    projectCard.appendChild(btnContainer);
    projectCard.appendChild(title);
    projectCard.appendChild(newToDo);
    projectCard.appendChild(todoList);
    document.querySelector(".projectContainer").appendChild(projectCard);
  }

  populateStorage();
}

export { createPopup, getProjectTitle, refreshProjects };
