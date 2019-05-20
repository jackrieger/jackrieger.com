'use strict';

const Site = {};

Site.imageData = {
  "procell": 9,
  "supreme": 6,
  "fantasy": 0
}

Site.handleImages = function () {
  const all_projects = document.querySelectorAll('.project');
  for (const project of all_projects) {
    const id = project.id;
    const img = document.querySelector(`#${id} img`);
    const img_counter = document.querySelector(`#${id} .img_counter`);
    const img_count = Site.imageData[id];
    let current_img = 0;
    function updateImage() {
      img.src = `/assets/images/${id}-${current_img}.png`;
      img_counter.innerText = `${current_img + 1}/${img_count}`;
    }
    img.addEventListener('click', function () {
      current_img += 1;
      if (current_img === img_count) {
        current_img = 0;
      }
      updateImage();
    });
    updateImage();
  }
}

Site.init = (function () {
  Site.handleImages();
})();