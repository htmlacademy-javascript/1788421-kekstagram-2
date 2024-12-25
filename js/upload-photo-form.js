import { isEscapeKey } from './util';
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
  // pristine.validate();
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


//==========================

imgFiled.addEventListener('change', onFileInputChange)
cancelBtn.addEventListener('click', onCancelBtnClick);
uploadForm.addEventListener('submit', onFormSubmit);

//==========================

export {
  uploadForm,
  hashtagFiled,
  commentFiled
}