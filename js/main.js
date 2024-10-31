const DESCRIPTIONS = [
  'Курорт',
  'указатель пути',
  'Красивый пляж',
  'Сиськи и фотик',
  'типа супчик',
  'машина Бетмена',
  'урожай клубники не удался',
  'А ты налей и отойди',
  'Спасение с необитаемого острова',
  'Кто первый того и тапки',
  'вход в лабиринт',
  'красивая белая машинка',
  'тошниловка',
  'котамбургер',
  'в детстве мало пароли',
  'пролетая над Парижем',
  'хор мальчиков-зайчиков',
  'я в машинах не разбираюст, но эта мне нравится',
  'хочу такие тапочки с подсветкой',
  'пальмы',
  'а нормальной еды нет?',
  'ухожу в закат',
  'обитатель моря',
  'слушают руками',
  'Вам помочь?'
];

const COMMENTS_ARR = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Услада',
  'Полина-Полина',
  'Голуба',
  'Апрель',
  'Вишня',
  'Принцесса Даниэлла',
  'Заря-Заряница',
  'Луна',
  'Луналика',
  'Ярослав',
  'Лютобор',
  'Каспер',
  'Ненаглядный',
  'Дельфин'
];

const PHOTOS_COUNT_MAX = 25;
const LIKES = {
  MIN: 15,
  MAX: 200
};

const COMMENT = {
  MIN: 1,
  MAX: 30
};

const AVA = {
  MIN: 1,
  MAX: 6
};

// функция генерации случайного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// получение случайного элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


// создание сообщения в комментарии
const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(COMMENTS_ARR)).join(' ');

// ренератор id для комментариев, сквозная нумерация начиная с 1

const createIdGenerator = () => {
  let namId = 0;
  // функция с замыканием
  return () => {
    namId = namId + 1;
    return namId;
  };
};

const generateRandomId = createIdGenerator();

// создание комментария
const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVA.MIN, AVA.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});


// создание объекта
const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[index],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: Array.from({ length: getRandomInteger(COMMENT.MIN, COMMENT.MAX) }, createComment)
});

// создание массива объектов
const PhotosArray = Array.from({ length: PHOTOS_COUNT_MAX}, (_, index) => createPhoto(index + 1));
console.log(PhotosArray);
