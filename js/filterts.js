import { debounce } from './util';
import {TIMEOUT_DELAY } from './constants.js';

import {
  renderGallery,
  clearGallery
} from './gallery.js';

import {
  sortRandomy,
  sortByComments
} from './util';


const PICTS_COUNT = 10;
const Filter = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

const ACTIVE_BTN_CLASS = 'img-filters__button--active';
const filterElement = document.querySelector('.img-filters');

let currentFilter = Filter.default;
let pictures = [];

const renderGalleryFiltered = (filtPict) => {
  clearGallery();
  renderGallery(filtPict);
};

const getFilteredPict = () => {
  let filteredPicts = [];
  switch (currentFilter) {
    case Filter.random:
      console.log('случайные');
      filteredPicts = sortRandomy(pictures).slice(0, PICTS_COUNT);
      break;

    case Filter.discussed:
      console.log('по комментам');
      filteredPicts = pictures.toSorted(sortByComments);
      break;

    default:
      console.log('все');
      filteredPicts = pictures;
  }

  debounce(renderGalleryFiltered(filteredPicts), TIMEOUT_DELAY);
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
