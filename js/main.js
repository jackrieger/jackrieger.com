'use strict';

const Site = {};

Site.setNewTabLinks = function () {
  const links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (link.hasAttribute('data-disable-new-tab') === true) {
      return;
    } else {
      link.setAttribute('target', '_blank');
    }
  });
}

Site.init = (function () {
  Site.setNewTabLinks();
}());