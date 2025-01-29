const thumbnailTemplate = document.querySelector('#picture').content;

const createThumbnail = ({ id, url, description, comments, likes }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const img = thumbnail.querySelector('.picture__img');
  const comm = thumbnail.querySelector('.picture__comments');
  const like = thumbnail.querySelector('.picture__likes');
  const elemTumb = thumbnail.querySelector('.picture');

  elemTumb.dataset.pictureId = id;
  img.src = url;
  img.alt = description;
  comm.textContent = comments.length;
  like.textContent = likes;
  return thumbnail;
};

const createMiniImgs = (pictures, container) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};
export { createMiniImgs };
