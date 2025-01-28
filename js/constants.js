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

export {
  EFFECTS,
  COUNT_COMMENT_STEP,
  SubmitBtnText,

  BASE_URL,
  Route,
  Methods,
  ErrorText,
  TIMEOUT_DELAY
};
