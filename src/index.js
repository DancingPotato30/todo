import "./style.css";
import { LOGIC } from "./logic.js";
import { DOM } from "./dom";

//Add main page and project add logic

(function eventListeners() {
  DOM.newProjectBtn.addEventListener("click", () => {
    DOM.getProjectName();
  });

  DOM.addProjectBtn.addEventListener("click", () => {
    LOGIC.createProject(DOM.nameInput.value);
    DOM.removeForm();
  });

  DOM.addTaskBtn.addEventListener("click", (e) => {
    DOM.taskFormMaker(e.target.dataset.index);
  });
})();
