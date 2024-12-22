import { isEscapeKey } from './util';
//==========================
const MAX_HESHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const errorText = {
INVALID_COUNT: `не больше ${MAX_HESHTAG_COUNT} хештегов!`,
NO_REPEAT: 'Не повторяться!',
INVALID_PATTERN: 'Неправильный символ!'
}
//==========================

// форма загрузки нового изображения
const uploadForm = document.querySelector('.img-upload__form');

const BodyElement = document.querySelector('body');

// форма редактирования изображения
const overlay = document.querySelector('.img-upload__overlay');

// кнопка закрытия формы редактирования изображения
const cancelBtn = document.querySelector('.img-upload__cancel');

// поле загрузки изображения
const imgFiled = document.querySelector('#upload-file');

// поле для хештегов
const hashtagFiled = document.querySelector('.text__hashtags');

// поле для комментариев
const commentFiled = document.querySelector('.text__description');

//==========================

// функция для события отправки формы onFormSubmit
const onFormSubmit = (evt) => {
  // отменяю отправку формы по умалчанию
  evt.preventDefault();

  //валидирую форму 
  pristine.validate();
}

// функция для отслеживания фокуса в полях формы
const isTextFiledFocused = () => document.activeElement === hashtagFiled || document.activeElement === commentFiled;

// функция для обработчика нажатия Esc 
const onDocumentKeydown = (evt) => {
   if (isEscapeKey(evt) && !isTextFiledFocused()) {
    evt.preventDefault();
    hideModal();
   }
}

// функция закрытия МО
const hideModal = () => {
// сбрасываем все данные для формы и для пристин
uploadForm.reset();
pristine.reset();

overlay.classList.add('hidden');
BodyElement.classList.remove('modal-open');

// убрать обработчик нажатия Esc
document.removeEventListener('keydown', onDocumentKeydown);
}

// функция для обработчика клика по кнопке закрытия МО
const onCancelBtnClick = () => hideModal();

// функция открытия МО
const showModal = () => {
  overlay.classList.remove('hidden');
  BodyElement.classList.add('modal-open');

  // добавить обработчик нажатия Esc
document.addEventListener('keydown', onDocumentKeydown);
}

// функция для обработчика на imgFiled - показать МО
const onFileInputChange = () => showModal();

// ПРИСТИН 
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
}
// true ? - надо?
);

//
const normalizeTags = (tagStr) => tagStr.trim().split(' ').filter((tag) => tag.length <=2);

// функции с правилами валидации
const hasValidCount = (value) => normalizeTags(value).length <= MAX_HESHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaceTags = normalizeTags(value).map((tag) => tag.toLowerCase());

  // сравниваем длину исходного массива с длиной массива уникальных значений
  return lowerCaceTags.length === new Set(lowerCaceTags).size;
  // new Set - массив с уникальными #хештегами
};

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));


// // Правила валидации для поля #хештег 
// pristine.addValidator (
//   hashtagFiled,
//   hasValidCount,
//   errorText.INVALID_COUNT,
//   3,
//   true
// );

// pristine.addValidator (
//   hashtagFiled,
//   hasUniqueTags,
//   errorText.NO_REPEAT,
//   2,
//   true
// );

pristine.addValidator (
  hashtagFiled,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);

imgFiled.addEventListener('change', onFileInputChange)
cancelBtn.addEventListener('click', onCancelBtnClick);
uploadForm.addEventListener('submit', onFormSubmit);