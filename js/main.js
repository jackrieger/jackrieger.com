'use strict';

const Site = {};

Site.setModal = function () {
  const modal = document.querySelector('.info_modal');
  const button = document.querySelector('.info_button');
  const projects = document.querySelector('.projects_container');
  let state = false;

  function show(el) {
    el.classList.remove('hide');
    el.classList.add('show');
  }

  function hide(el) {
    el.classList.remove('show');
    el.classList.add('hide');
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function toggleModal() {
    if (state === false) {
      show(modal);
      hide(projects);
      scrollToTop();
      button.innerHTML = 'Close';
      state = true;
    } else {
      show(projects);
      hide(modal);
      button.innerHTML = 'About&hairsp;/&hairsp;Contact';
      state = false;
    }
  }

  button.addEventListener('click', toggleModal);
}

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
  Site.setModal();
  Site.setNewTabLinks();
}());