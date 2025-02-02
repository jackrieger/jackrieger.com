// main.js

import { loadProjects } from "./data-fetching.js";
import { setSorting } from "./sorting.js";
import { setTime, setEmailCopy, setJobText } from "./utility.js";
import { setExpandToggle } from "./expand.js";
(async function run() {
  setEmailCopy();
  setJobText();
  setTime();
  setExpandToggle();

  const hasProjectTable = document.querySelector(".js-project-table");
  if (hasProjectTable) {
    await loadProjects();
    setSorting();
  }
})();
