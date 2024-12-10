const COMMEMTS_PER_PART = 5;

const commentCountElem = bigPictureElem.querySelector('.social__comment-count');

const commentListElement = bigPictureElem.querySelector('.social__comments');

const commentsLoaderElem = bigPictureElem.querySelector('.comments-loader'); //кнопка "еще"


const commenShownCountElement = bigPictureElem.querySelector('.social__comment-shown-count');
const commenTotalCountElement = bigPictureElem.querySelector('.social__comment-total-count');

let commentsShown = 0; // счетчик показанных элементов - увеличивается по клику на "еще"

let comments = [];


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


// функция генерации комментариев с добавлением по 5 штук
const renderComments = () => {
  commentsShown += COMMEMTS_PER_PART;

  if (commentsShown >= comments.length) {
    commentsLoaderElem.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElem.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  commenShownCountElement.textContent = commentsShown;
  commenTotalCountElement.textContent = comments.length;
};

const onCommentLoaderClick = () => renderComments();

// функция показа МО
const showBigPicture = (data) => {
  bigPictureElem.classList.remove('hidden');
  BodyElement.classList.add('modal-open');
  // commentsLoaderElem.classList.add('hidden');
  // commentCountElem.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);

  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

// скрыть МО: добавить класс для скрытия и удалить обработчик
const hideBigPictyre = () => {
  bigPictureElem.classList.add('hidden');
  BodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);

  commentsShown = 0; // обнулить счетчик показанных комментариев
};


commentsLoaderElem.addElementListener('click', onCommentLoaderClick);
