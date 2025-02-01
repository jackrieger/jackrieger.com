export function setTime() {
  // Define the last updated time as a single ISO string
  const lastUpdatedISO = "2024-11-09T14:27:00"; // Use format "YYYY-MM-DDTHH:MM:SS"

  // Parse the ISO string into a Date object
  const updated_at = new Date(lastUpdatedISO);
  const today = new Date();
  const time_since = today - updated_at;

  let time_phrase;
  const hour_ms = 3600000;
  const day_ms = 86400000;
  const week_ms = 1209600000;
  const month_ms = 2628000000;

  if (time_since < hour_ms) time_phrase = "few moments";
  else if (time_since < day_ms) time_phrase = "few hours";
  else if (time_since < day_ms * 2) time_phrase = "day";
  else if (time_since < week_ms) time_phrase = "few days";
  else if (time_since < week_ms * 2) time_phrase = "week";
  else if (time_since < month_ms * 2) time_phrase = "few weeks";
  else time_phrase = "long time";

  document.querySelector(
    ".js-update-notice"
  ).innerText = `Updated: a ${time_phrase} ago`;
}

export function setEmailCopy() {
  const el = document.querySelector(".js-email-copy");

  if (!el) return;

  el.addEventListener("click", function (e) {
    e.preventDefault();

    const html = el.innerHTML;
    const email = "jack@jackrieger.com";

    navigator.clipboard.writeText(email).then(
      function () {
        el.innerText = "Email copied!";
      },
      function (err) {
        console.error("Could not copy email.", err);
      }
    );

    setTimeout(function () {
      el.innerHTML = html;
    }, 2000);
  });
}

export function setJobText() {
  const titles = [
    "coder",
    "developer",
    "full-stack developer",
    "programmer",
    "software engineer",
    "technologist",
    "web developer",
  ];

  const titleElement = document.querySelector(".js-job-title");

  if (!titleElement) return;

  function getJobTitle() {
    return titles[Math.floor(Math.random() * titles.length)];
  }

  titleElement.addEventListener("click", function () {
    const current = titleElement.innerHTML;
    let selection = getJobTitle();

    while (current === selection) {
      selection = getJobTitle();
    }

    titleElement.innerText = selection;
  });
}
