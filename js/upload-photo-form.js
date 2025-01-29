import {
   pristineReset,
  pristineIsValid
 } from './form-valid.js';
import { resetScale } from './scale.js';
import { SubmitBtnText } from './constants.js';
import {
  resetEffect
} from './effects';

import {
  showSuccessMessage,
  showErrorMessage
} from './show-message';

import {
  sendData
} from './api';

// import {onFileInputChange} from './add-photo.js';

const uploadForm = document.querySelector('.img-upload__form');
const bodyElement = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const cancelBtn = document.querySelector('.img-upload__cancel');
// const imgField = document.querySelector('#upload-file');
const hashtagFiled = document.querySelector('.text__hashtags');
const commentFiled = document.querySelector('.text__description');
const submitBtn = document.querySelector('.img-upload__submit');

const toggleSubmitBtn = (isDisabled) => {
  submitBtn.disabled = isDisabled;
  submitBtn.textContent = isDisabled ? SubmitBtnText.SUBMITTING : SubmitBtnText.IDLE;
};

const hideModal = () => {
  uploadForm.reset();
  pristineReset();
  resetScale();
  resetEffect();
  overlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

uploadForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  if (pristineIsValid) {
    toggleSubmitBtn(true);
    try {
      await sendData(new FormData(uploadForm));
      hideModal();
      showSuccessMessage();
    } catch {
      showErrorMessage();
    }
    toggleSubmitBtn();
  }
});

const isTextFiledFocused = () => document.activeElement === hashtagFiled || document.activeElement === commentFiled;

const isErrorMessageShown = () => document.querySelector('.error');

const isEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFiledFocused() && !isErrorMessageShown()) {
    evt.preventDefault();
    hideModal();
  }
}

const showModal = () => {
  // alert('showModal');
  // onFileInputChange();

  overlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  // pristineIsValid();
  document.addEventListener('keydown', onDocumentKeydown);
};

// imgField.addEventListener('change', showModal);
cancelBtn.addEventListener('click', hideModal);

export {
  showModal
};
