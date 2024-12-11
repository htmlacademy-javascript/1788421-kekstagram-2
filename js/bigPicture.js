import { isEscapeKey } from './util';
//==========================
const BodyElement = document.querySelector('body');

const bigPictureElem = document.querySelector('.big-picture');
//==========================
const bigPictureImg = bigPictureElem.querySelector('.big-picture__img img');

const SocialDescription = bigPictureElem.querySelector('.social__caption');

const bigPictureLikes = bigPictureElem.querySelector('.likes-count');

// кнопка "Х" для закрытия МО с большим изображением
const bigPictureBtnCloser = bigPictureElem.querySelector('.big-picture__cancel');

//==========================
const COUNT_STEP = 5; // по сколько комментариев выводить

let commentsShown = 0; // счетчик показанных элементов - увеличивается по клику на "еще"

let comments = []; // массив выводимых комментариев

const commenShownCountElement = bigPictureElem.querySelector('.social__comment-shown-count'); // выведено комментариев
const commenTotalCountElement = bigPictureElem.querySelector('.social__comment-total-count'); // всего комментариев

const commentListElement = bigPictureElem.querySelector('.social__comments'); // спосок комментариев <ul>

const commentsLoaderElement = bigPictureElem.querySelector('.comments-loader'); //кнопка "еще"

//==========================
// шаблон с комментарием
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

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const rendComms = comments.slice(commentsShown, commentsShown + COUNT_STEP);
  const viewComms = rendComms.length + commentsShown;

  rendComms.forEach((comment) => {
    const crComm = createComment(comment);
    fragment.append(crComm);
  });

  commentListElement.append(fragment);
  commenShownCountElement.textContent = viewComms;
  commenTotalCountElement.textContent = comments.length;

  if (viewComms >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }

  commentsShown += COUNT_STEP;
};

// функция для обработчика  клика по кнопке "еще"
const onCommentLoaderClick = () => renderComments();

// очистка комментариев
const clearComments = () => {
  commentsShown = 0;
  commentListElement.innerHTML = '';
  commentsLoaderElement.classList.remove('hidden');
  commentsLoaderElement.removeEventListener('click', onCommentLoaderClick);
};


// скрыть МО: добавить класс для скрытия и удалить обработчик
const hideBigPictyre = () => {
  bigPictureElem.classList.add('hidden');
  BodyElement.classList.remove('modal-open');

  // удаляю обработчик для кнопки "Х"
  document.removeEventListener('keydown', onDocumentKeydown);

  clearComments();
};

// функция для обработчика клика по кнопке "Х"
const onCancelButttonClick = () => {
  hideBigPictyre();
};

// функция для нажатия Esc
function onDocumentKeydown(evt) {
  isEscapeKey(evt);
  hideBigPictyre();
}

// функция показа МО
const showBigPicture = (data) => {
  commentListElement.innerHTML = '';

  bigPictureElem.classList.remove('hidden');
  BodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);

  comments = data.comments;

  if (comments.length > 0) {
    renderComments();
  }

  commentsLoaderElement.addEventListener('click', onCommentLoaderClick);
};

bigPictureBtnCloser.addEventListener('click', onCancelButttonClick);

export { showBigPicture };
