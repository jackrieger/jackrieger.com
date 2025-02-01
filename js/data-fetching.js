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
  table.innerHTML = "";

  projects.forEach((project) => {
    const row = document.createElement("details");
    row.classList.add("table__details");

    if (project.link) {
      row.href = project.link;
      row.target = "_blank";
    }

    row.innerHTML = `
      <summary class="table__summary">
        <div class="table__summary__project">${project.project}</div>
        <div class="table__summary__category">${project.category}</div>
        <div class="table__summary__role">${project.role}</div>
        <div class="table__summary__date">${project.date}</div>
        <div class="table__summary__contribution" data-contribution="${
          project.contribution
        }">
          ${getContributionDots(project.contribution)}
        </div>
      </summary>
      <div class="">Test</div>
    `;

    table.appendChild(row);
  });
}

function getContributionDots(level) {
  const dot = "•";
  return dot.repeat(level);
}
