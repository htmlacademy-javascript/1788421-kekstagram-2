import { showAlert } from './show-message.js';
import { showModal } from './upload-photo-form.js';

const FileTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

const uploadForm = document.querySelector('.img-upload__form');
const imgField = uploadForm.querySelector('#upload-file');
const imgElement = uploadForm.querySelector('.img-upload__preview img');
const effectsPreview = uploadForm.querySelectorAll('.effects__preview');

const onFileInputChange = () => {

  // alert('Загрузить!');

  const file = imgField.files[0];
  const fileName = file.name.toLowerCase();

  // console.log(fileName);

  // const fileType = file.type;
  // как сделать проверку через него?

  const epxFile = fileName.split('.').pop(); // расширение файла

  const trueFileType = FileTypes.includes(epxFile);

  // console.log(trueFileType);

  if (trueFileType) {

    // preview.src = URL.createObjectURL(file);


    const url = URL.createObjectURL(file);
    imgElement.src = url;
    effectsPreview.forEach((elem) => {
      elem.style.backgroundImage = `url(${url})`;
    });

    showModal();

  } else {
    const errMess = 'Не правильный тип файла!';
    showAlert(errMess);
    // file.reset();
    // return;
  }
};

imgField.addEventListener('change', onFileInputChange);

export { onFileInputChange };
