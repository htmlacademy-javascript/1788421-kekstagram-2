// ДЗ-7 генерация фоток по шаблону
// получаю контент шаблона
const thumbnailTemplate = document.querySelector('#picture').content;

// куда вставить все готовые фотки
const container = document.querySelector('.pictures');

// функция генгерации  и заполнения элемента из шаблона
// {деструктуризация - вместо picture}
const createThumbnail = ({ url, description, comments, likes }) => {

  //клонирую шаблон
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const img = thumbnail.querySelector('.picture__img');

  // заполняю данными шаблон
  img.src = url;
  img.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
};

//генерирую 25 элементов и отрисовываю их все сразу в ДОМ через фрагмент
const generateThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};
export {generateThumbnails};
