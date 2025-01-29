import {
  STEP_SCALE,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE
} from './constants.js';

const elementUpload = document.querySelector('.img-upload');
const smallerBtn = elementUpload.querySelector('.scale__control--smaller');
const biggerBtn = elementUpload.querySelector('.scale__control--bigger');
const imgPreviw = elementUpload.querySelector('.img-upload__preview img');
const scaleInput = elementUpload.querySelector('.scale__control--value');

const scaleImg = (value) => {
  imgPreviw.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerClick = () => {
  scaleImg(Math.max(parseInt(scaleInput.value, 10) - STEP_SCALE, MIN_SCALE));
};

const onBiggerClick = () => {
  scaleImg(Math.min(parseInt(scaleInput.value, 10) + STEP_SCALE, MAX_SCALE));
};

const resetScale = () => {
  scaleImg(DEFAULT_SCALE);
};

smallerBtn.addEventListener('click', onSmallerClick);
biggerBtn.addEventListener('click', onBiggerClick);

export { resetScale };
