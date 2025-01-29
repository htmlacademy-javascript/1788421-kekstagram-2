const COUNT_COMMENT_STEP = 5;

const EFFECTS = [
  {
    name: 'none',
    effect: {
      style: '',
      unit: '',
    },
    sliderOptions: {
      min: 0,
      max: 1,
      step: 0.1,
    },
  },

  {
    name: 'chrome',
    effect: {
      style: 'grayscale',
      unit: ' ',
    },

    sliderOptions: {
      min: 0,
      max: 1,
      step: 0.1,
    },
  },

  {
    name: 'sepia',
    effect: {
      style: 'sepia',
      unit: ' ',
    },
    sliderOptions: {
      min: 0,
      max: 1,
      step: 0.1,
    },
  },

  {
    name: 'marvin',
    effect: {
      style: 'invert',
      unit: '%',
    },
    sliderOptions: {
      min: 0,
      max: 100,
      step: 1,
    },
  },

  {
    name: 'phobos',
    effect: {
      style: 'blur',
      unit: 'px',
    },
    sliderOptions: {
      min: 0,
      max: 3,
      step: 0.1,
    },
  },

  {
    name: 'heat',
    effect: {
      style: 'brightness',
      unit: ' ',
    },
    sliderOptions: {
      min: 1,
      max: 3,
      step: 0.1,
    },
  },
];

const SubmitBtnText = {
  IDLE: 'Отправить',
  SUBMITTING: 'Отправляю...'
};

const BASE_URL = ' https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Methods = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить страницу. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз'
};

const TIMEOUT_DELAY = 500;

const PICTS_COUNT = 10;
const Filter = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

const ACTIVE_BTN_CLASS = 'img-filters__button--active';

const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_COUNT = 140;

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const ALERT_SHOW_TIME = 2000;

const FileTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

export {
  EFFECTS,
  COUNT_COMMENT_STEP,
  SubmitBtnText,

  BASE_URL,
  Route,
  Methods,
  ErrorText,
  TIMEOUT_DELAY,

  PICTS_COUNT,
  Filter,
  ACTIVE_BTN_CLASS,

  MAX_HASHTAG_COUNT,
  MAX_COMMENT_COUNT,
  VALID_SYMBOLS,

  STEP_SCALE,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE,

  ALERT_SHOW_TIME,
  
  FileTypes
};
