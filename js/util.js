const sortRandomy = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const sortByComments = (commA, commB) => commB.comments.length - commA.comments.length;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  sortRandomy,
  sortByComments,
  debounce,
  isEscapeKey
};
