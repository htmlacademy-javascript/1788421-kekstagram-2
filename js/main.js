const DESCRIPTIONS = [
  "Курорт",
  "указатель пути",
  "Красивый пляж",
  "Сиськи и фотик",
  "типа супчик",
  "машина Бетмена",
  "урожай клубники не удался",
  "А ты налей и отойди",
  "Спасение с необитаемого острова",
  "Кто первый того и тапки",
  "вход в лабиринт",
  "красивая белая машинка",
  "тошниловка",
  "котамбургер",
  "в детстве мало пароли",
  "пролетая над Парижем",
  "хор мальчиков-зайчиков",
  "я в машинах не разбираюст, но эта мне нравится",
  "хочу такие тапочки с подсветкой",
  "пальмы",
  "а нормальной еды нет?",
  "ухожу в закат",
  "обитатель моря",
  "слушают руками",
  "Вам помочь?"
];

const COMMENTS_ARR = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const NAMES = [
  "Услада",
  "Полина-Полина",
  "Голуба",
  "Апрель",
  "Вишня",
  "Принцесса Даниэлла",
  "Заря-Заряница",
  "Луна",
  "Луналика",
  "Ярослав",
  "Лютобор",
  "Каспер",
  "Ненаглядный",
  "Дельфин"
];


const PHOTOS_COUNT_MAX = 25;
const likes = {
MIN: 15,
MAX: 200
}

const COMMENT_MAX = 30;
const AVA_MAX = 6;


// функция генерации случайного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// получение случайного элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


// создание объекта
const createPhoto = () => {

  let i = 1;
  return () => {

    const numComments = getRandomInteger(0, COMMENT_MAX); // кол-во комментариев
    const numLikes = getRandomInteger(likes.MIN, likes.MAX); // кол-во лайков

    const photo = {}; // создаю объект 

    photo.id = id; // от 1 до 25
    photo.url = `photos/${id}.jpg`;
    photo.descriptor = DESCRIPTIONS[id];
    photo.likes = numLikes;
    photo.comments = Array.from({ length: numComments }, createComment());

    id++;

    return photo;
  }
};


// создание комментария
const createComment = () => {
  return () => {

    const numCommentMessage = getRandomInteger(1, 2); // из скольки предложений будет формироваться комментарий
    const commentId = getRandomInteger(1, 1000);
    const idAva = getRandomInteger(1, 6);

    const comment = {};

    comment.id = commentId; // не должно повторяться!!!!
    comment.avatar = `img/avatar-${idAva}.svg`;
    comment.message = 'надо подумать';
    comment.name = getRandomArrayElement(NAMES);  // случайный элемент из массива NAMES

    return comment;
  }
}


// создание массива объектов
const PhotosArray = Array.from({ length: PHOTOS_COUNT_MAX }, createPhoto);
console.log(PhotosArray);