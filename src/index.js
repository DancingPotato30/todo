import "./style.css";
import { createPopup, getProjectTitle, refreshProjects } from "./dom";
import { allProjects, populateStorage } from "./logic";

window.addEventListener("load", () => {
  if (storageAvailable("localStorage")) {
    if (!localStorage.getItem("projectsArray")) {
      populateStorage();
    } else {
      allProjects = JSON.parse(localStorage.getItem("projectsArray"));
      refreshProjects();
    }
  }
});

document.querySelector(".newProjectBtn").addEventListener("click", () => {
  createPopup();
  getProjectTitle();
});

document.querySelector(".test").addEventListener("click", () => {
  console.log(localStorage);
  console.log(allProjects);
});

document.querySelector(".clear").addEventListener("click", () => {
  localStorage.clear();
});

//LOCAL STORAGE CHECK
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
