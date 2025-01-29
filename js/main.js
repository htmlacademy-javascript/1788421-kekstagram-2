import './scale.js';
// import './form-valid.js'; УБРАТЬ!!!
import './effects.js';

import { getData } from './api.js';
import { renderGallery } from './gallery.js';

import {
  showAlert,
} from './show-message.js';

// import './upload-photo-form.js';

import {initFilters} from './filterts.js';

import './add-photo.js';

try {
  const data = await getData();
  renderGallery(data);
  initFilters(data);
} catch (err) {
  showAlert(err.message);
}
