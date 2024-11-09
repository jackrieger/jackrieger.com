// data-fetching.js

export async function loadProjects() {
  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    renderProjects(projects);
  } catch (error) {
    console.error("Failed to load project data", error);
  }
}

function renderProjects(projects) {
  const table = document.querySelector(".js-project-table");
  table.innerHTML = ""; // Clear any existing content

  projects.forEach(project => {
    const row = project.link ? document.createElement("a") : document.createElement("div");
    row.classList.add("table-row");

    if (project.link) {
      row.href = project.link;
      row.target = "_blank";
    }

    row.innerHTML = `
      <div class="table-cell table-cell--project">${project.project}</div>
      <div class="table-cell table-cell--category">${project.category}</div>
      <div class="table-cell table-cell--role">${project.role}</div>
      <div class="table-cell table-cell--end-date">${project.date}</div>
      <div class="table-cell table-cell--contribution" data-contribution="${project.contribution}">
        ${getContributionDots(project.contribution)}
      </div>
    `;

    table.appendChild(row);
  });
}

function getContributionDots(level) {
  const dot = "•";
  return dot.repeat(level);
}
