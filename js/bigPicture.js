import { isEscapeKey } from './util';
//==========================

const bigPictureElem = document.querySelector('.big-picture');
//==========================
const bigPictureImg = bigPictureElem.querySelector('.big-picture__img img');

const SocialDescription = bigPictureElem.querySelector('.social__caption');

const bigPictureLikes = bigPictureElem.querySelector('.likes-count');
//==========================

const commentCountElem = bigPictureElem.querySelector('.social__comment-count');

const commentListElement = bigPictureElem.querySelector('.social__comments');

const commentsLoaderElem = bigPictureElem.querySelector('.comments-loader'); //кнопка "еще"

const BodyElement = document.querySelector('body');

const bigPictureBtnCloser = bigPictureElem.querySelector('.big-picture__cancel');

//==========================
const commentElem = document.querySelector('#comment').content;
//==========================

// функция заполнения МО: img, лайки и подпись
const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  SocialDescription.textContent = description;
  bigPictureLikes.textContent = likes;
};

// функция создания комментария
const createComment = ({ id, avatar, message }) => {
  const comment = commentElem.cloneNode(true); // полный клон с темплейта

  const commentImg = comment.querySelector('.social__picture');
  const commentMessage = comment.querySelector('.social__text');

  commentImg.src = avatar;
  commentImg.alt = id;
  commentMessage.textContent = message;

  return comment;
};

// функция заполнения комментариев
const renderComments = (comments) => {
  commentListElement.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  commentListElement.append(fragment);
};

// скрыть МО: добавить класс для скрытия и удалить обработчик
const hideBigPictyre = () => {
  bigPictureElem.classList.add('hidden');
  BodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);

  // commentsShown = 0;
};

// функция для нажатия Esc
function onDocumentKeydown (evt) {
  isEscapeKey(evt);
  hideBigPictyre();
}

// функция показа МО
const showBigPicture = (data) => {
  bigPictureElem.classList.remove('hidden');
  BodyElement.classList.add('modal-open');
  commentsLoaderElem.classList.add('hidden');
  commentCountElem.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments); // передаем только объект с комментариями
};

const onCancelButttonClick = () => {
  hideBigPictyre();
};

bigPictureBtnCloser.addEventListener('click', onCancelButttonClick);

export { showBigPicture };
