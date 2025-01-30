import {EFFECTS} from './constants.js';

const elementUpload = document.querySelector('.img-upload');

const imgPreview = elementUpload.querySelector('.img-upload__preview img');

const effests = elementUpload.querySelector('.effects');

const sliderContainer = elementUpload.querySelector('.img-upload__effect-level');

const slider = sliderContainer.querySelector('.effect-level__slider');

const inputSlider = sliderContainer.querySelector('.effect-level__value');

let chosenEffect = EFFECTS[0];

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 0.1,
  },

  step: 0.1,
  start: 1,
  connect: 'lower',

  format: {
    to: (value) => Number(value),
    from: (value) => Number(value),
  },
});

const isDefault = () => chosenEffect.name === 'none';

const setImgStyle = () => {
  if (isDefault()) {
    imgPreview.style.filter = '';
    return;
  }
  const st = chosenEffect.effect.style;
  const un = chosenEffect.effect.unit;
  const value = inputSlider.value;

  imgPreview.style.filter = `${st}(${value}${un})`;
};

const onSliderUpdate = () => {
  inputSlider.value = slider.noUiSlider.get();
  setImgStyle();
};

const updateSlider = ({ min, max, step }) => {
  slider.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max
  });
};

const setSlider = () => {
  if (isDefault()) {
    sliderContainer.classList.add('hidden');
  } else {
    updateSlider(chosenEffect.sliderOptions);
    sliderContainer.classList.remove('hidden');
  }
};

const onEffectsChange = (evt) => {
  const effect = evt.target.value;
  chosenEffect = EFFECTS.find((elem) => elem.name === effect);
  setSlider();
  setImgStyle();
};

effests.addEventListener('change', onEffectsChange);
slider.noUiSlider.on('update', onSliderUpdate);

const resetEffect = () => {
  chosenEffect = EFFECTS[0];
  setImgStyle();
  sliderContainer.classList.add('hidden');
};

resetEffect();

export {
  resetEffect
};
