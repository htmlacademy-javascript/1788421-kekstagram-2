import {
  createMiniImgs
} from './generate-mini-imgs.js';

import {
  showBigPicture
} from './big-picture.js';


// куда вставить все готовые фотки
const container = document.querySelector('.pictures');


const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {

    //целевой элемент, по которому кликнули
    const currentImgNode = evt.target.closest('[data-picture-id]');

    if (!currentImgNode) {
      return;
    }

    evt.preventDefault();

    const imgId = currentImgNode.dataset.pictureId;
    const currentImg = pictures.find((item) => item.id === +imgId);
    // console.log(currentImg);

    showBigPicture(currentImg);
  });

  createMiniImgs(pictures, container);
};

export { renderGallery };
