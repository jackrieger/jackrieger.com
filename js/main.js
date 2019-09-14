'use strict';

const Site = {};

Site.setModal = function () {
  const modal = document.querySelector('.info_modal');
  const button = document.querySelector('.info_button');
  let state = false;

  function show() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    button.innerText = 'Close';
    state = true;
  }

  function hide() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    button.innerText = 'Info';
    state = false;
  }

  function toggleModal() {
    if (state === false) {
      show();
    } else {
      hide();
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