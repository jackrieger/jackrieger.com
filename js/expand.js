// expand.js

export function setExpandToggle() {
  const toggleLink = document.querySelector(".js-expand-toggle");
  if (!toggleLink) return;

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault();
    const details = document.querySelectorAll(
      ".js-project-table .table__details"
    );
    const allOpen = Array.from(details).every((detail) => detail.open);
    details.forEach((detail) => {
      detail.open = !allOpen;
    });
    toggleLink.innerText = allOpen ? "Expand all" : "Collapse all";
  });
}
