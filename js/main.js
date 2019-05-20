'use strict';

const Site = {};

Site.setNewTabLinks = function () {
  const links = document.querySelectorAll('a');
  for (const link of links) {
    if (link.classList.contains('no_tab') === true) {
      return;
    } else if (link.hasAttribute('download') === true) {
      return;
    } else {
      link.setAttribute('target', '_blank');
    }
  }
}

Site.init = (function () {
  Site.setNewTabLinks();
})();