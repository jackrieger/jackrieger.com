// sorting.js

export function setSorting() {
  const headers = document.querySelectorAll(".js-sort-header");
  let isInitialLoad = true;

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      isInitialLoad = false;
      const column = header.dataset.column;
      let asc = header.dataset.asc === "true" ? false : true;

      sortTable(column, asc, isInitialLoad);
      updateIndicators(headers, header, asc);
      header.dataset.asc = asc;
    });
  });

  // Initial sort by "contribution" in descending order
  const contributionHeader = document.querySelector(
    ".js-sort-header[data-column='contribution']"
  );
  if (contributionHeader) {
    contributionHeader.dataset.asc = false;
    sortTable("contribution", false, isInitialLoad);
    updateIndicators(headers, contributionHeader, false);
  }
}

export function sortTable(column, asc = true, isInitialLoad = false) {
  const rows = Array.from(
    document.querySelectorAll(".js-project-table .table__details")
  );

  rows.sort((a, b) => {
    // Only consider priority on initial load
    if (isInitialLoad) {
      const aPriority = a.dataset.priority ? Number(a.dataset.priority) : Infinity;
      const bPriority = b.dataset.priority ? Number(b.dataset.priority) : Infinity;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
    }

    // Then sort by the selected column
    if (column === "contribution") {
      const aValue = Number(
        a.querySelector(`.table__summary__${column}`).dataset.contribution
      );
      const bValue = Number(
        b.querySelector(`.table__summary__${column}`).dataset.contribution
      );
      return asc ? aValue - bValue : bValue - aValue;
    } else {
      const aText = a
        .querySelector(`.table__summary__${column}`)
        .innerText.trim();
      const bText = b
        .querySelector(`.table__summary__${column}`)
        .innerText.trim();

      if (column === "date") {
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
    const arrow = header.querySelector(".js-sort-arrow");
    if (arrow) arrow.textContent = "";
  });

  const activeArrow = activeHeader.querySelector(".js-sort-arrow");
  if (activeArrow) {
    activeArrow.textContent = asc ? "↑" : "↓";
  }
}
