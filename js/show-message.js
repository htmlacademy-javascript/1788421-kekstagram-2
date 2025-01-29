import { ALERT_SHOW_TIME } from './constants.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const successMessage = document.querySelector('#success').content.querySelector('.success');

const errorMessage = document.querySelector('#error').content.querySelector('.error');

const body = document.querySelector('body');

const showAlert = (errMessage) => {
  const dataErrorElem = dataErrorTemplate.cloneNode(true);

  if (errMessage) {
    dataErrorElem.querySelector('.data-error__title').textContent = errMessage;
  }
  document.body.append(dataErrorElem);

  setTimeout(() => {
    dataErrorElem.remove();
  }, ALERT_SHOW_TIME
  );
};

const onBodyClick = (evt) => {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
};

function hideMessage() {
  const messageElem = document.querySelector('.success') || document.querySelector('.error');

  messageElem.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onBodyClick);
}

const showMessage = (messageElement, closeBtnClass) => {
  body.append(messageElement);
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onBodyClick);

  messageElement.querySelector(closeBtnClass).addEventListener('click', hideMessage);
};

const showSuccessMessage = () => {
  showMessage(successMessage, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};
export {
  showAlert,
  showSuccessMessage,
  showErrorMessage
};
