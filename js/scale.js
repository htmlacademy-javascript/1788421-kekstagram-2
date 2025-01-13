const STEP = 25;
const MIN = 25;
const MAX = 100;
const DEFAULT = 100;

const elementUpload = document.querySelector('.img-upload');
const smallerBtn = elementUpload.querySelector('.scale__control--smaller');
const biggerBtn = elementUpload.querySelector('.scale__control--bigger');
const imgPreviw = elementUpload.querySelector('.img-upload__preview img');
const scaleInput = elementUpload.querySelector('.scale__control--value');

//========================

// функция для изменения размеров изображения
const scaleImg = (value) => {
  imgPreviw.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerClick = () => {
   scaleImg(Math.max(parseInt(scaleInput.value, 10) - STEP, MIN));
};

const onBiggerClick = () => {
   scaleImg(Math.min(parseInt(scaleInput.value, 10) + STEP, MAX));
};

//функция для сброса в начальное положение, вызывается при закрытии формы и нажатии на "Оригинал"
const resetScale = () => {
  scaleImg(DEFAULT);
};

smallerBtn.addEventListener('click', onSmallerClick);
biggerBtn.addEventListener('click', onBiggerClick);

export {resetScale};
