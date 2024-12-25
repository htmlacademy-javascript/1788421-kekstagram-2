
// функции с правилами валидации
const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaceTags = normalizeTags(value).map((tag) => tag.toLowerCase());

  // сравниваем длину исходного массива с длиной массива уникальных значений
  return lowerCaceTags.length === new Set(lowerCaceTags).size;
  // new Set - массив с уникальными #хештегами
};

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));


// Правила валидации для поля #хештег 
pristine.addValidator (
  hashtagFiled,
  hasValidCount,
  errorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator (
  hashtagFiled,
  hasUniqueTags,
  errorText.NO_REPEAT,
  2,
  true
);

pristine.addValidator (
  hashtagFiled,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);