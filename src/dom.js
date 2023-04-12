import { logic } from "./logic.js";

const displayDOM = (function () {
  const tasks = document.querySelector(".tasks");
  const button = document.createElement("button");
  button.textContent = "Hello, Add task";
  button.addEventListener("click", () => logic.createTask());

  tasks.appendChild(button);

  function createCard(exTask) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = exTask.printTask();
    tasks.appendChild(card);
  }

  return { createCard };
})();

export { displayDOM };
