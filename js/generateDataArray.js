import {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator
} from './util';

import {
  DESCRIPTIONS,
  COMMENTS_ARR,
  NAMES,
  PHOTOS_COUNT_MAX,
  LIKES,
  COMMENT,
  AVA
} from './data';

const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();

// создание сообщения в комментарии
const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENTS_ARR)).join(' ');

// создание комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVA.MIN, AVA.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// создание объекта
const createPhoto = (index) => ({
  id: generatePhotoId(),
  // url: !undefined ? `photos/${index}.jpg` : `photos/1.jpg` ,
  url: `photos/${index}.jpg`,

  description: DESCRIPTIONS[index - 1], //т.к. при создании массива берем createPhoto(index + 1)
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: Array.from({ length: getRandomInteger(COMMENT.MIN, COMMENT.MAX) }, createComment)
});

// создание массива объектов
const PhotosArray = () => Array.from({ length: PHOTOS_COUNT_MAX }, (_, index) => createPhoto(index + 1));

const imgDataArr = PhotosArray();
// console.log(imgDataArr);

export {
  imgDataArr
};
