import { createTask } from "./app";

console.log("This is DOM");
const tasks = document.querySelector(".tasks");
const button = document.createElement("button");
button.textContent = "Hello, Add task";
button.addEventListener("click", () => console.log(""));

tasks.appendChild(button);

export function createCard(exTask) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = exTask.printTask();
  tasks.appendChild(card);
}
