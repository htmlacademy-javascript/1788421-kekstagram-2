import './scale.js';
import './form-valid.js';
import './effects.js';

import { getData } from './api';
import { renderGallery } from './gallery';

import {
  showAlert,
} from './show-message.js';

import './upload-photo-form.js';

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
