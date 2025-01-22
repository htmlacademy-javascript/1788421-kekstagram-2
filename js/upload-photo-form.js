import { isEscapeKey } from './util';
import { pristine } from './form-valid';
import { resetScale } from './scale';

import {
  // initEffect,
  resetEffect
} from './effects';
//==========================

const uploadForm = document.querySelector('.img-upload__form');

const bodyElement = document.querySelector('body');

const overlay = document.querySelector('.img-upload__overlay');

const cancelBtn = document.querySelector('.img-upload__cancel');

const imgFiled = document.querySelector('#upload-file');

const hashtagFiled = document.querySelector('.text__hashtags');

const commentFiled = document.querySelector('.text__description');

const submitBtn = document.querySelector('.img-upload__submit');

//==========================

// функция для события отправки формы
const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const isTextFiledFocused = () => document.activeElement === hashtagFiled || document.activeElement === commentFiled;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFiledFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const hideModal = () => {
  // сбрасываем всё
  uploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffect();

  overlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

const showModal = () => {
  overlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  pristine.validate();
  // initEffect();

  document.addEventListener('keydown', onDocumentKeydown);
};
//==========================

imgFiled.addEventListener('change', showModal);
cancelBtn.addEventListener('click', hideModal);
submitBtn.addEventListener('click', onFormSubmit);
//==========================

export {
  uploadForm,
  hashtagFiled,
  commentFiled
};
