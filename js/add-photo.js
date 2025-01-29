import { showAlert } from './show-message.js';
import { showModal } from './upload-photo-form.js';

const FileTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

const uploadForm = document.querySelector('.img-upload__form');
const imgField = uploadForm.querySelector('#upload-file');
const imgElement = uploadForm.querySelector('.img-upload__preview img');
const effectsPreview = uploadForm.querySelectorAll('.effects__preview');

const onFileInputChange = () => {
  const file = imgField.files[0];
  const fileName = file.name.toLowerCase();
  const epxFile = fileName.split('.').pop();
  const trueFileType = FileTypes.includes(epxFile);

  if (trueFileType) {
    const url = URL.createObjectURL(file);
    imgElement.src = url;
    effectsPreview.forEach((elem) => {
      elem.style.backgroundImage = `url(${url})`;
    });
    showModal();
  } else {
    const errMess = 'Не правильный тип файла!';
    showAlert(errMess);
  }
};

imgField.addEventListener('change', onFileInputChange);

export { onFileInputChange };
