import {
  sortRandomy,
  sortByComments
  } from './util';

const PICTS_COUNT = 10;
const Filter = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
}

const filterElement = document.querySelector('.img-filters');
 
let currentFilter = Filter.default;
 let pictures = [];

const initFilter = () => {filterElement.classList.remove('img-filters--inactive')
  // setOnfilterClick();
};

// toSorted можно вместо  sort?
// const getFilteredPict = () => {
//   switch (currentFilter) {
//     case Filter.random: 
//     return pictures.toSorted(sortRandomy).slice(0, PICTS_COUNT);
  
//     case Filter.discussed: 
//     return pictures.toSorted(sortByComments);

//     default:
//       return pictures;  
//   }
// }

const setOnfilterClick = () => {
  filterElement.addEventListener('click', (evt) => {

  if(!evt.target.classList.contains('img-filters__button')) {
  return
};

const clickedBtn = evt.target;
if (clickedBtn.id === currentFilter) {
  return;
}

filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');

clickedBtn.classList.add('img-filters__button--active');
currentFilter = clickedBtn.id;

// cb(getFilteredPict());

switch (currentFilter) {
  case Filter.random: 
  console.log('случайные');
  return pictures.toSorted(sortRandomy).slice(0, PICTS_COUNT);

  case Filter.discussed: 
  console.log('по комментам');
  return pictures.toSorted(sortByComments);

  default:
    console.log('все');
    return pictures;  
}

  });
  
};


// filterElement.addEventListener('click', setOnfilterClick);


export {initFilter,
  setOnfilterClick
};