import './scale.js';
import './form-valid.js';
import './effects.js';

import { getData, sendData } from "./api";
import { renderGallery } from "./gallery";

import {
  showAlert,
  showSuccessMessage,
  showErrorMessage
} from './show-message.js';

import { setOnFormSubmit, hideModal } from './upload-photo-form.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    console.log('Ok!')

    showSuccessMessage();
  } catch {
    console.log('Err!')

    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
}
catch (err) {
  showAlert(err.message);
};
