
// функция генерации случайного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генератор id для комментариев, сквозная нумерация начиная с 1
function createIdGenerator() {
  let namId = 0;
  // функция с замыканием
  return () => {
    namId = namId + 1;
    return namId;
  };
}

// получение случайного элемент из массива - это функция
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator
};
