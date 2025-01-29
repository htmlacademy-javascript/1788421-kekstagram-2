import './scale.js';
import './effects.js';
import './add-photo.js';

import { getData } from './api.js';
import { renderGallery } from './gallery.js';
import { showAlert } from './show-message.js';
import {initFilters} from './filterts.js';

try {
  const data = await getData();
  renderGallery(data);
  initFilters(data);
} catch (err) {
  showAlert(err.message);
}
