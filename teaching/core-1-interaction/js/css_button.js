function toggleStylesheets() {
  const linkElements = document.querySelectorAll('link[rel="stylesheet"]');

  linkElements.forEach((linkElement) => {
    if (linkElement.disabled) {
      linkElement.removeAttribute("disabled");
    } else {
      linkElement.setAttribute("disabled", "true");
    }
  });
}

const cssButton = document.querySelector('.js-css-button');
cssButton.addEventListener('click', toggleStylesheets);
