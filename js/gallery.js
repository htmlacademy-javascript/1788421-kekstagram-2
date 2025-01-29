import {
  createMiniImgs
} from './generate-mini-imgs.js';

import {
  showBigPicture
} from './big-picture.js';


const container = document.querySelector('.pictures');

const clearGallery = () => {
  container.querySelectorAll('a.picture').forEach((item) => item.remove());
};

let localPictures = [];

const renderGallery = (pictures) => {
  localPictures = [... pictures];

  createMiniImgs(pictures, container);
};

container.addEventListener('click', (evt) => {
  const currentImgNode = evt.target.closest('[data-picture-id]');
  if (!currentImgNode) {
    return;
  }
  evt.preventDefault();
  const imgId = currentImgNode.dataset.pictureId;
  const currentImg = localPictures.find((item) => item.id === +imgId);
  showBigPicture(currentImg);
});

export {
  renderGallery,
  clearGallery
};
