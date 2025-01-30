import {
  debounce,
  sortRandomy,
  sortByComments
} from './util.js';
import {
  TIMEOUT_DELAY,
  PICTS_COUNT,
  Filter,
  ACTIVE_BTN_CLASS
} from './constants.js';

import {
  renderGallery,
  clearGallery
} from './gallery.js';

const filterElement = document.querySelector('.img-filters');

let currentFilter = Filter.default;
let pictures = [];

const renderGalleryFiltered = (filtPict) => {
  clearGallery();
  renderGallery(filtPict);
};

const debouncedRender = debounce(renderGalleryFiltered, TIMEOUT_DELAY);

const getFilteredPict = () => {
  let filteredPicts = [];
  switch (currentFilter) {
    case Filter.random:
      filteredPicts = sortRandomy(pictures).slice(0, PICTS_COUNT);
      break;

    case Filter.discussed:
      filteredPicts = pictures.toSorted(sortByComments);
      break;

    default:
      filteredPicts = pictures;
  }
  debouncedRender(filteredPicts);
};

const onFilterChange = (evt) => {
  const clickedBtn = evt.target;
  const activeBtn = filterElement.querySelector(`.${ACTIVE_BTN_CLASS}`);

  if (!clickedBtn.classList.contains('img-filters__button')) {
    return;
  }
  if (clickedBtn === activeBtn) {
    return;
  }
  clickedBtn.classList.add(ACTIVE_BTN_CLASS);
  activeBtn.classList.remove(ACTIVE_BTN_CLASS);
  currentFilter = clickedBtn.id;

  getFilteredPict();
};

const initFilters = (pictData) => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = pictData;
};

export {
  initFilters
};
