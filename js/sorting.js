export function setSorting() {
  const headers = document.querySelectorAll(".table-heading .table__summary");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const columnClass = header.className.split("__")[1];
      let asc = header.dataset.asc === "true" ? false : true;

      sortTable(columnClass, asc);

      updateIndicators(headers, header, asc);

      header.dataset.asc = asc;
    });
  });

  // Initial sort by "Contribution" in descending order
  const contributionHeader = document.querySelector(
    ".table__summary__contribution"
  );
  if (contributionHeader) {
    contributionHeader.dataset.asc = false; // Set initial direction to descending
    sortTable("contribution", false); // Initial sort descending
    updateIndicators(headers, contributionHeader, false); // Show descending arrow
  }
}

export function sortTable(columnClass, asc = true) {
  const rows = Array.from(
    document.querySelectorAll(".js-project-table .table-row")
  );

  rows.sort((a, b) => {
    if (columnClass === "contribution") {
      // Directly access the numeric data-contribution attribute for sorting
      const aValue = Number(
        a.querySelector(`.table__summary__${columnClass}`).dataset.contribution
      );
      const bValue = Number(
        b.querySelector(`.table__summary__${columnClass}`).dataset.contribution
      );
      return asc ? aValue - bValue : bValue - aValue;
    } else {
      const aText = a
        .querySelector(`.table__summary__${columnClass}`)
        .innerText.trim();
      const bText = b
        .querySelector(`.table__summary__${columnClass}`)
        .innerText.trim();

      if (columnClass === "end-date") {
        const aDate = new Date(aText);
        const bDate = new Date(bText);
        return asc ? aDate - bDate : bDate - aDate;
      } else {
        return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
      }
    }
  });

  const table = document.querySelector(".js-project-table");
  rows.forEach((row) => table.appendChild(row));
}

function updateIndicators(headers, activeHeader, asc) {
  headers.forEach((header) => {
    const arrow = header.querySelector(".sort-arrow");
    if (arrow) arrow.textContent = "";
  });

  const activeArrow = activeHeader.querySelector(".sort-arrow");
  if (activeArrow) {
    activeArrow.textContent = asc ? "↑" : "↓";
  }
}
