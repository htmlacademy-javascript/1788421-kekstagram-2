import {
  createMiniImgs
} from './generate-mini-imgs.js';

import {
  showBigPicture
} from './big-picture.js';


const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {

    const currentImgNode = evt.target.closest('[data-picture-id]');

    if (!currentImgNode) {
      return;
    }

    evt.preventDefault();

    const imgId = currentImgNode.dataset.pictureId;
    const currentImg = pictures.find((item) => item.id === +imgId);

    showBigPicture(currentImg);
  });

  createMiniImgs(pictures, container);
};

export { renderGallery };
