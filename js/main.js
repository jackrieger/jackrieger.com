'use strict';

const Site = {};

Site.setModal = function () {
  const modal = document.querySelector('.info-modal');
  const button = document.querySelector('.info-button');
  const project_container = document.querySelector('.project-container');

  let is_modal_active = false;
  let previous_scroll_position;

  function toggleModal() {
    function toggle() {
      [modal, project_container].forEach(function (el) {
        el.classList.toggle('hide');
      });
    }

    if (is_modal_active === false) {
      previous_scroll_position = document.documentElement.scrollTop;

      toggle();
      window.scrollTo(0, 0);

      button.innerHTML = 'Close';
      is_modal_active = true;
    } 
    else {
      toggle();
      window.scrollTo(0, previous_scroll_position);

      button.innerHTML = 'About&hairsp;/&hairsp;Contact';
      is_modal_active = false;
    }
  }

  button.addEventListener('click', toggleModal);
};

Site.setNewTabLinks = function () {
  const links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (link.hasAttribute('data-disable-new-tab') === true) {
      return;
    } 
    else {
      link.setAttribute('target', '_blank');
    }
  });
};

Site.init = (function () {
  Site.setModal();
  Site.setNewTabLinks();
}());
