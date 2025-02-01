import { loadProjects } from "./data-fetching.js";
import { setSorting } from "./sorting.js";
import { setTime, setEmailCopy, setJobText } from "./utility.js";

(async function run() {
  setEmailCopy();
  setJobText();
  setTime();

  const hasProjectTable = document.querySelector(".js-project-table");
  if (hasProjectTable) {
    await loadProjects();
    setSorting();
  }
})();
