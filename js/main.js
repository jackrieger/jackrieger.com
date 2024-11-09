// main.js
import { loadProjects } from "./data-fetching.js";
import { setSorting } from "./sorting.js";
import { setTime, setEmailCopy, setJobText } from "./utility.js";

(async function run() {
  setEmailCopy();
  setJobText();
  setTime();

  // Ensure data is loaded before setting sorting
  await loadProjects();
  setSorting();
})();
