import "./style.css";
import { createPopup, getProjectTitle, refreshProjects } from "./dom";
import { allProjects } from "./logic";

window.addEventListener("load", () => {
  refreshProjects();
});

document.querySelector(".newProjectBtn").addEventListener("click", () => {
  createPopup();
  getProjectTitle();
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("projectInput")) {
    console.log(e.target);
  }
});
