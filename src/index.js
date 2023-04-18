import "./style.css";
import { LOGIC } from "./logic.js";
import { DOM } from "./dom";

//Add logic to identify tasks easier. perhaps a data-set would do? CreateDescription()

(function eventListeners() {
  let currentTask;
  document.querySelector(".testBtn").addEventListener("click", () => {
    console.log(LOGIC.allProjects);
  });

  DOM.newProjectBtn.addEventListener("click", () => {
    DOM.getProjectName();
  });

  DOM.addProjectBtn.addEventListener("click", () => {
    LOGIC.createProject(DOM.nameInput.value);
    DOM.removeForm("project");
  });

  DOM.projectContainer.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("taskBtn")) {
      DOM.removeTaskBtn(e.target.dataset.index);
      DOM.taskFormMaker(e.target.dataset.index);
    } else if (e.target.classList.contains("taskAddBtn")) {
      console.log("a");
      currentTask = LOGIC.createTask(e.target.dataset.index);
      DOM.appendTask(currentTask, e.target.dataset.index);
      DOM.removeForm("task");
      DOM.createAddTaskBtn(e.target.dataset.index);
    } else if (e.target.classList.contains("singleTask")) {
      console.log("sec");
      DOM.createDescription(currentTask, e.target);
    }
  });
})();
