import {
  COUNT_COMMENT_STEP
} from './constants';
const bodyElement = document.querySelector('body');

const bigPictureElem = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElem.querySelector('.big-picture__img img');
const SocialDescription = bigPictureElem.querySelector('.social__caption');
const bigPictureLikes = bigPictureElem.querySelector('.likes-count');
const bigPictureBtnCloser = bigPictureElem.querySelector('.big-picture__cancel');

let commentsShown = 0;
let comments = [];

const commentShownCountElement = bigPictureElem.querySelector('.social__comment-shown-count');
const commentTotalCountElement = bigPictureElem.querySelector('.social__comment-total-count');
const commentListElement = bigPictureElem.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElem.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment').content;

const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  SocialDescription.textContent = description;
  bigPictureLikes.textContent = likes;
};

const createComment = ({ id, avatar, message }) => {
  const comment = commentTemplate.cloneNode(true);
  const commentImg = comment.querySelector('.social__picture');
  const commentMessage = comment.querySelector('.social__text');

  commentImg.src = avatar;
  commentImg.alt = id;
  commentMessage.textContent = message;

  return comment;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const rendComms = comments.slice(commentsShown, commentsShown + COUNT_COMMENT_STEP);
  const viewComms = rendComms.length + commentsShown;

  rendComms.forEach((comment) => {
    const crComm = createComment(comment);
    fragment.append(crComm);
  });

  commentListElement.append(fragment);
  commentShownCountElement.textContent = viewComms;
  commentTotalCountElement.textContent = comments.length;

  if (viewComms >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
  commentsShown += COUNT_COMMENT_STEP;
};

const onCommentLoaderClick = () => renderComments();

const clearComments = () => {
  commentsShown = 0;
  commentListElement.innerHTML = '';
  commentsLoaderElement.classList.remove('hidden');
  commentsLoaderElement.removeEventListener('click', onCommentLoaderClick);
};

const hideBigPictyre = () => {
  bigPictureElem.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  clearComments();
};

const onCancelButttonClick = () => {
  hideBigPictyre();
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentKeydown(evt) {
  isEscapeKey(evt);
  hideBigPictyre();
}

const showBigPicture = (data) => {
  commentListElement.innerHTML = '';

  bigPictureElem.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

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
